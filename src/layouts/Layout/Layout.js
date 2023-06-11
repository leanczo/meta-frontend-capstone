import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <Router>
      <Topbar />
      <main data-testid="main-content">{children}</main>
      <Footer />
    </Router>
  );
};

export default Layout;
