import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import postcss from 'postcss';

const server = await createServer({ server: { middlewareMode: true } });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const html = renderToStaticMarkup(createElement(App));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Element IDs must be unique');
  for (const section of ['hero', 'about', 'skills', 'education', 'experience', 'projects', 'certifications', 'contact']) {
    assert(ids.includes(section), `Missing section: ${section}`);
  }
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
    assert(ids.includes(target), `Broken navigation target: ${target}`);
  }
  for (const [, references] of html.matchAll(/aria-(?:labelledby|describedby|controls)="([^"]+)"/g)) {
    for (const id of references.split(/\s+/)) assert(ids.includes(id), `Missing accessible reference: ${id}`);
  }
  const assets = [...html.matchAll(/(?:src|href)="(\/[^"?#]+)"/g)].map(match => match[1]);
  for (const asset of assets) assert(existsSync(resolve('public', '.' + asset)), `Missing local asset: ${asset}`);
  for (const tag of html.matchAll(/<img\b[^>]*>/g)) assert(/\balt="/.test(tag[0]), 'Images need alternative text');
  for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    assert(/rel="[^"]*noopener/.test(tag[0]), 'External tabs need noopener');
  }

  // Check the regression at the CSS cascade level: the biography's light text
  // theme must beat the shared .qa-theme rule regardless of import order.
  const about = postcss.parse(readFileSync('src/components/about.css', 'utf8'));
  const rule = about.nodes.find(node => node.selector === '.qa-theme.mf-about');
  assert(rule, 'About needs a theme override more specific than .qa-theme');
  const declarations = Object.fromEntries(rule.nodes.filter(node => node.type === 'decl').map(node => [node.prop, node.value]));
  assert.equal(declarations['--qa-text'], '#17241c');
  assert.equal(declarations.color, '#17241c');
  assert.equal(declarations.background, '#eff1e9');
  console.log(`Site audit passed: 8 sections, unique IDs, navigation, accessibility references, ${assets.length} local assets, and About theme regression.`);
} finally {
  await server.close();
}
