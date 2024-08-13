import { useState } from "react"
import "./project-card.css"

const ProjectCard = ({ img, descricao, nome }) => {
    const [show, setShow] = useState(false)


    return (
        show && descricao ? (
            <div className="project show" onClick={() => setShow(!show)}>
                <img src={img}></img>
                
                <h2 className="project-title">
                    {nome}
                </h2>
                <div className="project-description">
                    <p>
                    {descricao}
                    </p>
                   
                </div>
            </div>) : (
            <div className="project" onClick={() => setShow(!show)}>
                <img src={img}></img>
                <h2 className="project-title">
                    {nome}

                </h2>
            </div>)

    )
}
export default ProjectCard;