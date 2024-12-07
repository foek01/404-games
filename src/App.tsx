import React from 'react';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';

function App() {
  const path = window.location.pathname;

  if (path === '/') {
    return <HomePage />;
  }
  return <NotFoundPage />;

}
export default App;
