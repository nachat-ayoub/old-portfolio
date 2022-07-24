import Div100vh from "react-div-100vh";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <Div100vh>
      <main className={`h-full flex overflow-y-hidden`}>
        <Navbar />
        <div className="h-full bg-slate-900 overflow-y-auto text-white flex-1 flex flex-col">
          <div className="h-full bg-secondary text-white flex-1 flex flex-col justify-center items-center">
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      </main>
    </Div100vh>
  );
};

export default Layout;
