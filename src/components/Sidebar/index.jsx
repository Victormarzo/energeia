import Logo from '../Logo'
import './sidebar.css'
import ContactCard from "../ContactCard";
import contatos from "../../consts/contatos"

const Sidebar = () => {
    const options = [{nome:"Inicio" , link:"/"}, 
        {nome:"SPDA",link:"/spda"}, 
        {nome:"Laudos",link:"/laudos"}, 
        {nome:"Manutenção e adequação",link:"/manutencao"}]
    return (
        <ul className='sidebar'>
            <Logo></Logo>
            {options.map(option =>
                <div className='option' key={option.nome}>
                    <a href={option.link}>
                        {option.nome}
                    </a>
                </div>
            )}
            <div className="contact-box">
                {contatos.map((contato) =>
                    <ContactCard
                        icone={contato.icone}
                        link={contato.link} >
                    </ContactCard>

                )}
            </div>

        </ul>
    )
}

export default Sidebar