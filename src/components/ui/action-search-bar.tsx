import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Search, Send, X } from 'lucide-react';
import { Input } from './input';
import './action-search-bar.css';

export interface Action {
  id: string;
  label: string;
  icon: ReactNode;
  description?: string;
  keywords?: string;
  short?: string;
  end?: string;
}

interface ActionSearchBarProps {
  actions: Action[];
  value: string;
  onValueChange: (value: string) => void;
  onSelect?: (action: Action) => void;
}

export function ActionSearchBar({ actions, value, onValueChange, onSelect }: ActionSearchBarProps) {
  const input = useRef<HTMLInputElement>(null);
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [debouncedValue, setDebouncedValue] = useState(value);
  const reducedMotion = useReducedMotion();
  const pending = value !== debouncedValue;
  const query = debouncedValue.trim().toLowerCase();
  const results = actions.filter(action => [action.label, action.description, action.keywords].join(' ').toLowerCase().includes(query));
  const activeIndex = results.findIndex(action => action.id === activeId);
  const active = !pending && activeIndex >= 0 ? results[activeIndex] : undefined;
  const duration = reducedMotion ? 0 : 0.18;

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedValue(value), 200);
    return () => window.clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k' && !event.altKey) {
        event.preventDefault();
        input.current?.focus();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', shortcut);
    return () => window.removeEventListener('keydown', shortcut);
  }, []);

  useEffect(() => {
    if (open && active) document.getElementById(`${listId}-${active.id}`)?.scrollIntoView({ block: 'nearest' });
  }, [active, listId, open]);

  function select(action: Action) {
    onValueChange(action.label);
    onSelect?.(action);
    setOpen(false);
    setActiveId(null);
  }

  return <div className="action-search" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) { setOpen(false); setActiveId(null); }
  }}>
    <label className="action-search-label" htmlFor={`${listId}-input`}>Search projects</label>
    <div className="action-search-field">
      <Input ref={input} id={`${listId}-input`} type="text" role="combobox" autoComplete="off" spellCheck={false}
        aria-autocomplete="list" aria-expanded={open} aria-controls={open ? listId : undefined}
        aria-activedescendant={open && active ? `${listId}-${active.id}` : undefined}
        placeholder="Search projects or tools" value={value}
        onFocus={() => setOpen(true)} onClick={() => setOpen(true)}
        onChange={event => { onValueChange(event.target.value); setActiveId(null); setOpen(true); }}
        onKeyDown={event => {
          if (event.nativeEvent.isComposing) return;
          if (event.key === 'Escape') { event.preventDefault(); setOpen(false); setActiveId(null); }
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault(); setOpen(true);
            if (pending || !results.length) return;
            const next = activeIndex < 0 ? (event.key === 'ArrowDown' ? 0 : results.length - 1)
              : (activeIndex + (event.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length;
            setActiveId(results[next].id);
          }
          if (event.key === 'Enter' && open && active) { event.preventDefault(); select(active); }
        }} />
      {value && <button className="action-search-clear" type="button" aria-label="Clear project search" onClick={() => {
        onValueChange(''); setActiveId(null); input.current?.focus(); setOpen(true);
      }}><X size={15} aria-hidden="true" /></button>}
      <span className="action-search-icon" aria-hidden="true"><AnimatePresence mode="wait" initial={false}>
        <motion.span key={value ? 'send' : 'search'} initial={{ opacity: 0, y: reducedMotion ? 0 : -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : 8 }} transition={{ duration }}>
          {value ? <Send size={17} /> : <Search size={17} />}
        </motion.span>
      </AnimatePresence></span>
    </div>
    <AnimatePresence>
      {open && <motion.div className="action-search-panel" initial={{ opacity: 0, y: reducedMotion ? 0 : -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration }}>
        <ul id={listId} role="listbox" aria-label="Matching projects" aria-busy={pending} className="action-search-results">
          {!pending && results.map(action => <li key={action.id} id={`${listId}-${action.id}`} role="option" aria-selected={active?.id === action.id}
            className="action-search-option" onPointerMove={() => setActiveId(action.id)}
            onMouseDown={event => event.preventDefault()} onClick={() => select(action)}>
            <span className="action-search-project-icon" aria-hidden="true">{action.icon}</span>
            <span className="action-search-copy"><span className="action-search-title">{action.label}</span><span className="action-search-description">{action.description}</span></span>
            {action.end && <span className="action-search-kind">{action.end}</span>}
          </li>)}
        </ul>
        {(pending || results.length === 0) && <p className="action-search-empty" role="status">{pending ? 'Searching projects…' : 'No matching projects'}</p>}
        <div className="action-search-hints"><span><kbd>Ctrl / ⌘ K</kbd> to search</span><span><kbd>↑ ↓</kbd> select <kbd>↵</kbd> open <kbd>Esc</kbd> close</span></div>
      </motion.div>}
    </AnimatePresence>
  </div>;
}
