import './App.css'
import Header from './Components/Header/Header'
import Memories from './Components/Memories/Memories'
import Nav from './Components/Nav/Nav'
import Search from './Components/Searches/Search'
import Trips from './Components/Trips/Trips'
import About from './Components/About/About'
import Destination from './Components/Destinations/Destination'
import CallToAction from './Components/Footer/CallToAction'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
    
    <div className='main'>
      <Nav/>
      <Header/>
      <Memories/>
    </div>
      <Trips/>
      <Search/>
      <div className='main'>
        <About/>
      </div>
      <Destination/>
      <div className="main">
        <CallToAction/>
      </div>
        <Footer/>
    </>
  )
}

export default App
