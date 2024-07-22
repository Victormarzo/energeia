import { SiWhatsapp, SiFacebook } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

const contatos = [
    {
        nome: "facebook",
        icone: <SiFacebook size={"35px"} />,
        link: "https://facebook.com"

    },
    {
        nome: "email",
        icone: <MdOutlineEmail size={"35px"} />,
        link: "https://youtube.com"
    },
    {
        nome: "whatsapp",
        icone: <SiWhatsapp size={"35px"} />,
        link: "https://instagram.com"
    }
]
export default contatos
