import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const CardSlider = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="container md:mx-auto px-10 overflow-x-hidden ">
      <Slider {...settings}>
        {cards.map((card, index) => (
          
          <div key={index} className="md:p-4">
  <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 relative">
    <div className="overflow-hidden rounded-lg">
      <img src={card.img} alt={card.name} className="w-full h-full object-cover mb-2 rounded-lg transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col justify-center items-end bg-white  bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className=" flex flex-col gap-3 px-8">
          <a href="#" className="text-orange-500 border-2 px-2 py-2 bg-white rounded-full hover:text-orange-500">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-orange-500 border-2 px-2 py-2 bg-white rounded-full hover:text-orange-500">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-orange-500 border-2 px-2 py-2 bg-white rounded-full hover:text-orange-500">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" className="text-orange-500 border-2 px-2 py-2 bg-white rounded-full hover:text-orange-500">
            <i class="fa-brands fa-youtube fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
    <p className="text-black text-center font-bold text-xl mt-2">{card.name}</p>
    <p className="text-gray-700 text-center text-lg">{card.description}</p>
  </div>
</div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
