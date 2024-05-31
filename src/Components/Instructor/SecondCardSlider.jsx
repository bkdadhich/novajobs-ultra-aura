import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SecondCardSlider.css'

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

const SecondCardSlider = ({ secondcards }) => {
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
    <div className="container mx-auto px-4 overflow-x-hidden md:overflow-visible" id='secondcard'>
      <Slider {...settings}>
        {secondcards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg flex flex-col shadow-lg p-6">
                <div className=' flex justify-between'>
                <img src={card.img} alt={card.name} className=" h-24 w-24  object-cover mb-2 rounded-lg" />
              <div className=' flex gap-2 float-right'>
                <div><i className="fa-solid fa-star text-yellow-500"></i></div>
                <div><i className="fa-solid fa-star text-yellow-500"></i></div>
                <div><i className="fa-solid fa-star text-yellow-500"></i></div>
                <div><i className="fa-solid fa-star text-yellow-500"></i></div>
                <div><i className="fa-regular fa-star text-yellow-500"></i></div>
              </div>
                </div>
              
              <div className=' text-slate-700'>Dramatically supply transparent deliverable before & you backward comp internal or "organic sources."</div>
              <div className="text-black text-left font-bold text-xl">{card.name}</div>
              <div className="text-gray-700 text-left text-lg">{card.description}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SecondCardSlider;
