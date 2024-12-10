import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';
import RoutePath from './route/RoutePath';

// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <RoutePath />
    </Router>
  </StrictMode>
);
