const produtos = [
    // ==================== CONJUNTO AVA (QUEIMA DE ESTOQUE) ====================
    {
        id: 28, nome: "Conjunto Fitness Ava Amarelo", precoOriginal: "199,90", preco: '39,90', badge: "NOVO",
        descricao: "O Conjunto Ava Amarelo traz luminosidade e energia para o seu treino. Com tecido de alta elasticidade e toque macio, garante conforto absoluto e um visual vibrante na academia.",
        caracteristicas: ["Tecido ultra-elástico", "Cintura alta compressiva", "Toque gelado e respirável", "Proteção UV 50+"],
        imagem: "images/AnyConv.com__conjuntoavaamarelo.webp",
        variantes: []
    },
    {
        id: 29, nome: "Conjunto Fitness Ava Azul", precoOriginal: "199,90", preco: '39,90', badge: "",
        descricao: "O Conjunto Ava Azul é perfeito para quem busca serenidade e foco. A tonalidade azul profunda transmite confiança, enquanto a modelagem anatômica valoriza suas curvas com sustentação.",
        caracteristicas: ["Modelagem anatômica", "Tecido dry-fit premium", "Cós largo anatômico", "Secagem rápida"],
        imagem: "images/AnyConv.com__conjuntoavaazul.webp",
        variantes: []
    },
    {
        id: 30, nome: "Conjunto Fitness Ava Branco", precoOriginal: "209,90", preco: '39,90', badge: "LANÇAMENTO",
        descricao: "O Conjunto Ava Branco é o auge da sofisticação. Com tecido de gramatura superior que garante zero transparência, é a peça ideal para um look fitness clean e luxuoso.",
        caracteristicas: ["Gramatura superior (zero transparência)", "Design minimalista premium", "Toque aveludado", "Compressão estratégica"],
        imagem: "images/AnyConv.com__conjuntoavabranco.webp",
        variantes: [
            { cor: "Frente", img: "images/AnyConv.com__conjuntoavabranco2.webp" },
            { cor: "Verso", img: "images/AnyConv.com__conjuntoavabranco3.webp" },
            { cor: "Detalhe", img: "images/AnyConv.com__conjuntoavabranco4.webp" }
        ]
    },
    {
        id: 31, nome: "Conjunto Fitness Ava Marrom", precoOriginal: "199,90", preco: '39,90', badge: "",
        descricao: "A elegância dos tons terrosos no Conjunto Ava Marrom. Uma peça versátil que combina tecnologia fitness com a cor mais desejada da temporada.",
        caracteristicas: ["Tom terroso em tendência", "Tecido com controle de umidade", "Ajuste firme e confortável", "Costuras reforçadas"],
        imagem: "images/AnyConv.com__conjuntoavamarrom.webp",
        variantes: []
    },
    {
        id: 32, nome: "Conjunto Fitness Ava Preto", precoOriginal: "199,90", preco: '39,90', badge: "ESSENCIAL",
        descricao: "O Conjunto Ava Preto é o seu melhor aliado em qualquer treino. Poderoso, discreto e extremamente confortável, é a peça base que toda mulher precisa ter.",
        caracteristicas: ["Preto profundo (não desbota)", "Alta compressão modeladora", "Cós alto que não desce", "Durabilidade excepcional"],
        imagem: "images/AnyConv.com__conjuntoavapreto.webp",
        variantes: []
    },
    {
        id: 33, nome: "Conjunto Fitness Ava Rosa", precoOriginal: "199,90", preco: '39,90', badge: "QUERIDINHO",
        descricao: "Feminilidade e performance se unem no Conjunto Ava Rosa. Um tom de rosa equilibrado que traz estilo para o seu treino com toda a liberdade de movimento que você merece.",
        caracteristicas: ["Cor vibrante e feminina", "Tecido respirável", "Elasticidade 4-way stretch", "Modelagem levanta bumbum"],
        imagem: "images/AnyConv.com__conjuntoavarosa2.webp",
        variantes: [
            { cor: "Detalhe", img: "images/AnyConv.com__conjuntoavarosa3.webp" }
        ]
    },
    {
        id: 34, nome: "Conjunto Fitness Ava Verde", precoOriginal: "199,90", preco: '39,90', badge: "NOVO",
        descricao: "O Conjunto Ava Verde traz o frescor da natureza para a sua rotina de exercícios. Sinta-se renovada e pronta para superar seus limites com este conjunto tecnológico.",
        caracteristicas: ["Tecido com tecnologia anti-odor", "Proteção térmica", "Cintura alta segura", "Não marca o corpo"],
        imagem: "images/AnyConv.com__conjuntoavaverde.webp",
        variantes: []
    },

    // ==================== CONJUNTO ANA ====================
    {
        id: 1, nome: "Conjunto Fitness Ana Branco", precoOriginal: "189,90", preco: '39,90', badge: "NOVO",
        descricao: "O Conjunto Ana foi projetado para mulheres que buscam performance e estilo na academia. Com tecido dry-fit de alta compressão, oferece sustentação perfeita durante treinos intensos, mantendo o conforto e a liberdade de movimento.",
        caracteristicas: ["Tecido Dry-Fit com tecnologia de absorção de suor", "Compressão moderada que modela o corpo", "Costuras flatlock que não irritam a pele", "Proteção UV 50+ para treinos ao ar livre"],
        imagem: "images/cojuntoanabranco.webp",
        variantes: []
    },
    {
        id: 2, nome: "Conjunto Fitness Ana Rosa", precoOriginal: "189,90", preco: '39,90', badge: "",
        descricao: "O Conjunto Ana em rosa traz toda a feminilidade para o seu treino sem abrir mão do desempenho. Tecido respirável e com elasticidade 4-way stretch que acompanha cada movimento do seu corpo.",
        caracteristicas: ["Tecido Dry-Fit com tecnologia de absorção de suor", "Elasticidade 4-way stretch", "Cintura alta que não rola durante exercícios", "Secagem ultra-rápida"],
        imagem: "images/cojuntoanarosa.webp",
        variantes: []
    },
    {
        id: 3, nome: "Conjunto Fitness Ana Roxo", precoOriginal: "189,90", preco: '39,90', badge: "FAVORITO",
        descricao: "O Conjunto Ana na cor roxo vibrante foi feito para quem quer se destacar na academia. Modelagem que valoriza as curvas com sustentação de alta performance para qualquer tipo de treino.",
        caracteristicas: ["Tecido antibacteriano que evita odores", "Compressão que reduz fadiga muscular", "Design ergonômico para máxima mobilidade", "Não transparece mesmo ao agachar"],
        imagem: "images/cojuntoanaroxo.webp",
        variantes: []
    },
    {
        id: 4, nome: "Conjunto Fitness Ana Verde", precoOriginal: "189,90", preco: '39,90', badge: "",
        descricao: "Treine com atitude usando o Conjunto Ana Verde. A cor vibrante combina com a energia do treino e o tecido tecnológico garante que você se mantenha seca e confortável do aquecimento ao alongamento final.",
        caracteristicas: ["Tecido com controle térmico inteligente", "Cós largo com elástico embutido", "Zero transparência em todos os movimentos", "Durabilidade superior — mantém a forma após lavagens"],
        imagem: "images/cojuntoanaverde.webp",
        variantes: []
    },

    // ==================== CONJUNTO BIANCA ====================
    {
        id: 5, nome: "Conjunto Fitness Bianca Branco", precoOriginal: "219,90", preco: '39,90', badge: "NOVO",
        descricao: "O Conjunto Bianca Branco entrega sofisticação para o seu treino. Com design clean e minimalista, combina tecido de alta tecnologia com um visual elegante que vai da academia ao dia a dia.",
        caracteristicas: ["Tecido suplex premium de alta gramatura", "Sustentação reforçada no top", "Cintura alta modeladora com cós anatômico", "Costuras invisíveis e reforçadas"],
        imagem: "images/conjuntobiancabranco.webp",
        variantes: []
    },
    {
        id: 6, nome: "Conjunto Fitness Bianca Laranja", precoOriginal: "219,90", preco: '39,90', badge: "",
        descricao: "Energia pura no tom laranja vibrante do Conjunto Bianca. Ideal para treinos de alta intensidade como HIIT e CrossFit, com tecnologia de compressão que melhora a circulação e reduz a fadiga muscular.",
        caracteristicas: ["Compressão graduada para melhor performance", "Tecido com proteção UV 50+", "Modelagem que não restringe movimentos", "Acabamento premium sem costuras aparentes"],
        imagem: "images/conjuntobiancalaranja.webp",
        variantes: []
    },
    {
        id: 7, nome: "Conjunto Fitness Bianca Marrom", precoOriginal: "219,90", preco: '39,90', badge: "",
        descricao: "O tom terroso do Conjunto Bianca Marrom traz sofisticação e versatilidade. Perfeito para quem busca uma peça que funciona tanto dentro da academia quanto em looks casuais do dia a dia.",
        caracteristicas: ["Tonalidade terrosa em tendência fitness", "Tecido com toque gelado na pele", "Elástico embutido que não marca o corpo", "Resistente ao cloro para uso em piscinas"],
        imagem: "images/conjuntobiancamarrom.webp",
        variantes: []
    },
    {
        id: 8, nome: "Conjunto Fitness Bianca Marrom com Preto", precoOriginal: "229,90", preco: '39,90', badge: "FAVORITO",
        descricao: "A combinação marrom com preto do Conjunto Bianca entrega um visual poderoso e moderno. O contraste de cores traz personalidade ao look fitness com toda the tecnologia que você precisa.",
        caracteristicas: ["Design bicolor exclusivo e sofisticado", "Tecido dupla face de alta compressão", "Sustentação extra no busto com bojo removível", "Não desbota mesmo com lavagens frequentes"],
        imagem: "images/conjuntobiancamarromcompreto.webp",
        variantes: []
    },
    {
        id: 9, nome: "Conjunto Fitness Bianca Preto com Roxo", precoOriginal: "229,90", preco: '39,90', badge: "",
        descricao: "Oousadia e estilo se encontram no Conjunto Bianca Preto com Roxo. A combinação de cores impactante garante que você será notada em qualquer ambiente fitness.",
        caracteristicas: ["Contraste de cores vibrante e moderno", "Tecido respirável com secagem instantânea", "Compressão que define a silhueta", "Costuras flatlock para máximo conforto"],
        imagem: "images/conjuntobiancapretocomroxo.webp",
        variantes: []
    },
    {
        id: 10, nome: "Conjunto Fitness Bianca Rosa e Roxo", precoOriginal: "229,90", preco: '39,90', badge: "NOVO",
        descricao: "O degradê rosa e roxo do Conjunto Bianca é pura tendência no mundo fitness. Cores que transmitem energia positiva combinadas com a melhor tecnologia em tecidos esportivos.",
        caracteristicas: ["Estampa em degradê exclusiva e vibrante", "Tecido com tecnologia anti-odor", "Elasticidade 360° para liberdade total", "Mantém a cor vibrante lavagem após lavagem"],
        imagem: "images/conjuntobiancarosaeroxo.webp",
        variantes: []
    },
    {
        id: 11, nome: "Conjunto Fitness Bianca Roxo com Azul", precoOriginal: "229,90", preco: '39,90', badge: "",
        descricao: "O Conjunto Bianca Roxo com Azul traz uma combinação harmoniosa e cheia de personalidade. Perfeito para mulheres que querem um visual marcante sem abrir mão da funcionalidade.",
        caracteristicas: ["Combinação de cores em tendência internacional", "Tecido com toque gelado e secagem rápida", "Modelagem sculpt que valoriza os glúteos", "Alta resistência ao pilling e desgaste"],
        imagem: "images/conjuntobiancaroxocomazul.webp",
        variantes: []
    },
    {
        id: 12, nome: "Conjunto Fitness Bianca Verde", precoOriginal: "219,90", preco: '39,90', badge: "",
        descricao: "Frescor e energia verde no Conjunto Bianca. O tom natural traz leveza visual enquanto o tecido tecnológico trabalha para manter seu corpo firme e confortável durante todo o treino.",
        caracteristicas: ["Tom verde refrescante e moderno", "Tecido com controle de umidade avançado", "Cós alto com sustentação firme", "Perfeito para yoga, pilates e musculação"],
        imagem: "images/conjuntobiancaverde.webp",
        variantes: []
    },

    // ==================== CONJUNTO LUANA ====================
    {
        id: 13, nome: "Conjunto Fitness Luana Preto", precoOriginal: "249,90", preco: '39,90', badge: "FAVORITO",
        descricao: "O Conjunto Luana Preto é o clássico indispensável de toda mulher fitness. Elegante, versátil e com caimento impecável, ele combina com tudo e é perfeito para qualquer modalidade de treino.",
        caracteristicas: ["Preto clássico que nunca sai de moda", "Tecido premium com compressão modeladora", "Bojo removível com sustentação firme", "Costuras reforçadas para treinos pesados"],
        imagem: "images/conjuntoluana.webp",
        variantes: []
    },
    {
        id: 14, nome: "Conjunto Fitness Luana Branco", precoOriginal: "249,90", preco: '39,90', badge: "",
        descricao: "Pureza e sofisticação no Conjunto Luana Branco. Com tecido de dupla camada que garante zero transparência, é the escolha perfeita para quem quer um visual clean e poderoso na academia.",
        caracteristicas: ["Tecido dupla camada anti-transparência", "Branco que não amarela com o tempo", "Sustentação de alta performance", "Design minimalista e elegante"],
        imagem: "images/conjuntoluanabranco.webp",
        variantes: []
    },
    {
        id: 15, nome: "Conjunto Fitness Luana Marrom", precoOriginal: "249,90", preco: '39,90', badge: "",
        descricao: "O tom marrom do Conjunto Luana é pura tendência no universo fitness. Sofisticado e fácil de combinar, ele transmite uma vibe de quem sabe exatamente o que quer.",
        caracteristicas: ["Tom nude/marrom em alta no mercado fitness", "Tecido with toque aveludado e macio", "Cintura extra alta para máxima segurança", "Modelagem que realça os glúteos naturalmente"],
        imagem: "images/conjuntoluanamarrom.webp",
        variantes: []
    },
    {
        id: 16, nome: "Conjunto Fitness Luana Rosa", precoOriginal: "249,90", preco: '39,90', badge: "NOVO",
        descricao: "Feminilidade e força no Conjunto Luana Rosa. A cor delicada contrasta com the potência do tecido de alta performance, criando um equilíbrio perfeito entre beleza e funcionalidade.",
        caracteristicas: ["Rosa millennial super em alta", "Tecido com tecnologia seamless", "Compressão que estiliza sem apertar", "Elástico interno que mantém tudo no lugar"],
        imagem: "images/conjuntoluanarosa.webp",
        variantes: []
    },
    {
        id: 17, nome: "Conjunto Fitness Luana Roxo", precoOriginal: "249,90", preco: '39,90', badge: "",
        descricao: "O Conjunto Luana Roxo exala atitude e personalidade. A cor marcante combina com a energia de um treino intenso e o tecido garante performance máxima em qualquer exercício.",
        caracteristicas: ["Roxo intenso exclusivo e poderoso", "Tecido dry-fit de última geração", "Modelagem ergonômica para o corpo feminino", "Zero transparência garantida"],
        imagem: "images/conjuntoluanaroxo.webp",
        variantes: []
    },
    {
        id: 18, nome: "Conjunto Fitness Luana Verde", precoOriginal: "249,90", preco: '39,90', badge: "",
        descricao: "Natureza e movimento se encontram no Conjunto Luana Verde. A tonalidade fresca e moderna traz leveza ao visual fitness enquanto o tecido trabalha a favor do seu corpo.",
        caracteristicas: ["Verde moderno em tendência athleisure", "Tecido com proteção solar integrada", "Absorção de suor com evaporação rápida", "Ideal para treinos indoor e outdoor"],
        imagem: "images/conjuntoluanaverde.webp",
        variantes: []
    },
    {
        id: 19, nome: "Conjunto Fitness Luana Vinho", precoOriginal: "259,90", preco: '39,90', badge: "ESGOTANDO",
        descricao: "A elegância do vinho no Conjunto Luana. Esta cor premium e sofisticada é perfeita para quem não abre mão do estilo nem durante os treinos mais puxados.",
        caracteristicas: ["Tom vinho premium e exclusivo", "Tecido que não perde a cor nas lavagens", "Compressão avançada para alta performance", "Top com alças ajustáveis e bojo removível"],
        imagem: "images/conjuntoluanavinho.webp",
        variantes: []
    },

    // ==================== CONJUNTO SHORT DUPLO ====================
    {
        id: 20, nome: "Conjunto Short Duplo Fitness Azul", precoOriginal: "139,90", preco: '39,90', badge: "",
        descricao: "O Conjunto Short Duplo Azul combina estilo com funcionalidade total. Com camada interna de compressão e camada externa solta, oferece segurança e liberdade de movimento para treinos de perna e corrida.",
        caracteristicas: ["Design dupla camada with short interno de compressão", "Tecido externo leve e ventilado", "Cintura alta com cós elástico confortável", "Ideal para corrida, crossfit e musculação"],
        imagem: "images/shortduploazul.webp",
        variantes: []
    },
    {
        id: 21, nome: "Conjunto Short Duplo Fitness Branco", precoOriginal: "139,90", preco: '39,90', badge: "NOVO",
        descricao: "O Conjunto Short Duplo Branco entrega um visual clean e moderno para os seus treinos. A dupla camada garante que você se sinta segura em todos os movimentos, sem preocupações.",
        caracteristicas: ["Dupla camada que garante zero transparência", "Tecido anti-suor de secagem ultra-rápida", "Forro interno justo de alta compressão", "Não marca e não enrola durante exercícios"],
        imagem: "images/shortduplobranco.webp",
        variantes: []
    },
    {
        id: 22, nome: "Conjunto Short Duplo Fitness Marinho", precoOriginal: "139,90", preco: '39,90', badge: "",
        descricao: "O Conjunto Short Duplo Marinho é uma peça curinga no seu guarda-roupa fitness. A cor clássica combina com qualquer top e oferece toda the praticidade de uma peça versátil e funcional.",
        caracteristicas: ["Azul marinho versátil e fácil de combinar", "Camada interna with compressão leve", "Tecido que não acumula fiapos ou bolinhas", "Bolso lateral embutido para celular ou chaves"],
        imagem: "images/shortduplomarinho.webp",
        variantes: []
    },
    {
        id: 23, nome: "Conjunto Short Duplo Fitness Marrom", precoOriginal: "139,90", preco: '39,90', badge: "",
        descricao: "O tom terroso do Conjunto Short Duplo Marrom traz uma proposta diferente e moderna para o look fitness. Perfeito para combinar com os conjuntos de mesma tonalidade e montar um visual completo.",
        caracteristicas: ["Tom nude/marrom super tendência", "Design que valoriza os glúteos", "Tecido com elasticidade 4-way stretch", "Lavável à máquina sem perder a forma"],
        imagem: "images/shortduplomarrom.webp",
        variantes: []
    },
    {
        id: 24, nome: "Conjunto Short Duplo Fitness Preto", precoOriginal: "139,90", preco: '39,90', badge: "FAVORITO",
        descricao: "O clássico absoluto: Conjunto Short Duplo Preto. Indispensável para qualquer mulher que treina, combina com todos os tops e funciona perfeitamente em qualquer modalidade esportiva.",
        caracteristicas: ["Preto básico indispensável para treinos", "Dupla camada com forro de alta compressão", "Tecido que mantém a forma após centenas de lavagens", "Anti-odor com tecnologia de fibra inteligente"],
        imagem: "images/shortduplopreto.webp",
        variantes: []
    },
    {
        id: 25, nome: "Conjunto Short Duplo Fitness Rosa", precoOriginal: "139,90", preco: '39,90', badge: "",
        descricao: "O Conjunto Short Duplo Rosa adiciona um toque feminino e delicado ao seu look de treino. Funcional e estiloso, é perfeito para quem quer arrasar dentro e fora da academia.",
        caracteristicas: ["Rosa vibrante e feminino", "Camada dupla para segurança total", "Tecido respirável e ultra-leve", "Cós largo que não aperta e não rola"],
        imagem: "images/shortduplorosa.webp",
        variantes: []
    },
    {
        id: 26, nome: "Conjunto Short Duplo Fitness Roxo", precoOriginal: "139,90", preco: '39,90', badge: "",
        descricao: "O Conjunto Short Duplo Roxo combina personalidade com alta performance. Uma cor marcante para quem não tem medo de ousar e quer se sentir incrível durante cada série.",
        caracteristicas: ["Roxo vibrante e cheio de atitude", "Compressão interna que sustenta sem apertar", "Tecido com acabamento acetinado premium", "Não desbota e mantém the intensidade da cor"],
        imagem: "images/shortduploroxo.webp",
        variantes: []
    },
    {
        id: 27, nome: "Conjunto Short Duplo Fitness Vermelho", precoOriginal: "139,90", preco: '39,90', badge: "ESGOTANDO",
        descricao: "Poder e intensidade no Conjunto Short Duplo Vermelho. A cor chama atenção e transmite the energia que você precisa para dar tudo de si em cada treino. Destaque-se na academia!",
        caracteristicas: ["Vermelho intenso que rouba a cena", "Design ergonômico para máximo conforto", "Tecido anti-pilling de longa duração", "Perfeito para treinos de alta intensidade"],
        imagem: "images/shortduplovermelho.webp",
        variantes: []
    }
];
