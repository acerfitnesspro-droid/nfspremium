
import { Article, Category, Author } from './types';

export const MOCK_AUTHORS: Record<string, Author> = {
  redacao: {
    name: "Redação NFS",
    role: "Jornalismo Local",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80"
  },
  joao: {
    name: "João Silva",
    role: "Editor Chefe",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&h=256&q=80"
  },
  maria: {
    name: "Maria Santos",
    role: "Colunista Política",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&h=256&q=80"
  }
};

export const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Turistas do Rio de Janeiro visitam Feira de Santana em roteiro cultural, histórico e religioso",
    subtitle: "Grupo visitou o Casarão dos Olhos D'Água, Mercado de Arte e igrejas históricas, fortalecendo o turismo no sertão baiano.",
    category: Category.CULTURA,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-24T10:00:00Z",
    readTime: 5,
    // Imagem: Pelourinho/Centro Histórico (Arquitetura colonial colorida)
    imageUrl: "https://images.unsplash.com/photo-1569408034443-b956a640d256?auto=format&fit=crop&q=80&w=1600",
    content: "Um grupo de 26 turistas do Rio de Janeiro, composto por médicas, advogadas e aposentadas integrantes da organização missionária Mulher Cristã em Ação (MCA), visitou Feira de Santana neste fim de semana. O roteiro incluiu pontos históricos como o Casarão dos Olhos D'Água, o Mercado de Arte Popular e igrejas centenárias da região.\n\nA iniciativa visa fortalecer o turismo religioso e cultural na Princesa do Sertão, demonstrando o potencial da cidade para receber visitantes de outros estados interessados na rica história do recôncavo e sertão baiano. Durante a visita, o grupo também pôde experimentar a culinária local e conhecer o artesanato de couro, típico da região.",
    isBreaking: false
  },
  {
    id: "2",
    title: "Força-tarefa no Centro de Abastecimento termina em tumulto; guardas e fiscais ficam feridos",
    subtitle: "Operação de reordenamento das feiras livres gerou confronto entre comerciantes e fiscalização municipal.",
    category: Category.POLICIA,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-24T08:30:00Z",
    readTime: 4,
    // Imagem: Movimentação policial/Confronto urbano
    imageUrl: "https://images.unsplash.com/photo-1555617112-9856f91f7a07?auto=format&fit=crop&q=80&w=1600", 
    content: "Uma operação de ordenamento realizada pela Prefeitura de Feira de Santana nas primeiras horas desta segunda-feira (24) no Centro de Abastecimento terminou em tumulto. Comerciantes informais reagiram à apreensão de mercadorias, resultando em confronto com a Guarda Municipal.\n\nSegundo informações preliminares, dois guardas e um fiscal ficaram feridos após serem atingidos por pedras e frutas arremessadas. O clima segue tenso na região e o policiamento foi reforçado pela Polícia Militar para garantir a segurança dos clientes e feirantes regulares. A prefeitura emitiu nota afirmando que o objetivo é desobstruir as vias de acesso.",
    isBreaking: true
  },
  {
    id: "3",
    title: "Casa do Trabalhador abre inscrições para 420 vagas em cursos gratuitos do SENAI",
    subtitle: "Cursos de eletricista, mecânica e logística visam preparar jovens para o distrito industrial.",
    category: Category.DESTAQUE,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-24T09:00:00Z",
    readTime: 3,
    // Imagem: Indústria/Solda/Tecnologia (High tech industrial)
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    content: "A Casa do Trabalhador inicia nesta terça-feira (25) as inscrições presenciais para cursos gratuitos oferecidos pelo SENAI, destinados a jovens e adultos que buscam qualificação profissional. São 420 vagas distribuídas entre cursos de Eletricista Industrial, Mecânica de Automóveis, Logística e Programação Básica.\n\nOs interessados devem comparecer à sede da Casa do Trabalhador portando RG, CPF e comprovante de residência. As aulas têm previsão de início para o próximo mês e visam atender a demanda crescente do setor industrial de Feira de Santana, que busca mão de obra qualificada para as novas fábricas instaladas no CIS.",
    isBreaking: false
  },
  {
    id: "4",
    title: "Feira de Santana: tradição, logística estratégica e um futuro em plena expansão",
    subtitle: "O maior entroncamento rodoviário do Norte-Nordeste se reinventa com tecnologia e novos centros logísticos.",
    category: Category.COLUNISTA,
    author: MOCK_AUTHORS.maria,
    publishedAt: "2025-11-23T14:00:00Z",
    readTime: 6,
    // Imagem: Rodovia/Cidade aérea/Logística
    imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1600",
    content: "Desde o século XIX, Feira de Santana consolidou-se como um importante ponto de encontro para mercadores e tropeiros de várias regiões do país. Hoje, a cidade mantém sua vocação comercial, mas olha para o futuro com investimentos em tecnologia e logística.\n\nCom a duplicação do anel de contorno e a chegada de novos centros de distribuição de gigantes do e-commerce, a cidade reforça seu papel estratégico. O desafio agora é aliar crescimento econômico com qualidade de vida e mobilidade urbana sustentável. Precisamos pensar em Feira para 2050, não apenas para o próximo ano.",
    isBreaking: false
  },
  {
    id: "5",
    title: "Homem é preso em Feira de Santana por armazenar material pornográfico infantil",
    subtitle: "Operação Cibernética da Polícia Civil localizou o suspeito no bairro Kalilândia.",
    category: Category.POLICIA,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-24T11:15:00Z",
    readTime: 3,
    // Imagem: Cyber/Dark/Computador (Conceito de investigação digital)
    imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1600",
    content: "Policiais Civis prenderam em flagrante um homem de 45 anos no bairro Kalilândia, acusado de armazenar vasto material de pornografia infantil em computadores e HDs externos. A prisão ocorreu após monitoramento da unidade de crimes cibernéticos.\n\nDurante a busca domiciliar, também foram encontradas duas armas de fogo sem registro. O suspeito foi encaminhado ao Complexo Policial do Sobradinho e está à disposição da justiça. O material apreendido passará por perícia técnica detalhada.",
    isBreaking: false
  },
  {
    id: "6",
    title: "UEFS abre 1.386 vagas em processo seletivo para níveis médio e superior",
    subtitle: "Universidade Estadual oferece oportunidades temporárias (REDA) para diversos cargos.",
    category: Category.EDUCACAO,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-24T07:00:00Z",
    readTime: 4,
    // Imagem: Universidade/Arquitetura acadêmica
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1600",
    content: "A Universidade Estadual de Feira de Santana (UEFS) publicou edital com 1.386 vagas para processo seletivo simplificado (REDA). As oportunidades contemplam cargos de nível médio e superior, com salários que podem chegar a R$ 4.500,00.\n\nAs vagas são para assistentes administrativos, técnicos de laboratório e professores substitutos. As inscrições devem ser feitas exclusivamente pela internet até a próxima quinta-feira (6). A taxa de inscrição varia entre R$ 60 e R$ 100, a depender do cargo pretendido.",
    isBreaking: false
  },
  {
    id: "7",
    title: "SineBahia divulga vagas de emprego e estágio para Feira de Santana nesta segunda (17)",
    subtitle: "Oportunidades incluem vendedor, motorista e atendente. Confira os requisitos.",
    category: Category.EMPREGOS,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-24T06:00:00Z",
    readTime: 2,
    // Imagem: Reunião de negócios/Escritório moderno
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7984e6d083cf?auto=format&fit=crop&q=80&w=1600",
    content: "O SineBahia divulgou as vagas de emprego disponíveis para esta segunda-feira em Feira de Santana. Há oportunidades para Vendedor (15 vagas), Atendente de Telemarketing (30 vagas), Motorista Categoria D (5 vagas) e Estágio em Administração.\n\nInteressados devem comparecer à unidade do SAC II (Rodoviária) ou SAC Centro, portando carteira de trabalho (CTPS digital ou física) e currículo atualizado. O atendimento ocorre das 07h às 13h, mediante distribuição de senhas.",
    isBreaking: false
  },
  {
    id: "8",
    title: "Prefeitura de Feira de Santana vai leiloar quase 5 mil bens públicos inservíveis",
    subtitle: "Lote inclui veículos apreendidos, sucatas e mobiliário escolar antigo.",
    category: Category.COTIDIANO,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-23T16:00:00Z",
    readTime: 3,
    // Imagem: Pátio de carros/Leilão
    imageUrl: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80&w=1600",
    content: "A Prefeitura Municipal anunciou que realizará um grande leilão de bens móveis inservíveis. Serão ofertados cerca de 5 mil itens, incluindo carros, motos, sucatas de ferro e mobiliário escolar antigo que ocupam espaço nos pátios públicos.\n\nO leilão acontecerá de forma online e presencial no pátio da Secretaria de Administração. A expectativa é arrecadar recursos para renovação da frota municipal e investimentos em escolas. O edital completo com os lotes estará disponível no site da prefeitura a partir de amanhã.",
    isBreaking: false
  },
  {
    id: "9",
    title: "Prefeitura anuncia concurso público com mil vagas para professores; Idecan será responsável",
    subtitle: "Certame visa reduzir contratos temporários e fortalecer a rede municipal de ensino.",
    category: Category.EDUCACAO,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-23T10:00:00Z",
    readTime: 4,
    // Imagem: Sala de aula/Professor escrevendo
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600",
    content: "O Prefeito anunciou na manhã de hoje a realização de um novo concurso público para a área da educação. Serão ofertadas 1.000 vagas efetivas para professores de diversas disciplinas e pedagogos.\n\nA banca organizadora escolhida foi o Idecan. O edital deve ser publicado nos próximos 30 dias, com provas previstas para o início do próximo ano letivo. 'É um passo fundamental para valorizar o magistério e garantir estabilidade na rede', afirmou a Secretária de Educação.",
    isBreaking: true
  },
  {
    id: "10",
    title: "Após cinco anos de disputa, APLB e Prefeitura fecham acordo sobre precatórios",
    subtitle: "Professores aprovaram proposta em assembleia histórica; pagamentos começam em dezembro.",
    category: Category.POLITICA,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-22T18:00:00Z",
    readTime: 5,
    // Imagem: Aperto de mãos corporativo/Acordo
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600",
    content: "Em assembleia realizada na tarde de ontem, a APLB Sindicato aprovou a proposta da Prefeitura para a devolução dos salários cortados durante a greve de 2020 e o pagamento dos precatórios do FUNDEF. O acordo prevê o pagamento escalonado em 12 parcelas.\n\nA decisão foi comemorada pela categoria como uma vitória histórica, encerrando um ciclo de cinco anos de disputas judiciais e negociações travadas. O projeto de lei oficializando o acordo será enviado à Câmara Municipal na próxima semana.",
    isBreaking: false
  },
  {
    id: "11",
    title: "Câmara realizará sessão especial em homenagem aos 35 anos do Código de Defesa do Consumidor",
    subtitle: "Evento discutirá os avanços na legislação e os novos desafios do comércio digital.",
    category: Category.DESTAQUE,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-18T19:00:00Z",
    readTime: 3,
    // Imagem: Martelo da justiça/Livros de lei
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1600",
    content: "A Câmara Municipal de Feira de Santana promoverá no dia 26, às 19h, uma Sessão Especial para marcar os 35 anos de promulgação do Código de Defesa do Consumidor (CDC).\n\nO evento foi proposto pela Comissão de Defesa do Consumidor da casa e contará com a presença de representantes do PROCON, Ministério Público e OAB. Serão debatidos temas como superendividamento e fraudes digitais.",
    isBreaking: false
  },
  {
    id: "12",
    title: "Trânsito: Novas regras para circulação de veículos de carga no Anel de Contorno",
    subtitle: "Restrição de horários visa diminuir congestionamentos nos horários de pico.",
    category: Category.TRANSITO,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-18T14:00:00Z",
    readTime: 4,
    // Imagem: Tráfego de caminhões/Estrada movimentada
    imageUrl: "https://images.unsplash.com/photo-1566835105951-417160358897?auto=format&fit=crop&q=80&w=1600",
    content: "A Superintendência Municipal de Trânsito (SMT) divulgou novas regras para a circulação de veículos pesados e de tração animal no anel central da cidade. A partir do próximo mês, caminhões acima de 10 toneladas terão horários restritos para carga e descarga (proibido das 07h às 09h e das 17h às 19h).\n\nAlém disso, será intensificada a fiscalização sobre o uso de veículos de tração animal, exigindo cadastro dos carroceiros e atestado de saúde dos equinos, visando melhorar a fluidez e o bem-estar animal.",
    isBreaking: false
  },
  {
    id: "13",
    title: "Dois jovens são mortos dentro de casa após invasão durante a madrugada",
    subtitle: "Crimes ocorreram no George Américo e Campo Limpo; DH investiga conexões.",
    category: Category.POLICIA,
    author: MOCK_AUTHORS.redacao,
    publishedAt: "2025-11-18T05:00:00Z",
    readTime: 2,
    // Imagem: Luzes de viatura policial/Noite (Abstrato crime)
    imageUrl: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&q=80&w=1600",
    content: "A violência marcou a madrugada desta terça-feira em Feira de Santana. Dois jovens, de 19 e 22 anos, foram mortos dentro de suas residências em ações com características de execução.\n\nOs crimes ocorreram nos bairros George Américo e Campo Limpo. Segundo testemunhas, homens armados invadiram os imóveis se identificando como policiais. A Delegacia de Homicídios já iniciou as investigações e não descarta a relação entre os casos e a disputa pelo tráfico de drogas na região.",
    isBreaking: true
  }
];

export const CATEGORY_COLORS: Record<Category, string> = {
  [Category.POLITICA]: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border border-blue-200 dark:border-blue-800",
  [Category.POLICIA]: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border border-red-200 dark:border-red-800",
  [Category.COTIDIANO]: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800",
  [Category.CULTURA]: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 border border-purple-200 dark:border-purple-800",
  [Category.ESPORTES]: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200 border border-orange-200 dark:border-orange-800",
  [Category.NEGOCIOS]: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  [Category.EDUCACAO]: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200 border border-cyan-200 dark:border-cyan-800",
  [Category.EMPREGOS]: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800",
  [Category.TRANSITO]: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700",
  [Category.SAUDE]: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200 border border-teal-200 dark:border-teal-800",
  [Category.DESTAQUE]: "bg-primary-600 text-white dark:bg-primary-500 border border-primary-600",
  [Category.COLUNISTA]: "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-200 border border-pink-200 dark:border-pink-800",
  [Category.MICARETA]: "bg-rose-500 text-white dark:bg-rose-600 border border-rose-600",
};
