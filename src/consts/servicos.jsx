import { PiLightningFill } from "react-icons/pi";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
const servicos = [
    {
        nome: "SPDA",
        icone: <PiLightningFill size={'120px'} />,
        itens: [
            {
                descricao: "Laudo, manutenção, projeto e instalação"
            },
            {
                descricao: "Remoção e descarte conforme legislação de SPDA radiotivo"
            }
        ],
         params:"spda"
    },
    {
        nome: "Laudos",
        icone: <IoDocumentTextSharp size={'120px'} />,
        itens: [
            {
                descricao: "Laudo e licença técnica para cerca elétrica junto a prefeitura"
            },
            {
                descricao: "Laudo de instalações elétricas com termografia"
            },
        ],
         params:"laudos"
    },

    {
        nome: "Manutenção e Adequação",
        icone: <BsTools size={'120px'} />,
        itens: [
            {
                descricao: "Gestão de manutenção preventiva e corretiva com prioridades"
            },
            {
                descricao: "Adequação das normas técnicas vigentes, projeto e instalação de dispostivos anti surto"
            },
            {
                descricao: "Modernização e adequação do centro de medição conforme as normas técnicas vigentes"
            },
            {
                descricao: "Manutenção corretiva e preventiva  em geradores, transformadores e subestações"
            }
        ],
        params:"manutencao"
    }
]

export default servicos