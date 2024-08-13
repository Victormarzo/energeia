import Banner from "../../sections/Banner"
import Contact from "../../sections/Contact"
import ServiceSection from "../../sections/ServiceSection"
import Projects from "../../sections/Projects"
import "./home.css"
import Sidebar from "../../components/Sidebar"

const Home = ()=>{
    return (
        <div className="home">
            <Sidebar/>
            <Banner/>
            <ServiceSection/>
            <Contact/>
            <Projects/>
        </div>

    )
}
export default Home