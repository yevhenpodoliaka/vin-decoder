import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

const MainPage = lazy(() => import('../pages/MainPage'));
const VariablePage = lazy(() => import("../pages/VariablePage"))
const VariablesDetailsPage = lazy(() => import("../pages/VariablesDetailsPage"))
const NotFoundPage = lazy (()=>import("../pages/NotFoundPage"))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="variables/" element={<VariablePage />} />
          <Route
            path="variables/:variablesId"
            element={<VariablesDetailsPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
