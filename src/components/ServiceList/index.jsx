import Service from '../Service';
import './service-list.css'

const ServiceList = ({ servicos }) => {
    return (
        <section className='list'>
            {
                servicos.map(servico =>
                    <Service key={servico.nome} nome={servico.nome} icone={servico.icone}></Service>)
            }
        </section>

    )
}
export default ServiceList;