import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;

  return (
    <>
      <div className=" bg-white rounded-[10px] border border-gray-200 py-5 mx-auto flex flex-col justify-center ">
        <figure className=" w-[90%] h-[80%] mx-auto rounded-[10px] flex-1">
          <img src={img} className="rounded-[10px] w-full h-full" />
        </figure>
        {/* text */}
        <div className="ml-5">
          <h3 className="text-neutral-700 text-[25px] font-bold my-5">
            {title}
          </h3>
          <div className="flex justify-between items-center">
            <h4 className="text-left text-orange-600 text-xl font-semibold">
              Price : ${price}
            </h4>
            {/* Button */}
            <Link to={`/checkout/${_id}`}>
              <button className="w-10 h-6 text-[#FF3811]">
                <BsArrowRight></BsArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;
