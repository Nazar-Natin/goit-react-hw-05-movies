import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Header  />
      <main>
        <Suspense fallback={<p>...Loading page</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
