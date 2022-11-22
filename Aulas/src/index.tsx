import React from 'react';
import ReactDOM from 'react-dom/client';
import { RoutesPath } from './app/routes';
// para erros futuros altere RoutesPath para Routes
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutesPath />
    {/* para erros futuros altere RoutesPath para Routes */}

  </React.StrictMode>
);

reportWebVitals();
