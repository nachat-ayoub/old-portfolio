import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <main className="h-screen flex overflow-y-hidden">
      <Navbar />
      <div className="bg-slate-900 overflow-y-auto text-white flex-1 flex flex-col">
        <div className="bg-secondary text-white flex-1 flex flex-col">
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default Layout;
