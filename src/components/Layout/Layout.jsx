import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>LOADING ....</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
