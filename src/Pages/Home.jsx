import AboutHome from "../Components/AboutHome/AboutHome";
import CarouselHome from "../Components/CarouselHome/CarouselHome";
import OurServices from "../Components/OurServices/OurServices";
import Footer from "../Components/Footer/Footer";


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
            {/* Footer */}
            <Footer></Footer>
      </div>
  );
};

export default Home;
