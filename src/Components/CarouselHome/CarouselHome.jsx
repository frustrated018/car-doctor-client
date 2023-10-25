import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const CarouselHome = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] rounded-[10px]">
        {/* Slider 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/cQsgjjr/6.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex bottom-[50px] right-[50px]">
            <a
              href="#slide6"
              className=" flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black mr-2"
            >
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </a>
            <a
              href="#slide2"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black ml-2"
            >
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </a>
          </div>
        </div>
        {/* Slider 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/rsJr2Fq/5.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex bottom-[50px] right-[50px]">
            <a
              href="#slide1"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black mr-2"
            >
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </a>
            <a
              href="#slide3"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black ml-2"
            >
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </a>
          </div>
        </div>
        {/* Slider 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/NZjLkWg/4.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex bottom-[50px] right-[50px]">
            <a
              href="#slide2"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black mr-2"
            >
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </a>
            <a
              href="#slide4"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black ml-2"
            >
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </a>
          </div>
        </div>
        {/* Slider 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/mHM70wv/3.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex bottom-[50px] right-[50px]">
            <a
              href="#slide3"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black mr-2"
            >
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </a>
            <a
              href="#slide5"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black ml-2"
            >
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </a>
          </div>
        </div>
        {/* Slider 5 */}
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/BC5hFdS/2.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex bottom-[50px] right-[50px]">
            <a
              href="#slide4"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black mr-2"
            >
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </a>
            <a
              href="#slide6"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black ml-2"
            >
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </a>
          </div>
        </div>
        {/* Slider 6 */}
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/4YtV72W/1.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex bottom-[50px] right-[50px]">
            <a
              href="#slide5"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black mr-2"
            >
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </a>
            <a
              href="#slide1"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white hover:bg-opacity-40 bg-orange-600 bg-opacity-100 text-white hover:text-black ml-2"
            >
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselHome;
