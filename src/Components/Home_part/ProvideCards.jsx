import React from 'react'
import './ProvideCards.css'


const ProvideCards = ({provideecards}) => {
  return (
    <>
      <div className=' flex flex-col md:flex-row px-2 md:px-12' >
      {provideecards.map((card, index) => (
          
<div key={index} className="p-4">
  <div className="bg-white border-2 border-white py-3 w-[250px] rounded-lg shadow-xl shadow-gray-600 flex flex-col gap-4 px-2 md:p-6 card-container">
    <div className="border-2 px-6 py-5 rounded-full w-fit   text-white hover:bg-orange-500 lift-up" id='imgprovide'>
      <i className={card.img}></i>
    </div>
    <p className="text-black text-left font-bold text-2xl">{card.title}</p>
    <p className="text-gray-700 text-left text-lg">{card.desc}</p>
  </div>
</div>

        ))}
      </div>
    </>
  )
};

export default ProvideCards

