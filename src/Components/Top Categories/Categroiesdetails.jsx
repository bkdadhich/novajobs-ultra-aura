import React from 'react'
import './Categoriesdetail.css'
import '../Home_part/HomeFirstPart.css'

const Categroiesdetails=({category})=> {
  return (
    <>
    <div className='  rounded-md px-1 md:px-14 py-20' id='detail'>
    <h1 className=' font-bold text-center text-4xl md:text-5xl py-9'>Top Categories</h1>
      <div className=' flex flex-wrap gap-2 md:grid md:grid-cols-4 md:gap-4 px-2 md:px-16 py-11 ' >
        {category.map((card,index)=>(
            
            <div key={index}>
  <div className="flex gap-5 w-[300px] rounded-xl border-2 px-2 md:px-5 py-7 border-white bg-white shadow-xl shadow-slate-300 flip-container">
    <div className="flip">
      <img src={card.icon} className="h-7 w-7" id='spanele' alt="Icon" />
    </div>
    <div className="font-semibold text-2xl hover:text-orange-500">{card.title}</div>
  </div>
</div>
    
    

        ))}
      </div>
      </div>
    </>
  )
}

export default Categroiesdetails
