import { Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import MainPage from 'pages/MainPage';
import VariablePage from 'pages/VariablePage';
import VariablesDetailsPage from "pages/VariablesDetailsPage"
import NotFoundPage from 'pages/NotFoundPage';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="variables/" element={<VariablePage />} />
          <Route
            path="variables/:variablesId"
            element={<VariablesDetailsPage/>}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
