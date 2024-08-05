import "./projects.css"
import Title from "../../components/Title";
import CarouselComponent from "../../components/CaroseulComponent";
import projetos from "../../consts/projetos"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
    console.log(projetos.length)
    //<CarouselComponent  type={"project"} data={projetos[1]}/>
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <div className="projetos">
            <Title className="title">PROJETOS</Title>
            <div className="slider-container">
            <Slider {...settings}>
                {projetos[0].map(
                    (service, id) =>
                        <ProjectCard
                            descricao={service.descricao}
                            nome={service.nome}
                            key={id}
                            img={service.img}
                        >
                        </ProjectCard>
                )}
            </Slider>
            <Slider {...settings}>
                {projetos[1].map(
                    (service, id) =>
                        <ProjectCard
                            descricao={service.descricao}
                            nome={service.nome}
                            key={id}
                            img={service.img}
                        >
                        </ProjectCard>
                )}
            </Slider>
            <Slider {...settings}>
                {projetos[2].map(
                    (service, id) =>
                        <ProjectCard
                            descricao={service.descricao}
                            nome={service.nome}
                            key={id}
                            img={service.img}
                        >
                        </ProjectCard>
                )}
            </Slider>
            <Slider {...settings}>
                {projetos[3].map(
                    (service, id) =>
                        <ProjectCard
                            descricao={service.descricao}
                            nome={service.nome}
                            key={id}
                            img={service.img}
                        >
                        </ProjectCard>
                )}
            </Slider>
            </div>
            
        </div>
    )
}

export default Projects; 
