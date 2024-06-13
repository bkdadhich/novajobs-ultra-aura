import React from 'react'
import Categroiesdetails from './Categroiesdetails';

function Categrories(props) {
    const category =[
        { icon:"https://e-pora-next.vercel.app/assets/img/category/category-01.png",title:"Design Deve"},
        { icon:"https://e-pora-next.vercel.app/assets/img/category/category-02.png",title:"Development"},
        { icon:"https://e-pora-next.vercel.app/assets/img/category/category-03.png",title:" Marketing"},
        { icon:"https://e-pora-next.vercel.app/assets/img/category/category-04.png",title:" IT & Software"},
        { icon:"https://e-pora-next.vercel.app/assets/img/category/category-05.png",title:"Videography"},
        { icon:"https://e-pora-next.vercel.app/assets/img/category/category-06.png",title:"Business syn"},
        { icon:"https://e-pora-next.vercel.app/assets/img/category/category-07.png",title:"Photography"},
        { icon:"https://e-pora-next.vercel.app/assets/img/category/category-08.png",title:"Musical Intru"},
    ];
  return (
    <>
      <Categroiesdetails category={category} />
    </>
  )
}

export default Categrories
