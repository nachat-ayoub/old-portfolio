import { FaTimes } from "react-icons/fa";

const Popup = ({ children, isShown, setIsShown }) => {
  const trigger = () => {
    setIsShown(!isShown);
  };

  return (
    <div
      className={`${
        isShown ? "animate-fadeIn" : "animate-fadeOut"
      } z-50 w-screen h-screen bg-gray-900/70 absolute top-0 left-0 backdrop-blur-[2px] overflow-hidden flex justify-center items-center cursor-pointer`}
      onClick={trigger}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="cursor-default relative w-10/12 min-h-[200px] md:w-7/12 lg:w-5/12 bg-white rounded-sm p-1.5 flex justify-center items-center shadow-lg"
      >
        <div
          className="absolute scale-95 hover:scale-110 transition-all duration-150 ease-in-out -top-3 -right-3 p-1 bg-amber-500 text-2xl border-2 border-gray-300 shadow-lg text-white cursor-pointer rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            trigger();
          }}
        >
          <FaTimes />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
