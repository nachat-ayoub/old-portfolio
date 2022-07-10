import { BsFillPatchQuestionFill } from "react-icons/bs";

const aboutMe = () => {
  return (
    <div className="font-quick py-4 px-5 md:px-12 h-full flex justify-center flex-col">
      <section className="mb-6">
        <h2 className="font-bold text-2xl md:text-3xl mb-2 flex justify-start items-center">
          <span className="text-lightPurple">
            <BsFillPatchQuestionFill />
          </span>
          <span className="ml-3">Who i am ?</span>
        </h2>
        <p className="text-base text-gray-300 font-medium ml-7 p-2 md:pr-[30%] text-justify border-l-8 border-darkPurple rounded-md">
          Hi, my name is nachat ayoub and i am a full stack web developer, and
          also a mobile apps devoloper. I love what i do and i have the passion
          to do it.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="font-bold text-2xl md:text-3xl mb-2 flex justify-start items-center">
          <span className="text-lightPurple">
            <BsFillPatchQuestionFill />
          </span>

          <span className="ml-3">What are my skills?</span>
        </h2>
        <p className="text-base text-gray-300 font-medium ml-7 p-2 md:pr-[30%] text-justify border-l-8 border-darkPurple rounded-md">
          As a full stack developer i use the “ MERN ” React/Next js for
          frontend and node js & express js for backend and i prefer to use
          NoSQL databases sush as mongodb, but i can also use SQL databases
          (MySQL, PostgreSQL...). For mobile apps development i use cross
          platform frameworks (Flutter, React Native).
        </p>
      </section>
      <section className="mb-6">
        <h2 className="font-bold text-2xl md:text-3xl mb-2 flex justify-start items-center">
          <span className="text-lightPurple">
            <BsFillPatchQuestionFill />
          </span>

          <span className="ml-3">Why would you hire me?</span>
        </h2>
        <p className="text-base text-gray-300 font-medium ml-7 p-2 md:pr-[30%] text-justify border-l-8 border-darkPurple rounded-md">
          I have 2 years experience as a web developer, I have a BA in physical
          sciences, i am a quick learner, good problem solving skills, harmony
          easily with the team.
        </p>
      </section>
    </div>
  );
};

export default aboutMe;
