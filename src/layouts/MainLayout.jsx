import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop'; // Import ScrollToTop

const MainLayout = () => {
  return (
    <div className="bg-gray-950 text-white">
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
