import "./service.css"
import { useNavigate } from "react-router-dom";


const Service = ({ icone, nome, params, itens }) => {
    const navigate=  useNavigate()
    function sayY(y){
        console.log(y)
        navigate(`/:${params}`, { state: {nome,itens} })
    }
    return (
        <div onClick={()=>sayY({params})} className="servico">
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