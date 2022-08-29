import PrimaryBtn from "../components/PrimaryBtn";

const PageNotFound = () => {
  return (
    <div className="py-4 px-8 md:px-12 flex flex-col justify-between">
      <section className="w-full flex justify-between items-center flex-col-reverse md:flex-row md:justify-center">
        <div className="text-4xl font-bold py-5 pr-8 border-r-2 border-gray-500">
          404
        </div>
        <div className="text-lg pl-8">This page could not be found.</div>
      </section>
    </div>
  );
};

export default PageNotFound;
