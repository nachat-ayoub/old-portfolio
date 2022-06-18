import Link from "next/link";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-72 h-56 m-3 flex flex-col bg-lightPurple rounded font-quick overflow-hidden">
      <div className="group cursor-pointer relative overflow-hidden w-full h-2/3">
        <Image
          className="group-hover:blur-[2px] w-full h-full object-cover"
          alt={project.title}
          src={project.image}
          layout="fill"
          objectFit="cover"
        />
        <div className="invisible animate-fadeOut group-hover:animate-fadeIn absolute top-0 left-0 bg-darkPurple bg-opacity-60 w-full h-full flex justify-center items-center">
          <Link href={project.link}>
            <a target={project.link.includes("#") ? "" : "_blank"}>
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
