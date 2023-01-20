import { Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import MainPage from 'pages/MainPage';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <h1>HOME PAGE</h1>} />
          <Route path='decoder/' element={<MainPage />}/>
          <Route path='variables/' element={<h1>variables List</h1>}/>
        </Route>
      </Routes>
    </>
  );
};
