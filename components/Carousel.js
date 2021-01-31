import Slider from "react-slick";
import Image from "next/image";
import data from "../data/carousel.json";

const Carousel = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          swipe: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="-mt-20">
      {data.map((item) => {
        const { id, title, text, image, url } = item;

        return (
          <div key={id}>
            <div className="carousel relative md:h-screen h-96">
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                priority={true}
                alt="slide"
              />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-2xl text-center text-white">
                <h3 className="md:text-5xl text-2xl">{title}</h3>
                <p className="md:text-xl my-5 px-2">{text}</p>
                <a
                  className="inline-block border border-white rounded px-7 py-2 bg-white bg-opacity-20 hover:bg-opacity-10 md:text-xl"
                  href={url}
                >
                  Get started
                </a>
              </div>
            </div>
            <style jsx>{`
              .carousel {
                max-height: 600px;
              }
              .carousel:after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0.5),
                  rgba(0, 0, 0, 0.1)
                );
              }
            `}</style>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
