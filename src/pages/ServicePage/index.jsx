import "./service-page.css"
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import CarouselComponent from "../../components/CaroseulComponent";
import servicos from "../../consts/servicos";
import Title from "../../components/Title";
const ServicePage = () => {
    const params = useParams()
    const service = servicos.filter((servico)=>
        servico.params === params.servico)
    
    return (
        <div className="service-page">
            <Title className="title">{service[0].nome}</Title>
            <CarouselComponent data={service[0].itens} />
        </div>
    )
}

export default ServicePage;