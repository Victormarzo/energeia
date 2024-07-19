import "./service-page.css"
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import CarouselComponent from "../../components/CaroseulComponent";
const ServicePage = () => {
    const location = useLocation();
    const data = location.state;
    return (
        <div className="service-page">
            <h1 className="title">{data.nome}</h1>
            <CarouselComponent data={data.itens} />
        </div>
    )
}

export default ServicePage;