import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import routes from './routes.jsx';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = (router) => {
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  );
};

renderApp(router);
