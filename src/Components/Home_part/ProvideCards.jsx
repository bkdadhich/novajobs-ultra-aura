import React from 'react'


const ProvideCards = ({provideecards}) => {
  return (
    <>
      <div className=' flex flex-col md:flex-row' >
      {provideecards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-white border-2 border-white rounded-lg shadow-lg flex flex-col gap-4 p-6">
                <div className=' border-2 px-5 py-2 rounded-full w-fit bg-green-900 text-white hover:bg-orange-500 hover:mb-1'><i className={card.img}  ></i></div>
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

