import Link from "next/link";

const PrimaryBtn = ({ link, text, arrow, onclick }) => {
  return (
    <div className="relative mb-8">
      <Link href={link}>
        <a
          onClick={onclick}
          className="px-14 hover:px-10 py-3 rounded-[4px] border-2 bg-darkPurple hover:tracking-wider border-darkPurple font-bold text-xl text-white uppercase font-quick transition-all duration-300"
        >
          {text}
        </a>
      </Link>
      {arrow && (
        <div className="absolute -top-36 -left-60">
          <img
            className="hidden w-60 lg:block"
            src="/assets/Arrow.png"
            alt="Arrow error"
          />
        </div>
      )}
    </div>
  );
};

export default PrimaryBtn;
