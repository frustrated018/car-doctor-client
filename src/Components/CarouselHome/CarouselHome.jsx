const CarouselHome = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] rounded-[10px]">
        {/* Slider 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/cQsgjjr/6.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/rsJr2Fq/5.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/NZjLkWg/4.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/mHM70wv/3.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 5 */}
        <div id="slide5" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/BC5hFdS/2.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slider 6 */}
        <div id="slide6" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/4YtV72W/1.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselHome;
