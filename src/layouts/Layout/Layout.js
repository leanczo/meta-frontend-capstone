import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
