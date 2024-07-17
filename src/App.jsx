import './App.css'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import {
  BrowserRouter as Router,
  Routes,
  Route  
} from 'react-router-dom';




function App() {
 

  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
    "/images/image11.jpg",
    "/images/image12.jpg",
    "/images/image13.jpg",
    "/images/image14.jpg"
  ]

  //<CarouselComponent type={'image'} list={images}/>
  //<CarouselComponent list={servicos[1]} />
  return (
    <div className='app'>
      <div className='content'>
        <Router>
          <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/servico" element={<ServicePage/>}/>
          </Routes>
        </Router>

      </div >
      <Sidebar />
    </div>
  )
}

export default App
