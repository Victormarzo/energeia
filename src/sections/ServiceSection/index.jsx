import ServiceList from "../../components/ServiceList"
import "./service-section.css"

import servicos from "../../consts/servicos";

const ServiceSection = () => {
    return (
        <div className="service-section">
            <h1>SERVIÇOS</h1>
            <ServiceList  servicos={servicos} />
        </div>

    )
}
export default ServiceSection