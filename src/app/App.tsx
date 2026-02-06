import React from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { Layout } from './components/Layout';
import { SinglePage } from './SinglePage';
import { Admin } from './pages/Admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <SinglePage />
      </Layout>
    ),
  },
  {
    path: '/admin',
    element: <Admin />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
