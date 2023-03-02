import { Outlet, useNavigation } from 'react-router-dom';
import { Footer } from 'rsuite';

import MainNavigation from '../common/MainNavigation';
import MainFooter from '../common/MainFooter';

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
      <Footer>
        <MainFooter />
      </Footer>
    </>
  );
}

export default RootLayout;
