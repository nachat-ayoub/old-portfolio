import Link from "next/link";

const StyledButton = ({ href, children }) => {
  return (
    <div className="mt-4">
      <Link href={href}>
        <a
          target="_blank"
          className="group inline-block relative px-5 py-2 bg-Purple rounded font-semibold shadow cursor-pointer overflow-hidden"
        >
          <span className="invisible whitespace-nowrap">{children}</span>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-20">
            {children}
          </div>

          <div className="w-full h-full bg-darkPurple absolute top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 -translate-y-1/2 -left-full transition-all duration-300 ease-in-out z-10 rounded-2xl group-hover:rounded"></div>
        </a>
      </Link>
    </div>
  );
};

export default StyledButton;
