import Footer from './Components/Footer/Footer'
import Instructor from './Components/Instructor/Instructor'
import HomeSecondPart from './Components/Home_part/HomeSecondPart'
import HomeFirstPart from './Components/Home_part/HomeFirstPart'
import Navbar from './Components/Navbar/Navbar'
import Course from './Components/Course/Course'
import WhyChooseUsComp from './Components/Course/WhyChooseUsComp'

function App() {
  

  return (
    <>
    <Navbar/>
    <HomeFirstPart/>
    <HomeSecondPart/>
    <Course/>
    <WhyChooseUsComp/>
    <Instructor/>
      <Footer/>
    </>
  )
}

export default App
