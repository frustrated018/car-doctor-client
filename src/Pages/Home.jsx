import AboutHome from "../Components/AboutHome/AboutHome";
import CarouselHome from "../Components/CarouselHome/CarouselHome";
import OurServices from "../Components/OurServices/OurServices";

const Home = () => {
  return (
      <div>
        {/* Banners */}
            <div className="my-[50px]">
        <CarouselHome></CarouselHome>
            </div>
            {/* About section */}
            <div className="my-32">
            <AboutHome></AboutHome>
            </div>
            <div className="my-32">
              <OurServices></OurServices>
            </div>
      </div>
  );
};

export default Home;
