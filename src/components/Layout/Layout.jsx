import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Spinner from 'components/Spinner/Spinner';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner/>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
