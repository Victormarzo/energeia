import Title from "../../components/Title";
import { MdOutlineEmail } from "react-icons/md";
import { SiWhatsapp, SiFacebook } from "react-icons/si";
import "./contact.css"

const Contact = () => {
    return (

        <div className="contact-section">
            <Title>CONTATO</Title>
            <div className="icon">
                <a href="mailto:victor.marzo.monteiro@gmail.com">
                    <MdOutlineEmail size={"25px"} />
                </a>
                <p>victor.marzo.monteiro@gmail.com</p>
            </div>
            <div className="icon">
                <a href="https://wa.me/5541999024887">
                    <SiWhatsapp size={"25px"} />
                </a>

                <p>(41) 9 9902-4887</p>
            </div>
        </div>
    )
}

export default Contact;