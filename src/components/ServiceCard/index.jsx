import "./service-card.css"

const ServiceCard = ({descricao,className ,id}) => {
    console.log(id,descricao)
    return (
        <div className={className}>
            
            <p>{descricao}</p>
        </div>
    )
}
export default ServiceCard