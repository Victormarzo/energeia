const projetos = [
    [{
        nome: "Embratel",
        img: "",
        descricao: "Curitiba-PR, Florianópolis-SC e Porto Alegre-RS",
    },
    {
        nome: "Hidélica Instalações Elétricas e Hidráulicas Ltda.",
        img: "",
        descricao: "Orçamentos, projetos  e execução de obras comerciais, industriais e residenciais",
        cargo: "Engenheiro Eletricista - Responsável Técnico"
    },
    {
        nome: "Solfus Engenharia e Conservação de Energia Ltda.",
        img: "",
        descricao: "Consultoria geral - conservação de energia, obras, orçamentos e projetos. Manutenção Elétrica Peróxidos do Brasil",
        cargo: "Engenheiro Eletricista - Responsável Técnico"
    },
    {
        nome: "Alçabras Indústria e Comércio Ltda.",
        img: "",
        descricao: "Projeto de entrada de energia, com cálculo dos níveis de curto, parametrização e coordenação das proteções"
    },
    {
        nome: "Spacecom",
        img: "",
        descricao: "Montagem de site de monitoramento de tornozeleira eletrônica - 2 em Curitriba-PR, 2 em Cuiabá-MT e 1 em Belém-PA",
        cargo: "Engenheiro Responsável"
    },
    {
        nome: "Ligga",
        img: "",
        descricao: "Conexão de média tensão (linha viva), instalação de SE 300kVA/13,8kV, gerador 380kVA, Qta e Qdg.",
        cargo: "Engenheiro Responsável"
    },
    {
        nome: "Sensor Engenharia e Construções Ltda.",
        img: "",
        descricao: "Orçamentos, projetos e execução de obras comerciais, industriais e residenciais.",
        cargo: "Engenheiro Eletricista - Responsável Técnico"
    },
    {
        nome: "SERPRO Curitiba-PR",
        img: "",
        descricao: "Manutenção Elétrica Civil"
    },
    {
        nome: "Shopping Estação",
        img: "",
        descricao: "Projeto das instalações elétricas, iluminação, dados e voz"
    },
    {
        nome: "Proinstel Indústria e Comercial de Equipamentos Elétricos Ltda.",
        img: "",
        descricao: "Orçamentos, projetos, compras, contratação, demissão, supervisão das equipes de projeto, montagem mecânica e elétrica de painéis elétricos.",
        cargo: "Engenheiro Eletricista - Diretor Industrial"
    }
    ],
    [
        {
            nome: "A.J. RORATO",
            img: "",
            cargo: "Profissional Liberal",
            descricao: "Indústria com 50.000 m² - Taubaté-SP, Edifício comercial RC - projeto e execução da obra - Curiiba-PR"
        },
        {
            nome: "Banco Postal",
            cargo: "Engenheiro Eletricista",
            img: "",
            descricao: "Projeto e Execução elétrica, rede LAN, civil(divisórias), hidráulico - para implantação do Banco Postal nos Correiso (aproximadamente 100 agências)"
        },
        {
            nome: "PNUD - Programa das Nações Unidas para o Desenvolvimento Governo do Estado do Paraná",
            cargo: "Coordenador do Projeto Paraná Digital - Consultor Especializado em Eng. Elétrica",
            descricao: "Supervisão e validação dos Laudos de Avaliação Técnica de conferência local apresentados e acompanhamento da implantação de projetos de reforço elétrico, de lógica, de proteção por alarme e de SPDA de 540 prédios escolares e/ ou unidades adminstrativas descentralizadas da Secretaria de Estado  de Educação Do Paraná   ",
            img: ""
        },
        {
            nome: "IBQ Ind. Química Ltda.",
            cargo: "Profissional Liberal",
            descricao: "Projeto de entrada de energia, com cálculo os níveis de curto e parametrização do relé de proteção para Sistema de Transfêrencia em rampa (paralelismo Copel - Grupo Gerador) - Quatro Barras-PR",
            img: ""
        },
        {
            nome: "Azevedo & Travassos Petrobras",
            cargo: "Coordenador de Instalações Elétricas e hidráulicas - Projetista de Elétrica)",
            img: "",
            descricao: "Execução e Certificaçãpo dos Projetos elétricos, Coordenação na Compra, Testes em Fábrica , Condicionamento, execução e comissionamento dos seguintes sistemas: Telecomunicação, CFTV, Det. Al. de Incêndio, Automação, Elétrica (Alimentação 13,8kV, Distribuição principal 480Vca, Força 220/127Vca, CA confiável 208/120Vca, CC confiável 125Vcc, Aterramento, SPDA, Iluminação, SCMD (automação de todo o sistema elétrico, configuração dos IED's, Rede IEC-61850 e Profibus-DP)), Hidráulica, Esgoto sanitario, Combate a Incêndio, Drenagem e Águas Pluviais"
        }
    ],
    [
        {
            nome: "Tribunal Regional do Trabalho - TRT/PR",
            img: "",
            descricao: "Projeto e execução da alimentação do novo Data Center."
        },
        {
            nome: "Claro",
            img: "",
            descricao: "Instalação de Ponto de Atendimento, suporte para TV e display para 17 lojas Claro na região Sul e 21 na região Centro-Oeste - Reforma Geral - Elétrica, lógica e telefonia."
        
        },
        {
            nome: "Irmãos Muffato & Cia. Ltda. - Supermercado",
            img: "",
            descricao: "Execução da entrada de serviço em MT, Instalações elétricas em BT, Ca confiável, SPDA, Infra-estrutura de lógica, telefonia, dadose voz, CFTV, Sistema de segurança, Alarme de Incêndio, som ambiente. Apucarana-PR",
        },
        {
            nome: "Tribunal Regional do Trabalho - TRT/PR",
            img: "",
            descricao: "Projeto e execução da alimentação do novo Data Center."
        },
        {
            nome:"Clinica Sol & Chuva Medicina do Trabalho",
            img:"",
            descricao:"Elaboração e execução de diversos cursos de NR10"
        },
        {
            nome:"Techena Manutenções Especializadas Ltda.",
            img:"",
            descricao:"Consultoria geral - Rede segura, obras, orçamentos e projetos."
        },
        {
            nome:"Petrobras",
            img:"",
            descricao:"Acompanhamento e Testes de máquinas de VAC Petrobras Repar. Consórcio INTERPAR. Araucária-PR"        
        },
        {
            nome:"Petrobras",
            img:"",
            descricao:"Inspeção de Painéis Elétricos para a Petrobras Compartilhado RNNE/SI/SOM Ediba Conjunto, Pituba. Salvador-BA"

        },
        {
            nome:"HORIZONS Telecomunicaçãoes e Tecnologia Ltda.",
            img:"",
            descricao:"Projeto e execução das instalações elétricas de Alta Tensão (Entrada de energia - AT) e baixa tensão (QGBT e Alimentadores)"

        },
        {
            nome:"COPLAC-Companhia de Planejamento Acústico",
            img:"",
            descricao:"Projeto Elétrico da entrada de energia em MT, distribuição MT, transformação e distribuição em BT."

        },
        {
             nome:"A1 Engenharia e Gerenciamento Ltda.",
             img:"",
             descricao:"Projeto das Instalações elétricas dos seguintes sistemas:Alimentação 13,8kV, força 220/127Vca, CA confiável, Aterramento, SPDA, Iluminação Normal, Iluminação de Emergência, Rota de fuga, Som, Alarme, Dados, Voz, CFTV, CATV"
        },
        {
            nome:"CAVO Serviços e Saneamento S.A.",
            img:"",
            descricao:"Projeto Elétrico em nova unidade Curitiba-PR"

        },
        

    ],
    [
        {
            nome:"Flex Condomínios",
            img:""
        },
        {
            nome:"Batel Administradora de Condomínios",
            img:""
        },
        {
            nome:"Evidência Gestão de Condomínios",
            img:""
        },
        {
            nome:"Síndiconet",
            img:""
        },
        {
            nome:"Administradora Lima",
            img:""
        },
        {
            nome:"Ernest Gardemann Administradora de Condomínios",
            img:""
        },
        {
            nome:"Administração de Condomínios Curitiba-BR",
            img:""
        },
        {
            nome:"Completa Administradora de Condomínios",
            img:""
        }
    ]

]

export default projetos;
