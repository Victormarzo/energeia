import "./service.css"
import { useNavigate } from "react-router-dom";


const Service = ({ icone, nome, params }) => {
    const navigate=  useNavigate()
    function goTo(){
        navigate(`/${params}`)
    }
    return (
        <div onClick={()=>goTo({params})} className="servico">
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