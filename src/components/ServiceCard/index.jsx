import "./service-card.css"

const ServiceCard = ({descricao,className ,id}) => {
    return (
        <div className={className}>
            <p>{descricao}</p>
        </div>
    )
}
export default ServiceCard