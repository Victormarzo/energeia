import Banner from "../../sections/Banner"
import Contact from "../../sections/Contact"
import ServiceSection from "../../sections/ServiceSection"
import Projects from "../../sections/Projects"
import "./home.css"


const Home = ()=>{
    return (
        <>
            <Banner/>
            <ServiceSection/>
            <Contact/>
            <Projects/>
        </>

    )
}
export default Home