import React from 'react'
import ProvideCards from './ProvideCards'
import './ProvideCards.css'

function HomeSecondPart(props) {
    const provideecards=[
        {img:"fa-solid fa-message",
        title:'Online Courses',
        desc:'Interactively provide access world class materials for unique catalysts for change my ocardinat.',},
        {img:'fa-solid fa-user',
        title:'Expert Trainer',
        desc:'Interactively provide access world class materials for unique catalysts for change my ocardinat.',},
        {img:'fa-solid fa-file',
        title:'Get Certificate',
        desc:'Interactively provide access world class materials for unique catalysts for change my ocardinat.',},
        {img:'fa-solid fa-folder',
        title:'Life Time Access',
        desc:'Interactively provide access world class materials for unique catalysts for change my ocardinat.',},
    ];
  return (
    <>
      <div className=' flex flex-col gap-5 justify-center text-center py-24 px-5' id="provideCards">
            <div className=' text-orange-500 text-xl font-bold py-5'>What we Offer</div>
            <div className=' font-bold text-4xl'> For Your Future Learning.</div>
            <ProvideCards provideecards={provideecards}/>
        </div>

        

    </>
  )
}

export default HomeSecondPart
