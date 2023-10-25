import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const AboutHome = () => {
  return (
    <>
      <div className="hero min-h-screen p-16">
        <div className="hero-content flex-col lg:flex-row gap-28">
          {/* Image collage */}
          <div className=" lg:w-1/2 relative">
            <img
              src={person}
              className=" w-[460px] h-[473px] rounded-[10px] object-cover"
            />
            <img
              src={parts}
              className=" w-[70%] h-[70%] rounded-[10px] object-cover border-8 border-white absolute -right-[64px] -bottom-[81px]"
            />
          </div>
          {/* Text and button */}
          <div className=" lg:w-1/2">
            <h3 className="text-orange-600 text-xl font-bold">About Us</h3>
            <div className="w-[376px] text-neutral-900 text-[45px] font-bold leading-tight mt-5 mb-7">
              We are qualified & of experience in this field
            </div>
            <p className="w-[489px] text-neutral-500 text-base font-normal capitalize leading-[30px] mt-5 mb-7">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="w-[489px] text-neutral-500 text-base font-normal capitalize leading-[30px] mt-5 mb-7">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which ddon&apos;t look even slightly
              believable.
            </p>
            <button
              className="inline-block rounded border border-orange-600 bg-orange-600 px-12 py-3 text-lg font-semibold text-white hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500"
              href="#"
            >
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
