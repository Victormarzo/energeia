import ServiceList from "../../components/ServiceList"
import "./service-section.css"

import servicos from "../../consts/servicos";
import Title from "../../components/Title";

const ServiceSection = () => {
    return (
        <div className="service-section">
            <Title>SERVIÇOS</Title>
            <ServiceList  servicos={servicos} />
        </div>

    )
}
export default ServiceSection