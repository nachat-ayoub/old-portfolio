import Link from "next/link";
// pages icones
import { RiHome2Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
// social media icones
import {
  RiLinkedinFill,
  RiFacebookFill,
  RiGithubFill,
  RiTwitterFill,
} from "react-icons/ri";

const Navbar = () => {
  const socialLinks = {
    fb: "https://www.facebook.com/profile.php?id=100035944533190",
    twitter: "https://twitter.com/nachatayoub1",
    github: "https://github.com/venomVV/",
    linkedin: "https://www.linkedin.com/in/ayoub-nachat-a92012201/",
  };

  return (
    <div className="h-screen w-24 py-5 px-2 text-center flex flex-col items-center justify-between text-white bg-darkPurple">
      {/* LOGO */}
      <div className="font-quick font-bold">
        <Link href="/">
          <a className="hover:animate-pulse">
            <div className="tracking-widest">AYOUB</div>
            <div className="">NACHAT</div>
          </a>
        </Link>
      </div>
      {/* Pages Links */}
      <div className="text-3xl ">
        <div className="p-2 hover:text-Purple hover:animate-bounce">
          <Link href="/">
            <a>
              <RiHome2Line />
            </a>
          </Link>
        </div>

        <div className="p-2 hover:text-Purple hover:animate-bounce">
          <Link href="/about-me">
            <a>
              <BsPerson />
            </a>
          </Link>
        </div>

        <div className="p-2 hover:text-Purple hover:animate-bounce">
          <Link href="/projects">
            <a>
              <IoEyeOutline />
            </a>
          </Link>
        </div>

        <div className="p-2 hover:text-Purple hover:animate-bounce">
          <Link href="/contact">
            <a>
              <FiMail />
            </a>
          </Link>
        </div>
        {/*  */}
      </div>

      {/* Social Media Links */}
      <div className="">
        {/*  */}
        <div className="p-1 hover:text-Purple hover:animate-bounce">
          <Link href={socialLinks.linkedin}>
            <a className="text-lg" target="_blank">
              <RiLinkedinFill />
            </a>
          </Link>
        </div>

        <div className="p-1 hover:text-Purple hover:animate-bounce">
          <Link href={socialLinks.github}>
            <a className="text-lg" target="_blank">
              <RiGithubFill />
            </a>
          </Link>
        </div>

        <div className="p-1 hover:text-Purple hover:animate-bounce">
          <Link href={socialLinks.twitter}>
            <a className="text-lg" target="_blank">
              <RiTwitterFill />
            </a>
          </Link>
        </div>

        <div className="p-1 hover:text-Purple hover:animate-bounce">
          <Link href={socialLinks.fb}>
            <a className="text-lg" target="_blank">
              <RiFacebookFill />
            </a>
          </Link>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Navbar;
