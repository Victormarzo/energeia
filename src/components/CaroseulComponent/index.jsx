import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import "./caroseul-component.css"
import ServiceCaroseul from "../ServiceCaroseul";

const CarouselComponent = ({ type, list }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (

        <Carousel
            className="caroseul"
            arrows
            centerMode={false}
            infinite
            pauseOnHover
            responsive={responsive}
            showDots
            sliderClass=""
            slidesToSlide={1}

        >
            {type ? (
                list.map(image =>
                    <img src={image}></img>
                )
            )
                :
                (
                    
                    list.itens.map(
                        service =>
                            <ServiceCaroseul
                                descricao={service.descricao}
                                nome={list.nome}

                            ></ServiceCaroseul>
                    )

                )}



        </Carousel>)
}

export default CarouselComponent