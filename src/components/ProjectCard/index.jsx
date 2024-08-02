import "./project-card.css"

const ProjectCard = ({ img, descricao, nome,className}) => {
   return (
        <div className="project">
            <p className="title">
                {nome}
            </p>
            <p>
                {descricao}
            </p>
        </div>

    )
}
export default ProjectCard;