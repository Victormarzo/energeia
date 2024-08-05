const projetos = [
    [
        {
            nome: "Embratel",
            img: "images/empresas/embratel.png",
            descricao: "Curitiba-PR, Florianópolis-SC e Porto Alegre-RS",
        },
        {
            nome: "Hidélica Instalações Elétricas e Hidráulicas Ltda.",
            img: "images/empresas/instalacoes-eletricas.jpg",
            descricao: "Orçamentos, projetos  e execução de obras comerciais, industriais e residenciais",
            cargo: "Engenheiro Eletricista - Responsável Técnico"
        },
        {
            nome: "Solfus Engenharia e Conservação de Energia Ltda.",
            img: "images/empresas/solfus.png",
            descricao: "Consultoria geral - conservação de energia, obras, orçamentos e projetos. Manutenção Elétrica Peróxidos do Brasil",
            cargo: "Engenheiro Eletricista - Responsável Técnico"
        },
        {
            nome: "Alçabras Indústria e Comércio Ltda.",
            img: "images/empresas/alçabras.jpg",
            descricao: "Projeto de entrada de energia, com cálculo dos níveis de curto, parametrização e coordenação das proteções"
        },
        {
            nome: "Spacecom",
            img: "images/empresas/spacecom.png",
            descricao: "Montagem de site de monitoramento de tornozeleira eletrônica - 2 em Curitriba-PR, 2 em Cuiabá-MT e 1 em Belém-PA",
            cargo: "Engenheiro Responsável"
        },
        {
            nome: "Ligga",
            img: "images/empresas/ligga.webp",
            descricao: "Conexão de média tensão (linha viva), instalação de SE 300kVA/13,8kV, gerador 380kVA, Qta e Qdg.",
            cargo: "Engenheiro Responsável"
        },
        {
            nome: "Sensor Engenharia e Construções Ltda.",
            img: "images/empresas/instalacoes-eletricas2.jpg",
            descricao: "Orçamentos, projetos e execução de obras comerciais, industriais e residenciais.",
            cargo: "Engenheiro Eletricista - Responsável Técnico"
        },
        {
            nome: "SERPRO Curitiba-PR",
            img: "images/empresas/serpro.jpeg",
            descricao: "Manutenção Elétrica Civil"
        },
        {
            nome: "Shopping Estação",
            img: "images/empresas/estacao.svg",
            descricao: "Projeto das instalações elétricas, iluminação, dados e voz"
        },
        {
            nome: "Proinstel Indústria e Comercial de Equipamentos Elétricos Ltda.",
            img: "images/empresas/instalacoes-eletricas3.png",
            descricao: "Orçamentos, projetos, compras, contratação, demissão, supervisão das equipes de projeto, montagem mecânica e elétrica de painéis elétricos.",
            cargo: "Engenheiro Eletricista - Diretor Industrial"
        }
    ],
    [
        {
            nome: "A.J. RORATO",
            img: "images/empresas/ajrorato.png",
            cargo: "Profissional Liberal",
            descricao: "Indústria com 50.000 m² - Taubaté-SP, Edifício comercial RC - projeto e execução da obra - Curiiba-PR"
        },
        {
            nome: "Banco Postal",
            cargo: "Engenheiro Eletricista",
            img: "images/empresas/bancopostal.jpeg",
            descricao: "Projeto e Execução elétrica, rede LAN, civil(divisórias), hidráulico - para implantação do Banco Postal nos Correiso (aproximadamente 100 agências)"
        },
        {
            nome: "PNUD - Programa das Nações Unidas para o Desenvolvimento Governo do Estado do Paraná",
            cargo: "Coordenador do Projeto Paraná Digital - Consultor Especializado em Eng. Elétrica",
            descricao: "Supervisão e validação dos Laudos de Avaliação Técnica de conferência local apresentados e acompanhamento da implantação de projetos de reforço elétrico, de lógica, de proteção por alarme e de SPDA de 540 prédios escolares e/ ou unidades adminstrativas descentralizadas da Secretaria de Estado  de Educação Do Paraná   ",
            img: "images/empresas/parana.png"
        },
        {
            nome: "IBQ Ind. Química Ltda.",
            cargo: "Profissional Liberal",
            descricao: "Projeto de entrada de energia, com cálculo os níveis de curto e parametrização do relé de proteção para Sistema de Transfêrencia em rampa (paralelismo Copel - Grupo Gerador) - Quatro Barras-PR",
            img: "images/empresas/britanite.jpeg"
        },
        {
            nome: "Azevedo & Travassos Petrobras",
            cargo: "Coordenador de Instalações Elétricas e hidráulicas - Projetista de Elétrica)",
            img: "images/empresas/azevedo.png",
            descricao: "Execução e Certificaçãpo dos Projetos elétricos, Coordenação na Compra, Testes em Fábrica , Condicionamento, execução e comissionamento dos seguintes sistemas: Telecomunicação, CFTV, Det. Al. de Incêndio, Automação, Elétrica (Alimentação 13,8kV, Distribuição principal 480Vca, Força 220/127Vca, CA confiável 208/120Vca, CC confiável 125Vcc, Aterramento, SPDA, Iluminação, SCMD (automação de todo o sistema elétrico, configuração dos IED's, Rede IEC-61850 e Profibus-DP)), Hidráulica, Esgoto sanitario, Combate a Incêndio, Drenagem e Águas Pluviais"
        }
    ],
    [
        {
            nome: "Tribunal Regional do Trabalho - TRT/PR",
            img: "images/empresas/trtpr.jpg",
            descricao: "Projeto e execução da alimentação do novo Data Center."
        },
        {
            nome: "Claro",
            img: "images/empresas/claro2.png",
            descricao: "Instalação de Ponto de Atendimento, suporte para TV e display para 17 lojas Claro na região Sul e 21 na região Centro-Oeste - Reforma Geral - Elétrica, lógica e telefonia."

        },
        {
            nome: "Irmãos Muffato & Cia. Ltda. - Supermercado",
            img: "images/empresas/muffato2.jpeg",
            descricao: "Execução da entrada de serviço em MT, Instalações elétricas em BT, Ca confiável, SPDA, Infra-estrutura de lógica, telefonia, dadose voz, CFTV, Sistema de segurança, Alarme de Incêndio, som ambiente. Apucarana-PR",
        },
        {
            nome: "Clinica Sol & Chuva Medicina do Trabalho",
            img: "images/empresas/nr10.png",
            descricao: "Elaboração e execução de diversos cursos de NR10"
        },
        {
            nome: "Techena Manutenções Especializadas Ltda.",
            img: "images/empresas/instalacoes-eletricas4.jpg",
            descricao: "Consultoria geral - Rede segura, obras, orçamentos e projetos."
        },
        {
            nome: "Petrobras",
            img: "images/empresas/petrobras2.png",
            descricao: "Acompanhamento e Testes de máquinas de VAC Petrobras Repar. Consórcio INTERPAR. Araucária-PR"
        },
        {
            nome: "Petrobras",
            img: "images/empresas/petrobras2.png",
            descricao: "Inspeção de Painéis Elétricos para a Petrobras Compartilhado RNNE/SI/SOM Ediba Conjunto, Pituba. Salvador-BA"

        },
        {
            nome: "HORIZONS Telecomunicaçãoes e Tecnologia Ltda.",
            img: "images/empresas/horizons.jpg",
            descricao: "Projeto e execução das instalações elétricas de Alta Tensão (Entrada de energia - AT) e baixa tensão (QGBT e Alimentadores)"

        },
        {
            nome: "COPLAC-Companhia de Planejamento Acústico",
            img: "images/empresas/coplac2.jpeg",
            descricao: "Projeto Elétrico da entrada de energia em MT, distribuição MT, transformação e distribuição em BT."

        },
        {
            nome: "A1 Engenharia e Gerenciamento Ltda.",
            img: "images/empresas/a1.jpg",
            descricao: "Projeto das Instalações elétricas dos seguintes sistemas:Alimentação 13,8kV, força 220/127Vca, CA confiável, Aterramento, SPDA, Iluminação Normal, Iluminação de Emergência, Rota de fuga, Som, Alarme, Dados, Voz, CFTV, CATV"
        },
        {
            nome: "CAVO Serviços e Saneamento S.A.",
            img: "images/empresas/cavo.jpg",
            descricao: "Projeto Elétrico em nova unidade Curitiba-PR"

        },


    ],
    [
        {
            nome: "Flex Condomínios",
            img: "images/empresas/flex.png"
        },
        {
            nome: "Batel Administradora de Condomínios",
            img: "images/empresas/batel.png"
        },
        {
            nome: "Evidência Gestão de Condomínios",
            img: "images/empresas/evidencia.png"
        },
        {
            nome: "Síndiconet",
            img: "images/empresas/sindiconet.png"
        },
        {
            nome: "Administradora Lima",
            img: "images/empresas/lima.png"
        },
        {
            nome: "Ernest Gardemann Administradora de Condomínios",
            img: "images/empresas/ernest.png"
        },
        {
            nome: "Administração de Condomínios Curitiba-BR",
            img: "images/empresas/brcondos.png"
        },
        {
            nome: "Completa Administradora de Condomínios",
            img: "images/empresas/completa.png"
        }
    ]

]

export default projetos;
