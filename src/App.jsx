import './App.css'
import Logo from './components/Logo'
import { PiLightningFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import { BsClipboard2CheckFill } from "react-icons/bs";
import Sidebar from './components/Sidebar';
import Service from './components/Service';
import ServiceList from './components/ServiceList';
import CarouselComponent from './components/CaroseulComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './sections/Home';
import ServicePage from './sections/ServicePage';



function App() {
  const servicos = [
    {
      nome: "SPDA",
      icone: <PiLightningFill size={'120px'} />,
      itens: [
        {
          descricao: "Laudo, manutenção, projeto e instalação"
        },
        {
          descricao: "Remoção e descarte conforme legislação de SPDA radiotivo"
        }
      ]
    },
    {
      nome: "Laudos",
      icone: <IoDocumentTextSharp size={'120px'} />,
      itens: [
        {
          descricao: "Laudo e licença técnica para cerca elétrica junto a prefeitura"
        },
        {
          descricao: "Laudo de instalações elétricas com termografia"
        },
      ]
    },

    {
      nome: "Manutenção e Adequação",
      icone: <BsTools size={'120px'} />,
      itens: [
        {
          descricao: "Gestão de manutenção preventiva e corretiva com prioridades"
        },
        {
          descricao: "Adequação das normas técnicas vigentes, projeto e instalação de dispostivos anti surto"
        },
        {
          descricao: "Modernização e adequação do centro de medição conforme as normas técnicas vigentes"
        },
        {
          descricao: "Manutenção corretiva e preventiva  em geradores, transformadores e subestações"
        }
      ]
    }
  ]

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
            <Route path="/servicos/:servico" element={<ServicePage/>}/>
          </Routes>
        </Router>
        <ServiceList servicos={servicos} />

      </div >
      <Sidebar />
    </div>
  )
}

export default App
