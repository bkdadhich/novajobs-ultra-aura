import './App.css'
import Footer from './Components/Footer/Footer'
import Instructor from './Components/Instructor/Instructor'
import HomeSecondPart from './Components/Home_part/HomeSecondPart'
import HomeFirstPart from './Components/Home_part/HomeFirstPart'
import Navbar from './Components/Navbar/Navbar'
import Course from './Components/Course/Course'
import WhyChooseUsComp from './Components/Course/WhyChooseUsComp'
import AboutOurCourses from './Components/About/About'
import Categrories from './Components/Top Categories/Categrories'
import Login from './Components/Login/Login'

function App() {
  

  return (
    <>
    
    
    <HomeFirstPart/>
    <HomeSecondPart/>
    <AboutOurCourses/>
    <Categrories/>
    <Course/>
    <WhyChooseUsComp/>
    <Instructor/>
      
    
    
      {/* <Login/> */}
    </>
  )
}

export default App
