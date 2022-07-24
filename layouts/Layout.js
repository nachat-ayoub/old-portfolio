import Div100vh from "react-div-100vh";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <Div100vh className="h-full flex overflow-y-hidden">
      <Navbar />
      <div className="min-h-fit bg-slate-900 overflow-y-auto text-white flex-1 flex flex-col">
        <div className="min-h-fit bg-secondary text-white flex-1 flex flex-col justify-center items-center">
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </Div100vh>
  );
};

export default Layout;
