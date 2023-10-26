import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;

  return (
    <>
      <div className=" bg-white rounded-[10px] border border-gray-200 pt-5 pb-8 mx-auto flex flex-col justify-center relative">
        <figure className=" w-[90%] h-[80%] mx-auto rounded-[10px] flex-1">
          <img src={img} className="rounded-[10px] w-full h-full" />
        </figure>
        {/* text */}
        <div className="ml-5">
          <h3 className="text-neutral-700 text-[25px] font-bold my-5">{title}</h3>
          <h4 className="text-left text-orange-600 text-xl font-semibold">
            Price : ${price}
          </h4>
        </div>
        {/* Button */}
        <button className="absolute w-10 h-10 text-[#FF3811] right-0 bottom-0">
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </button>
      </div>
    </>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;
