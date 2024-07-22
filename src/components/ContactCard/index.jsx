import { useNavigate } from "react-router-dom";
import "./contact-card.css"

const ContactCard = ({icone,link}) => {
   
    return (
        <div className="contact">
            <a target="_blank" href={link}>
            {icone}
            </a>
        </div>
    )
}

export default ContactCard;