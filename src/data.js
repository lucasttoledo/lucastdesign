export const projects = [
  {
    id: 'crm-agro',
    slug: 'redesign-plataforma-agro',
    eyebrow: 'Product Design · UX/UI · Agronegócio',
    title: 'Redesign de Plataforma Agro – Mobile e Desktop',
    description:
      'Assumi todo o projeto de uma plataforma agro já prototipada, mas com baixa aceitação interna. A partir de análises heurísticas, propus soluções alinhadas a realidade do campo e as necessidades do negócio. Entreguei uma experiência fácil de usar, escalável e centrada no usuário, tanto para APP quanto para WEB.',
    image: '/assets/mockup_projeto_agro.png',
    alt: 'Mockup da plataforma Agro em um notebook',
    headerImage: {
      src: '/assets/mock_pagina_filha_agro.png',
      alt: 'Mockup da página de acesso da plataforma Agro em um notebook',
    },
    layout: 'image-first',
    presentation: 'row',
    caseStudy: {
      client: 'Plataforma Agro',
      year: '2025',
      role: 'UX/UI Design · Pesquisa · Prototipação',
      quote:
        'No campo, uma boa experiência precisa tornar as informações essenciais claras e as tarefas possíveis mesmo em condições diferentes de uso.',
      resultHeading: 'Uma experiência conectada ao campo.',
      result:
        'A proposta reúne uma experiência mobile para o consultor e uma plataforma web para gestão, com fluxos reorganizados, navegação mais clara e uma base visual preparada para evoluir.',
      galleryGroups: [
        {
          type: 'web',
          title: 'Versão Web',
          images: [
            {
              image: '/assets/Inicial.png',
              alt: 'Dashboard inicial da plataforma Agro',
              caption: 'Visão geral com indicadores e atalhos para as principais áreas.',
            },
            {
              image: '/assets/Inicial - senha.png',
              alt: 'Tela de acesso da plataforma Agro',
              caption: 'Acesso à plataforma web.',
            },
            {
              image: '/assets/Login - preenchido.png',
              alt: 'Tela de login preenchida da plataforma Agro',
              caption: 'Formulário de acesso com os campos preenchidos.',
            },
            {
              image: '/assets/Acompanhamento de mercado.png',
              alt: 'Tela web de acompanhamento de mercado',
              caption: 'Acompanhamento de mercado em uma visão detalhada.',
            },
            {
              image: '/assets/Acompanhamento de mercado - negociacao.png',
              alt: 'Tela de negociação do acompanhamento de mercado',
              caption: 'Dados de mercado e informações para negociação.',
            },
            {
              image: '/assets/Notas fiscais.png',
              alt: 'Área de notas fiscais da plataforma Agro',
              caption: 'Consulta de notas fiscais.',
            },
            {
              image: '/assets/Notas fiscais-modal.png',
              alt: 'Detalhes de uma nota fiscal na plataforma Agro',
              caption: 'Detalhes da nota fiscal em uma janela de consulta.',
            },
          ],
        },
        {
          type: 'mobile',
          title: 'Versão Mobile',
          images: [
            {
              image: '/assets/Início mobile.png',
              alt: 'Tela inicial mobile da plataforma Agro',
              caption: 'Início e atalhos para as áreas mais usadas.',
            },
            {
              image: '/assets/Login mobile.png',
              alt: 'Tela mobile de login da plataforma Agro',
              caption: 'Acesso à plataforma pelo celular.',
            },
            {
              image: '/assets/Login - Preenchido mobile.png',
              alt: 'Tela mobile de login preenchida',
              caption: 'Formulário de acesso preenchido no celular.',
            },
            {
              image: '/assets/Cadastro 1 mobile.png',
              alt: 'Primeira etapa do cadastro na plataforma Agro mobile',
              caption: 'Primeira etapa do cadastro.',
            },
            {
              image: '/assets/Cadastro 2 mobile.png',
              alt: 'Segunda etapa do cadastro na plataforma Agro mobile',
              caption: 'Continuação do cadastro no celular.',
            },
            {
              image: '/assets/Acompanhamento de mercado mobile.png',
              alt: 'Acompanhamento de mercado na plataforma Agro mobile',
              caption: 'Indicadores de mercado adaptados à tela mobile.',
            },
            {
              image: '/assets/Financeiro mobile.png',
              alt: 'Área financeira da plataforma Agro mobile',
              caption: 'Informações financeiras no celular.',
            },
            {
              image: '/assets/Notícias mobile.png',
              alt: 'Notícias na plataforma Agro mobile',
              caption: 'Notícias e atualizações do mercado.',
            },
          ],
        },
      ],
      sections: [
        {
          title: 'Contexto rápido do projeto',
          quote:
            'O cliente já possuía um protótipo inicial de uma solução para visitas técnicas e gestão agrícola, mas havia insatisfação com a experiência proposta. O fluxo era confuso, a hierarquia visual pouco clara e a interface não refletia a realidade dos usuários de campo.',
        },
        {
          title: 'Processos de UX antes de iniciar o projeto',
          paragraphs: [
            'Durante a análise inicial do projeto, identifiquei diversos pontos que comprometiam a usabilidade da solução. Havia uma falta de feedback claro nas interações, comprometendo a visibilidade do status do sistema.',
            'Também percebi a ausência de caminhos que permitissem ao usuário corrigir erros com facilidade, afetando o controle e a liberdade durante a navegação. Olhando para a UI percebi mal uso de ícones, botões e nomenclaturas inconsistentes, o que quebrava os padrões visuais e funcionais esperados. Por fim, a interface apresentava um excesso de informações técnicas sem hierarquia, exigindo memorização do usuário em vez de facilitar o reconhecimento das ações disponíveis.',
          ],
          list: [
            { title: 'Entrevistas com stakeholders', text: ' e usuários de campo para validar dores reais.' },
            { title: 'Reestruturação dos fluxos de navegação', text: ' com foco em simplicidade e lógica de uso.' },
            { title: 'Criação de personas', text: ' para definirmos todo fluxo e modelo de telas e ícons.' },
            { title: 'Wireframes iterativos', text: ', testados com o time interno para validação rápida.' },
            { title: 'Criação de um novo design system', text: ', acessível e pensado para contextos rurais.' },
          ],
          images: [
            {
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85',
              alt: 'Equipe colaborando em uma reunião',
              caption: 'Alinhamento das dores e propostas iniciais com o cliente.',
            },
            {
              image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1600&q=85',
              alt: 'Equipe trabalhando em conjunto',
              caption: 'Processos de UX antes de iniciar o projeto.',
            },
          ],
        },
        {
          title: 'Desk Research e Benchmark',
          paragraphs: [
            'Realizei uma pesquisa de mercado (desk research) analisando ferramentas similares utilizadas no setor agro, como apps de manejo, CRMs agrícolas e soluções de controle de safra.',
            'Além disso, foi feito um benchmarking com plataformas de registro de visitas e monitoramento de lavouras, observando:',
          ],
          list: [
            { text: 'Padrões de usabilidade' },
            { text: 'Formas de input de dados em campo' },
            { text: 'Hierarquia da informação' },
            { text: 'Comportamentos offline e online' },
          ],
          quote:
            'Essa etapa trouxe insights que fundamentaram a proposta de uma interface mais leve, hierarquizada e adaptada ao uso em campo.',
          images: [
            {
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
              alt: 'Painel de dados em uma tela',
              caption: 'Pesquisa de mercado e análise de soluções do setor.',
            },
          ],
        },
        {
          title: 'Jornada do Usuário & Fluxo de Navegação',
          paragraphs: [
            'Com base nas dores mapeadas, redesenhei a jornada do usuário, dividindo os perfis em dois fluxos principais:',
          ],
          list: [
            { title: 'Consultor de Campo', text: ': foco no registro de visitas, atualização de informações da safra e visualização rápida de dados.' },
            { title: 'Gestor / Técnico Interno', text: ': foco em análise de visitas, liberação de recursos e acompanhamento por dashboards.' },
          ],
          quote:
            'Utilizei o Miro para estruturar mapas de jornada do usuário, destacando momentos-chave e pontos de frustração ao longo da experiência. Também desenvolvi o fluxo de navegação da solução, organizando os principais módulos como Cadastro, Detalhes da Visita e Relatórios, de forma clara e funcional.',
          images: [
            {
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
              alt: 'Visualização de dados e métricas de produto',
              caption: 'Jornadas e fluxos organizados conforme os perfis de uso.',
            },
          ],
        },
        {
          title: 'Redesenho e Prototipação',
          paragraphs: [
            'Após validar os fluxos e soluções com o time interno, iniciei o redesenho das telas. Como o cliente já tinha um protótipo anterior, preparei uma análise heurística, apontando os problemas e propondo melhorias com base em boas práticas de UI/UX.',
          ],
          quote:
            'Após a apresentação das propostas, o time aprovou o novo caminho, e segui com protótipos de baixa e depois de alta fidelidade, com navegação completa para testes.',
          images: [
            {
              image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=85',
              alt: 'Estudos de cor e composição visual',
              caption: 'Redesenho das telas e prototipação da solução.',
            },
            {
              image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85',
              alt: 'Notebook com uma interface digital',
              caption: 'Protótipo navegável para validação dos fluxos.',
            },
          ],
        },
        {
          title: 'Versão APP',
          paragraphs: [
            'Interface mobile pensada para o dia a dia do consultor em campo, com navegação simples, foco nas visitas e registro de informações mesmo em áreas com pouca conexão.',
          ],
          images: [
            {
              image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85',
              alt: 'Pessoa usando um smartphone',
              caption: 'Interface mobile para o consultor em campo.',
            },
            {
              image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1200&q=85',
              alt: 'Smartphone com uma interface de aplicativo',
              caption: 'Fluxos de visitas e registro de informações.',
            },
            {
              image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85',
              alt: 'Aplicativo aberto em um smartphone',
              caption: 'Experiência desenhada para uso em campo.',
            },
            {
              image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=85',
              alt: 'Trabalhador em uma plantação',
              caption: 'Apoio às atividades do consultor no contexto rural.',
            },
          ],
        },
        {
          title: 'Versão WEB',
          paragraphs: [
            'Dashboard completo e responsivo para visualização estratégica de dados, gestão de safras e acompanhamento das visitas realizadas pelos consultores.',
          ],
          images: [
            {
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
              alt: 'Dashboard de dados em um monitor',
              caption: 'Dashboard para visualização estratégica de dados.',
            },
            {
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
              alt: 'Gráficos e indicadores em uma tela',
              caption: 'Gestão de safras e acompanhamento das visitas.',
            },
            {
              image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85',
              alt: 'Interface web exibida em um notebook',
              caption: 'Experiência web responsiva para gestão agrícola.',
            },
            {
              image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=85',
              alt: 'Equipe acompanhando uma solução digital',
              caption: 'Acompanhamento integrado da operação.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'platform',
    eyebrow: 'UX Research · Product Strategy',
    title: 'Plataforma de gestão',
    description:
      'Pesquisa, arquitetura de informação e prototipação para transformar processos complexos em uma experiência mais simples, eficiente e preparada para crescer.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    alt: 'Pessoa utilizando um notebook',
    layout: 'copy-first',
    presentation: 'thumbnail',
    caseStudy: {
      client: 'Plataforma de gestão',
      year: '2023',
      role: 'UX Research · Product Strategy',
      overview:
        'Uma plataforma de gestão que transforma processos complexos em jornadas digitais mais simples, conectando pesquisa, arquitetura de informação e prototipação.',
      challenge:
        'As pessoas precisavam navegar por tarefas e informações relacionadas sem perder contexto ou depender de etapas desnecessárias.',
      approach:
        'A pesquisa ajudou a identificar prioridades e pontos de atrito. A partir disso, estruturamos a navegação e prototipamos fluxos com foco em clareza, eficiência e adaptação a diferentes dispositivos.',
      result:
        'Uma experiência mais objetiva e uma direção de produto baseada nas necessidades reais de quem usa a plataforma.',
      quote:
        'Simplificar um processo começa por entender o que realmente importa para quem está usando o produto.',
      gallery: [
        {
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85',
          alt: 'Pessoa utilizando um notebook para trabalhar',
          caption: 'Jornadas pensadas para aproximar pessoas e informação.',
        },
        {
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85',
          alt: 'Equipe colaborando em uma reunião',
          caption: 'Pesquisa e colaboração orientam as decisões de produto.',
        },
        {
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=85',
          alt: 'Equipe analisando informações em uma tela',
          caption: 'Informações apresentadas com hierarquia e contexto.',
        },
        {
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=85',
          alt: 'Equipe de produto trabalhando em conjunto',
          caption: 'Uma base preparada para evoluir com as necessidades do negócio.',
        },
      ],
    },
  },
  {
    id: 'intranet-grupo-empresas',
    slug: 'intranet-para-grupo-de-empresas',
    eyebrow: 'Product Design · UX/UI · Intranet',
    title: 'Intranet para grupo de empresas',
    description:
      'Redesign e estruturação de uma intranet para um grupo com quatro empresas, conectando comunicação, produtividade e cultura em um ambiente responsivo e feito para as diferentes realidades dos times.',
    image:
      'https://lucastdesign.com.br/wp-content/uploads/2025/04/urn_aaid_sc_US_9aa93720-984a-48ef-b762-e96b44821fa5.png',
    alt: 'Interface da intranet desenvolvida para um grupo de empresas',
    layout: 'copy-first',
    presentation: 'row',
    caseStudy: {
      client: 'Grupo com quatro empresas',
      year: '2020',
      role: 'UX Research · Arquitetura da Informação · UI Design',
      quote:
        'Uma intranet relevante aproxima pessoas quando transforma informação dispersa em um ponto de acesso claro para a rotina de todos.',
      resultHeading: 'Um ponto de encontro para o grupo.',
      result:
        'O projeto estruturou uma intranet responsiva para conectar comunicação, documentos e serviços internos, respeitando as particularidades das quatro empresas e criando uma base visual consistente para os colaboradores.',
      sections: [
        {
          title: 'Um espaço digital para aproximar as equipes',
          paragraphs: [
            'O projeto envolveu o redesign e a estruturação de uma intranet para um grupo formado por quatro empresas, cada uma com suas particularidades, equipes e necessidades internas. A proposta foi reunir essa diversidade em um ambiente digital unificado, sem apagar a identidade de cada negócio.',
            'Mais do que atualizar a interface, o trabalho buscou fortalecer a intranet como ponto de encontro para a comunicação, a produtividade e a cultura organizacional.',
          ],
        },
        {
          title: 'Resolver as fricções do dia a dia',
          paragraphs: [
            'A intranet anterior tinha baixo engajamento e dificuldades de navegação. Colaboradores relatavam problemas para encontrar documentos importantes e sentiam que as áreas trabalhavam de forma isolada. Também faltava clareza sobre benefícios e informações relacionadas à rotina de trabalho.',
            'O acesso responsivo, inclusive por dispositivos móveis, foi considerado desde o início para que os conteúdos e serviços estivessem disponíveis nos diferentes contextos de uso.',
          ],
        },
        {
          title: 'Ouvir as diferentes empresas antes de desenhar',
          paragraphs: [
            'A etapa de imersão reuniu representantes de cada empresa para entender suas necessidades específicas, identificar o que fazia falta na solução antiga e definir prioridades comuns. Esse alinhamento permitiu organizar uma experiência capaz de atender ao grupo como um todo e, ao mesmo tempo, dar visibilidade às particularidades de cada empresa.',
            'A pesquisa de referências e o benchmark de soluções como Microsoft Viva, Notion, Slack e Workplace ajudaram a identificar padrões úteis e oportunidades para tornar a plataforma mais clara e relevante.',
          ],
        },
        {
          title: 'Conteúdo e serviços organizados em uma só experiência',
          paragraphs: [
            'A arquitetura da informação priorizou os recursos de maior valor para os colaboradores: notícias e comunicados, documentos e formulários, calendário de eventos, galerias, sistemas internos e páginas para cada empresa e suas equipes.',
            'Serviços recorrentes, como ponto eletrônico e agendamento de salas de reunião, também foram considerados na organização. A ideia foi reduzir o esforço para localizar o que a pessoa precisa e aproximar informações que fazem parte de uma mesma rotina.',
          ],
          images: [
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/urn_aaid_sc_US_9aa93720-984a-48ef-b762-e96b44821fa5-7.png',
              alt: 'Tela da intranet do grupo de empresas',
              caption: 'Conteúdos e serviços internos reunidos em um ambiente digital.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/urn_aaid_sc_US_9aa93720-984a-48ef-b762-e96b44821fa5-6.png',
              alt: 'Interface de comunicação interna',
              caption: 'Acesso simplificado a notícias, documentos e sistemas.',
            },
          ],
        },
        {
          title: 'Um sistema visual coerente, flexível e acessível',
          paragraphs: [
            'Para traduzir a proposta em uma experiência consistente, foi criado um design system exclusivo para o grupo. A linguagem combina cores sóbrias com detalhes contemporâneos, tipografia confortável para leitura e componentes reutilizáveis, responsivos e acessíveis.',
            'As versões em modo claro e escuro oferecem flexibilidade para diferentes ambientes e preferências. O sistema também cria uma base comum para que as quatro empresas mantenham uma experiência familiar enquanto comunicam seus próprios conteúdos.',
          ],
          images: [
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/urn_aaid_sc_US_9aa93720-984a-48ef-b762-e96b44821fa5-9.png',
              alt: 'Variação visual da intranet em tema claro',
              caption: 'Tema claro e componentes consistentes para o grupo.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/urn_aaid_sc_US_9aa93720-984a-48ef-b762-e96b44821fa5-14.png',
              alt: 'Outra tela da intranet em tema claro',
              caption: 'Padrões reutilizáveis aplicados a diferentes áreas.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'sites-institucionais',
    slug: 'institucional-website',
    eyebrow: 'UX/UI Design · Websites · Landing Pages',
    title: 'Sites institucionais e landing pages',
    description:
      'Projetos digitais para diferentes segmentos, concebidos para apresentar marcas, produtos e serviços com clareza e orientar cada visitante até a ação mais importante.',
    image:
      'https://lucastdesign.com.br/wp-content/uploads/2025/04/Landing-Page-Evento-Tiago-_-Versao-Marketing-scaled.png',
    alt: 'Landing page desenvolvida para uma campanha digital',
    layout: 'copy-first',
    presentation: 'thumbnail',
    caseStudy: {
      client: 'Projetos para diferentes segmentos',
      year: '2025',
      role: 'UX/UI Design · Estratégia de conteúdo · Web Design',
      quote:
        'Um site eficaz apresenta a marca com clareza e conduz cada pessoa ao próximo passo com o conteúdo certo.',
      resultHeading: 'Experiências digitais feitas para cada objetivo.',
      result:
        'Os projetos reúnem páginas institucionais e landing pages para diferentes segmentos, organizando a comunicação em torno das necessidades da marca e das ações esperadas do público.',
      sections: [
        {
          title: 'Experiências digitais orientadas por objetivos',
          paragraphs: [
            'Ao longo da minha trajetória como designer UX/UI, desenvolvi sites institucionais e landing pages para negócios de diferentes áreas. Cada projeto começa entendendo o que a presença digital precisa alcançar: gerar leads, apresentar produtos e serviços ou ampliar o reconhecimento da marca.',
            'Essa definição guia a estrutura, o conteúdo e a hierarquia visual. Em vez de aplicar uma fórmula única, cada experiência é construída para comunicar o valor daquele negócio e ajudar o público a encontrar o próximo passo.',
          ],
        },
        {
          title: 'Imersão para traduzir a essência de cada marca',
          paragraphs: [
            'Antes de desenhar as telas, busco compreender o universo do cliente, o público que deseja alcançar e as metas da comunicação. Essa imersão ajuda a definir quais informações precisam ganhar destaque, que dúvidas devem ser respondidas e qual ação deve ficar mais evidente.',
            'Os projetos passam por segmentos como tecnologia, agronegócio, educação, saúde, pets e mercado imobiliário. A variedade exige adaptar linguagem, conteúdo e recursos visuais sem perder clareza ou consistência.',
          ],
        },
        {
          title: 'Landing pages para apresentar e converter',
          paragraphs: [
            'Em campanhas e páginas de venda, a organização do conteúdo acompanha a jornada de decisão: uma proposta de valor fácil de entender, informações que sustentam a oferta e chamadas para ação visíveis no momento adequado.',
            'O trabalho equilibra identidade visual e usabilidade para que a página funcione tanto como apresentação da marca quanto como caminho direto para inscrição, contato ou solicitação de informações.',
          ],
          images: [
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/Landing-Page-pos-Webnar-scaled.png',
              alt: 'Landing page de campanha para webinar',
              caption: 'Página de campanha com conteúdo estruturado para conversão.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/Landing-Page-Vendas-V2-scaled.png',
              alt: 'Página de vendas para produto ou serviço',
              caption: 'Apresentação da oferta e dos seus principais benefícios.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/Landing-Page-Vendas-V2-1-scaled.png',
              alt: 'Variação de uma landing page de vendas',
              caption: 'Uma experiência alinhada à campanha e à identidade da marca.',
            },
          ],
        },
        {
          title: 'Sites para diferentes necessidades e públicos',
          paragraphs: [
            'Além das páginas de campanha, também desenvolvi experiências para descoberta e apresentação de serviços. Entre elas estão um website voltado à pesquisa e busca de itens para casamento e um site institucional para uma empresa de areia e pedra.',
            'Em cada caso, a navegação e a hierarquia são ajustadas ao conteúdo: facilitar a busca por opções, explicar os serviços ou apresentar a empresa de forma direta e confiável.',
          ],
          images: [
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/Home-v2-scaled.png',
              alt: 'Página inicial de um website para pesquisa de itens de casamento',
              caption: 'Website para pesquisa e descoberta de itens para casamento.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/image-342-scaled.png',
              alt: 'Site institucional de uma empresa de areia e pedra',
              caption: 'Presença digital para empresa de materiais de construção.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'midias-sociais',
    slug: 'midias-sociais-para-diversos-clientes',
    eyebrow: 'Design Visual · Social Media',
    title: 'Design para mídias sociais',
    description:
      'Criação de peças e sistemas visuais para marcas de diferentes segmentos, com consistência entre formatos, plataformas e momentos de comunicação.',
    image:
      'https://lucastdesign.com.br/wp-content/uploads/2025/04/image-343.png',
    alt: 'Peça gráfica para publicação em mídias sociais',
    layout: 'image-first',
    presentation: 'thumbnail',
    caseStudy: {
      client: 'Marcas de diferentes segmentos',
      year: '2025',
      role: 'Direção de arte · Design para mídias sociais',
      quote:
        'Consistência visual não limita a criatividade: ela faz com que cada nova peça continue reconhecível como parte da mesma marca.',
      resultHeading: 'Uma linguagem visual consistente em diferentes canais.',
      result:
        'O conjunto de peças e padrões visuais foi pensado para adaptar as marcas a feeds, stories, capas e campanhas sazonais, mantendo unidade entre formatos e plataformas.',
      sections: [
        {
          title: 'Uma presença visual reconhecível em cada canal',
          paragraphs: [
            'O trabalho reúne a criação de peças visuais para redes sociais de diferentes clientes. O objetivo é fortalecer a identidade das marcas e tornar a comunicação atrativa, atual e fácil de reconhecer enquanto as pessoas navegam pelos canais digitais.',
            'Cada peça parte do contexto da marca e da mensagem que precisa transmitir. A linguagem visual é adaptada sem perder os elementos que ajudam a manter familiaridade e consistência ao longo do tempo.',
          ],
        },
        {
          title: 'Sistemas flexíveis para formatos variados',
          paragraphs: [
            'As entregas incluem layouts para feed e stories, capas para Facebook e YouTube e padrões para publicações recorrentes. A organização dos elementos considera as proporções e o ritmo próprios de cada formato, além da leitura em telas menores.',
            'Em vez de tratar cada publicação como uma peça isolada, os padrões criam uma base que facilita a produção de novas comunicações e ajuda a marca a manter uma presença mais coesa em diferentes plataformas.',
          ],
          images: [
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/image-344.png',
              alt: 'Peça de design para publicação social',
              caption: 'Composição visual adaptada ao formato de publicação.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/image-345.png',
              alt: 'Conteúdo visual para canais sociais',
              caption: 'Variações que preservam a identidade da marca.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/image-346.png',
              alt: 'Peça gráfica para comunicação digital',
              caption: 'Peças pensadas para diferentes momentos de comunicação.',
            },
          ],
        },
        {
          title: 'Campanhas e conteúdos para diferentes momentos',
          paragraphs: [
            'As peças também acompanham campanhas e datas especiais, transformando a identidade de cada cliente em comunicações relevantes para ocasiões específicas. A direção de arte busca equilibrar o tema da campanha com a linguagem própria da marca.',
            'O conjunto inclui exemplos para períodos festivos e conteúdos promocionais, com adaptações para manter a mensagem clara em cada rede e formato.',
          ],
          images: [
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/Natal_Insta_01-1024x1024.jpg',
              alt: 'Publicação de Natal para Instagram',
              caption: 'Comunicação sazonal alinhada à identidade da marca.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/Natal_Insta_02-1024x1024.jpg',
              alt: 'Segunda peça de campanha de Natal para Instagram',
              caption: 'Variação de campanha para manter unidade visual.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/Windsor-Cay-InstagramWindsor_cay_01-1024x1024.jpg',
              alt: 'Publicação para redes sociais da Windsor Cay',
              caption: 'Conteúdo para redes sociais de marca de hospedagem.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/Ano-novo-2025-Authentc_01-1024x1024.jpg',
              alt: 'Peça de Ano Novo para redes sociais',
              caption: 'Campanha de Ano Novo adaptada para redes sociais.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'crm-imobiliario-luxo',
    slug: 'crm-para-sistema-de-imobiliaria-de-luxo',
    eyebrow: 'Product Design · UX/UI · CRM Imobiliário',
    title: 'CRM para aluguel de casas de luxo',
    description:
      'Sistema CRM e plataforma web para administrar e reservar casas premium de temporada na região de Orlando, conectando as necessidades da operação a uma experiência fluida para os hóspedes.',
    image:
      'https://lucastdesign.com.br/wp-content/uploads/2025/04/urn_aaid_sc_US_9efea529-d8ba-42ff-9d33-1334cd4e4680-1-1.png',
    alt: 'Interface do CRM para aluguel de casas de temporada',
    layout: 'image-first',
    presentation: 'row',
    caseStudy: {
      client: 'Aluguel de casas premium em Orlando',
      year: '2025',
      role: 'UX Research · UX/UI Design · Prototipação',
      quote:
        'Uma experiência de reserva confiável depende tanto de uma jornada simples para o hóspede quanto de ferramentas claras para quem administra.',
      resultHeading: 'Reservas mais simples, gestão mais clara.',
      result:
        'O projeto conectou a plataforma de reservas a um CRM mais completo para a operação. Entre os resultados observados estão o aumento das reservas online, menos contatos manuais com o suporte e feedbacks positivos dos administradores sobre a navegação.',
      sections: [
        {
          title: 'Duas experiências conectadas por uma mesma operação',
          paragraphs: [
            'O projeto consistiu no desenvolvimento de um sistema CRM e de uma plataforma web para aluguel de casas de temporada nos Estados Unidos, com foco em imóveis premium na região de Orlando.',
            'A solução precisava atender tanto à equipe responsável pela administração dos imóveis quanto às pessoas que pesquisam opções e fazem reservas. Por isso, o trabalho considerou painéis administrativos, jornada do cliente final e os principais fluxos de reserva como partes de uma experiência integrada.',
          ],
        },
        {
          title: 'Superar os limites de um sistema antigo',
          paragraphs: [
            'O cliente já utilizava um sistema, mas a solução era limitada e visualmente ultrapassada. Administradores e clientes relatavam dificuldades de uso e uma navegação pouco intuitiva, o que tornava mais difícil administrar imóveis e concluir uma reserva com confiança.',
            'O desafio foi organizar melhor as informações, simplificar a gestão de disponibilidade e criar uma plataforma atrativa para quem procura uma casa. Para a equipe interna, era essencial que o CRM reunisse os recursos necessários com menos retrabalho.',
          ],
          list: [
            { text: 'Organizar as informações dos imóveis e facilitar sua administração.' },
            { text: 'Criar uma experiência clara para pesquisar e reservar casas.' },
            { text: 'Aprimorar o fluxo de reservas e a gestão de disponibilidade.' },
            { text: 'Reduzir o retrabalho com um CRM mais intuitivo e completo.' },
          ],
        },
        {
          title: 'Mapear as necessidades de quem administra e de quem reserva',
          paragraphs: [
            'O processo de UX começou com imersão e discovery junto aos stakeholders. A pesquisa de mercado e o benchmark de plataformas como Airbnb, Vrbo e Booking.com ajudaram a compreender convenções conhecidas pelas pessoas e oportunidades para diferenciar a experiência.',
            'Os fluxos foram organizados considerando dois públicos: o time administrativo, que precisa gerenciar imóveis e disponibilidade, e os clientes finais, que desejam encontrar uma casa adequada e reservar com segurança.',
          ],
        },
        {
          title: 'Dos fluxos à interface final',
          paragraphs: [
            'Com os principais caminhos mapeados, foram criados wireframes de baixa fidelidade para estruturar a navegação e validar os fluxos essenciais. Em seguida, a interface avançou para protótipos navegáveis de alta fidelidade, cobrindo as experiências administrativas e de reserva.',
            'As telas e componentes foram desenhados para apoiar tarefas diferentes sem perder coerência: a gestão precisa favorecer organização e acompanhamento, enquanto a experiência do cliente deve apresentar os imóveis e as informações de reserva de maneira direta.',
          ],
          images: [
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/urn_aaid_sc_US_9efea529-d8ba-42ff-9d33-1334cd4e4680-3-1.png',
              alt: 'Tela da plataforma de aluguel de casas premium',
              caption: 'Experiência digital para pesquisar casas de temporada.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/urn_aaid_sc_US_9efea529-d8ba-42ff-9d33-1334cd4e4680-8.png',
              alt: 'Tela administrativa do CRM imobiliário',
              caption: 'Ferramentas para apoiar a gestão dos imóveis.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/urn_aaid_sc_US_9efea529-d8ba-42ff-9d33-1334cd4e4680-7-1.png',
              alt: 'Interface web do sistema de reservas',
              caption: 'Fluxo web de reserva apresentado com clareza.',
            },
            {
              image: 'https://lucastdesign.com.br/wp-content/uploads/2025/04/urn_aaid_sc_US_9efea529-d8ba-42ff-9d33-1334cd4e4680-6.png',
              alt: 'Painel com informações dos imóveis',
              caption: 'Informações organizadas para apoiar a operação.',
            },
          ],
        },
        {
          title: 'Uma base para reservas mais simples e gestão mais eficiente',
          paragraphs: [
            'O projeto resultou em uma experiência visual mais atual e intuitiva para os clientes e em uma estrutura de gestão mais clara para os administradores. A organização dos fluxos foi pensada para apoiar a descoberta de imóveis, a reserva e o acompanhamento da disponibilidade.',
            'Entre os resultados observados pelo projeto estão o aumento das reservas online, a redução de contatos manuais com a equipe de suporte e feedbacks positivos dos administradores sobre a nova navegação.',
          ],
        },
      ],
    },
  },
]

export const pillars = [
  {
    number: '01',
    title: 'UX/UI Design',
    description:
      'Arquitetura de informação limpa, fluxos intuitivos e protótipos de alta fidelidade desenhados sob medida.',
  },
  {
    number: '02',
    title: 'Sistemas de Design',
    description:
      'Componentização escalável no Figma para unificar a linguagem visual do seu time de produto.',
  },
  {
    number: '03',
    title: 'Branding & Identidade',
    description:
      'Criação de marcas marcantes com tipografia expressiva e paletas cromáticas diferenciadas.',
  },
  {
    number: '04',
    title: 'Estratégia de Produto',
    description:
      'Mapeamento de jornadas, testes de usabilidade práticos e análise de conversão baseada em métricas.',
  },
  {
    number: '05',
    title: 'Implementação Front-End',
    description:
      'Código limpo e estruturado em HTML, CSS e React, respeitando a fidelidade do design.',
  },
  {
    number: '06',
    title: 'Consultoria de Re-design',
    description:
      'Auditoria completa da usabilidade para identificar pontos de gargalo e otimizar fluxos de conversão.',
  },
]

export const metrics = [
  { value: '15+', label: 'Anos de Experiência' },
  { value: '90+', label: 'Projetos Entregues' },
  { value: '94%', label: 'Retenção de Clientes' },
  { value: '3.2x', label: 'Métricas de Conversão' },
]