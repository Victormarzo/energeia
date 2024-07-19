import React, { useState } from "react";
import  "./caroseul-component.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


import ServiceCard from "../ServiceCard";

const CarouselComponent = ({ data,type }) => {
    const [slide, setSlide] = useState(0);
    console.log(data)
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {type ? (
                data.map((item, id) => {
                    return (
                        <img
                            src={item.src}
                            alt={item.alt}
                            key={id}
                            className={slide === id ? "slide" : "slide slide-hidden"}
                        />
                    )
                })
            ) : (
                data.map(
                    (service, id) =>
                        <ServiceCard
                            descricao={service.descricao}
                            nome={data.nome}
                            key={id}
                            className={slide === id ? "slide" : "slide slide-hidden"}
                        >
                        </ServiceCard>
                )
            )


            }
            <BsArrowRightCircleFill
                onClick={nextSlide}
                className="arrow arrow-right"
            />
            <span className="indicators">
                {data.map((_, id) => {
                    return (
                        <button
                            key={id}
                            className={
                                slide === id ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(id)}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};

export default CarouselComponent