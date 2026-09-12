import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './qa-premium.css';
import './sections-light.css';

// Clear the previous section from the address on refresh, without adding history.
// Keep direct section links and back/forward navigation intact.
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
if (navigation?.type === 'reload' && window.location.hash) {
  window.history.replaceState(
    window.history.state,
    '',
    window.location.pathname + window.location.search,
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import './contact-footer.css';
import './layout-responsive.css';
