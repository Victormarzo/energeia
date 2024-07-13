import "./service.css"
const Service = ({ icone, nome }) => {
    return (
        <div className="servico">
            <div className="icone">
                {icone}
            </div>
            <div className="titulo">
                <h2>{nome}</h2>
            </div>
        </div>
    )
}


export default Service