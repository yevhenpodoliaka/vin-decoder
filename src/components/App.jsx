import { Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="variables/" element={<h1>variables List</h1>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
