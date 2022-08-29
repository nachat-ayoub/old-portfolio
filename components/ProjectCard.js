import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsFillEyeFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import StyledButton from "./StyledButton";

const ProjectCard = ({ project }) => {
  const [isShown, setIsShown] = useState(false);
  const [soon, setSoon] = useState(false);

  useEffect(() => {
    setSoon(project.preview_link.includes("#"));
  }, [project]);

  return (
    <div className="w-72 h-72 m-3 flex flex-col rounded font-quick overflow-hidden">
      {isShown && (
        <Popup isShown={isShown} setIsShown={setIsShown}>
          <div className="px-5 flex flex-col justify-center items-center">
            <div className="text-6xl mb-4 cursor-pointer hover:scale-125 animate-wave transition-all duration-300">
              😓
            </div>
            <h4 className="font-bold text-gray-800 flex text-lg text-center">
              Ohh! i am very sorry, i am still working on this project.
            </h4>
          </div>
        </Popup>
      )}

      <div className="group hover:border border-gray-800 border-opacity-50 rounded cursor-pointer relative overflow-hidden w-full h-2/3">
        {soon && (
          <div className="z-10 absolute -rotate-45 top-1.5 -left-1.5 -translate-x-1/4 px-10 bg-yellow-400 text-black font-roboto font-bold p-1">
            Soon
          </div>
        )}
        <Image
          className="group-hover:blur-[1.8px] w-full h-full object-cover"
          alt={project.image.data.attributes.caption}
          src={project.image.data.attributes.url}
          layout="fill"
          objectFit="cover"
        />
        <div className="invisible animate-fadeOut group-hover:animate-fadeIn absolute top-0 left-0 bg-darkPurple bg-opacity-60 w-full h-full flex justify-evenly items-center">
          <Link href={project.code_link}>
            <a
              className="mx-2"
              onClick={() => {
                project.code_link.includes("#") && setIsShown(true);
              }}
              target={project.code_link.includes("#") ? "" : "_blank"}
            >
              <button className="flex justify-center items-center font-bold bg-white text-Purple text-2xl p-3 rounded-full hover:bg-Purple hover:text-white  hover:rotate-[360deg] transition-all duration-500">
                <BsGithub />
              </button>
            </a>
          </Link>

          <Link href={project.preview_link}>
            <a
              target={project.preview_link.includes("#") ? "" : "_blank"}
              onClick={() => {
                project.preview_link.includes("#") && setIsShown(true);
              }}
            >
              <div className="font-bold text-2xl p-3 rounded-full bg-white text-Purple hover:bg-Purple hover:text-white hover:rotate-[360deg] transition-all duration-500">
                <BsFillEyeFill />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="py-3 flex-1 w-full">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="font-quick text-sm font-semibold text-gray-400">
          {project.publishedAt?.split("T")[0]}
        </p>

        {/*  */}
        <StyledButton href={project?.slug ? "/projects/" + project?.slug : "#"}>
          Read more...
        </StyledButton>
      </div>
    </div>
  );
};

export default ProjectCard;
