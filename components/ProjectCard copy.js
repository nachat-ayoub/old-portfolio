import Link from "next/link";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";
import { useEffect, useState } from "react";
import Popup from "./Popup";

const ProjectCard = ({ project }) => {
  const [isShown, setIsShown] = useState(false);
  const [soon, setSoon] = useState(false);

  useEffect(() => {
    setSoon(project.link.includes("#"));
  }, [project]);

  return (
    <div className="w-72 h-56 m-3 flex flex-col bg-lightPurple rounded font-quick overflow-hidden">
      {isShown && (
        <Popup isShown={isShown} setIsShown={setIsShown}>
          <div className="px-5 flex flex-col justify-center items-center">
            <div className="text-6xl mb-4 cursor-pointer hover:scale-125 transition-all duration-300">
              😓
            </div>
            <h4 className="font-bold text-gray-800 flex text-lg text-center">
              Ohh! i am very sorry, i am still working on this project.
            </h4>
          </div>
        </Popup>
      )}

      <div className="group cursor-pointer relative overflow-hidden w-full h-2/3">
        {soon && (
          <div className="z-10 absolute -rotate-45 top-1.5 -left-1.5 -translate-x-1/4 px-10 bg-yellow-400 text-black font-roboto font-bold p-1">
            Soon
          </div>
        )}
        <Image
          className="group-hover:blur-[2px] w-full h-full object-cover"
          alt={project.title}
          src={project.image}
          layout="fill"
          objectFit="cover"
        />
        <div className="invisible animate-fadeOut group-hover:animate-fadeIn absolute top-0 left-0 bg-darkPurple bg-opacity-60 w-full h-full flex justify-center items-center">
          <Link href={project.link}>
            <a
              onClick={() => {
                project.link.includes("#") && setIsShown(true);
              }}
              target={project.link.includes("#") ? "" : "_blank"}
            >
              <button className="flex justify-center items-center bg-Purple font-bold py-3 px-4 rounded">
                <IoPlay />
                <span className="ml-1">Live Preview</span>
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className="p-3 flex-1 text-black">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="font-quick text-sm font-semibold text-zinc-900">
          {project.date}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
