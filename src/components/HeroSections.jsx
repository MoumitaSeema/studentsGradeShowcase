import Img from "./layouts/Img";
import HeroSectionsImg from "../assets/herosImg.png";

const HeroSections = () => {
  return (
    <section className="bg-violet-800 pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
          <Img
            className="md:order-2 object-cover ml-auto animate-updown"
            src={HeroSectionsImg}
            width="500px"
            height="500px"
            alt="HeroSectionsImg"
          />
          <div>
            <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
              The Future of Learning starts with students at the center
            </h1>
            <a className="px-5 py-2.5 bg-black rounded-[44px]" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
