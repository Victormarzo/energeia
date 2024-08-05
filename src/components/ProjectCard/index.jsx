import "./project-card.css"

const ProjectCard = ({ img, descricao, nome}) => {
   console.log(img, descricao, nome)
    return (
        <div className="project">
            
            <img src={img}></img>
            <p className="project-title">
                {nome}
            </p>
            <p>
                {descricao}
            </p>
        </div>

    )
}
export default ProjectCard;