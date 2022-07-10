import PrimaryBtn from "../components/PrimaryBtn";

const contact = () => {
  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submited Contact Form!!");
  };

  return (
    <div className="font-quick text-black w-full h-full py-4 px-2 md:px-12 lg:px-28 flex justify-center items-center flex-col">
      <h1 className="text-4xl text-white font-bold mb-4"> Contact Me 😁 </h1>
      <div className="w-full flex justify-center items-center">
        <input
          className="w-1/2 px-2 md:px-8 py-2 md:py-4 m-2 text-lg font-quick  rounded font-bold placeholder-secondary"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-1/2 px-2 md:px-8 py-2 md:py-4 m-2 text-lg font-quick rounded font-bold placeholder-secondary focus:font-quick"
          type="email"
          placeholder="Email"
        />
      </div>

      <div className="w-full flex justify-center items-center">
        <input
          className="w-full px-2 md:px-8 py-2 md:py-4 m-2 text-lg font-quick rounded font-bold placeholder-secondary"
          type="text"
          placeholder="Subject"
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <textarea
          className="w-full px-2 md:px-8 py-2 md:py-4 m-2 text-lg font-quick rounded font-bold placeholder-secondary"
          placeholder="Message"
          cols="30"
          rows="6"
        ></textarea>
      </div>

      <div className="w-full flex justify-center items-center mt-5">
        <PrimaryBtn onclick={HandleSubmit} link={"#Contact"} text={"Submit"} />
      </div>
    </div>
  );
};

export default contact;
