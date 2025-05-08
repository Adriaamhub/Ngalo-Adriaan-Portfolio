import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import TopBar from './Components/TopBar/TopBar'
import CourseCards from './Components/CourseCards/CourseCards'
import AboutSection from './Components/AboutSection/AboutSection'
import MilestoneSection from './Components/MilestoneSection/MilestoneSection'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents'
import './CombinedSection.css';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import JoinPlatform from './Components/JoinPlatform/JoinPlatform'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div className='container'>
      <TopBar/>
			<Navbar/>
      <Hero/>
      <CourseCards/>
     <AboutSection/>
      <MilestoneSection/>
      <div className="combined-section">
      <WhyChooseUs />
      <UpcomingEvents />
    </div>
    <VideoPlayer/>
    <JoinPlatform/>
    <Footer/>
    </div>
 
  )
}



export default App;
