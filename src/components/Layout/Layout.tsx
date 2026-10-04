import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { preloadCriticalComponents } from "../../utils/preloadUtils";
import SeoHead from "../../seo/SeoHead";

const Layout = () => {
  useEffect(() => {
    // Preload critical components after initial render
    preloadCriticalComponents();
  }, []);

  return (
    <>
      <SeoHead />
      <ScrollToTop />
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;