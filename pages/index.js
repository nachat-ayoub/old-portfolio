import PrimaryBtn from "../components/PrimaryBtn";

const Home = () => {
  return (
    <div className="py-4 px-8 md:px-12 flex flex-col justify-between">
      <section className="w-full flex justify-between items-center flex-col-reverse md:flex-row md:justify-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="flex">
              Hi <p className="ml-1 animate-wave">👋</p>,
            </span>
            <span>my name is Nachat Ayoub, And i am a</span>
            <span className="text-yellow-500"> full stack web developer.</span>
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/assets/Coder.png" width="100%" height="100%" />
        </div>
      </section>
      <section className="mt-10 w-full flex justify-center items-center">
        <PrimaryBtn arrow link={"/projects"} text={"See My Work"} />
      </section>
    </div>
  );
};

export default Home;
