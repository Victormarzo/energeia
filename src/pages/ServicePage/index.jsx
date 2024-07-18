import "./service-page.css"
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ServiceCaroseul from '../../components/ServiceCaroseul'
import CarouselComponent from "../../components/CaroseulComponent";
const ServicePage = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data.itens)
    return (
        <div className="service-page">
            <h1>{data.nome}</h1>
            <CarouselComponent list={[...data.itens, { descricao: "asdasdasds" }]} />
        </div>
    )
}

export default ServicePage;