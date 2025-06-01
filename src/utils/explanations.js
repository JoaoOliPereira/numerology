import {
  calcularNumeroDeVida,
  calcularNumeroDaAlma,
  calcularNumeroDaPersonalidade,
  calcularAnoPessoal,
  calcularLicoesCarmicas,
  calcularNumerosKarmicos,
} from '../utils/numerologyUtils';

const explanations = {
  "Número de Vida": {
    simple: {
      1: "Liderança, independência e iniciativa.",
      2: "Cooperação, diplomacia e sensibilidade.",
      3: "Criatividade, expressão e sociabilidade.",
      4: "Disciplina, organização e trabalho árduo.",
      5: "Liberdade, aventura e adaptabilidade.",
      6: "Responsabilidade, amor e cuidado com os outros.",
      7: "Espiritualidade, introspecção e sabedoria.",
      8: "Ambição, poder e sucesso material.",
      9: "Compaixão, altruísmo e humanitarismo."
    },
    deep: {
        1: "Você carrega a vibração do pioneiro, alguém que veio ao mundo para abrir caminhos, liderar e afirmar sua individualidade. A sua missão é desenvolver coragem, iniciativa e independência, mesmo diante da solidão ou resistência externa. A jornada do 1 é aprender a confiar em sua voz interior e não depender da aprovação alheia. Você é chamado a inspirar pelo exemplo — com força, determinação e criatividade. Assim como o sol brilha sozinho, você veio brilhar sem pedir permissão.",
        2: "Você é o pacificador, aquele que sente com o coração e escuta com a alma. O número 2 traz uma missão de cura através da empatia, da sensibilidade e da diplomacia. O seu caminho envolve a construção de pontes, a escuta ativa e a delicadeza nas relações. A sua força está na suavidade, não na imposição. Num mundo de vozes altas, você ensina a beleza do silêncio e da harmonia. O seu desafio é confiar que a vulnerabilidade também é uma forma de poder.",
        3: "A luz criativa do universo pulsa em você. O número 3 representa expressão, alegria e imaginação. A sua missão é colorir o mundo com a sua arte, a sua palavra e a sua presença. Você está aqui para despertar sorrisos, inspirar esperança e canalizar ideias vindas de planos sutis. Cultive a sua espontaneidade e autenticidade, mas cuidado com a dispersão. Quando alinha coração e mente, torna-se um farol de entusiasmo e inspiração para os outros.",
        4: "Você é o construtor da realidade. A vibração do 4 fala de estabilidade, responsabilidade e ordem. A sua missão nesta vida é criar bases sólidas — seja em projetos, relacionamentos ou estruturas sociais. Você veio ensinar o valor da disciplina, da paciência e do trabalho bem-feito. A energia 4, embora prática, tem um propósito espiritual: mostrar que o sagrado também habita o cotidiano. O seu caminho é transformar o esforço em realização duradoura.",
        5: "A alma livre e aventureira do número 5 veio ao mundo para experimentar, mudar e expandir horizontes. A sua missão envolve flexibilidade, inovação e movimento. Você aprende por meio da diversidade e ensina os outros a se libertarem de crenças limitantes. No entanto, é fundamental equilibrar liberdade com responsabilidade. A sua energia é vento — leve, criativa e revolucionária. Quando canalizada com sabedoria, esta se torna uma força transformadora.",
        6: "Você é o guardião do amor e do cuidado. A vibração do 6 é profundamente ligada à família, ao lar, à beleza e ao serviço. A sua missão é trazer equilíbrio e cura emocional onde houver dor, oferecendo acolhimento com generosidade. O seu desafio é não se sobrecarregar tentando salvar a todos. Quando aprende a amar sem se anular, torna-se um verdadeiro canal de cura. A sua alma vibra com o dom de fazer o mundo um lugar mais terno e harmonioso.",
        7: "Você é o buscador da verdade — alguém com profundo senso de introspecção, mistério e espiritualidade. O número 7 traz uma missão de autoconhecimento, análise e conexão com o sagrado. Pode-se sentir diferente ou incompreendido, mas isso é parte do seu chamado. Você é um construtor de pontes entre o visível e o invisível. A sua alma anseia por significado, não por superficialidade. Quando se conecta à intuição e ao silêncio interior, encontra sabedoria divina.",
        8: "Você é o manifestador do equilíbrio entre poder e consciência. O número 8 carrega uma missão de realização material, mas com ética, responsabilidade e senso de justiça. O seu desafio é usar a ambição como ferramenta de evolução, e não de dominação. Com liderança natural, você veio para construir impérios — mas só prospera de verdade quando entende que o verdadeiro poder nasce do espírito, e não do ego. Você é chamado a liderar com propósito e integridade.",
        9: "Você é o servidor universal — uma alma antiga com vocação para a compaixão, a entrega e o amor incondicional. O número 9 carrega a missão de curar feridas coletivas através da empatia, da arte e do exemplo. O seu coração é vasto e sente o sofrimento alheio como se fosse seu. O seu caminho é o do perdão, do desapego e da generosidade. Ao aprender a doar de si sem se sacrificar, torna-se uma fonte de luz para todos ao seu redor. A sua alma é um reflexo do amor universal."
      }
    },

  "Número da Alma": {
    simple: {
      1: "Desejo de liderança e independência.",
      2: "Busca por harmonia e parcerias.",
      3: "Expressão emocional e criatividade.",
      4: "Necessidade de segurança e estabilidade.",
      5: "Anseio por liberdade e mudança.",
      6: "Desejo de cuidar dos outros.",
      7: "Busca por conhecimento interior.",
      8: "Desejo de sucesso e realização.",
      9: "Chamado à compaixão e serviço ao próximo."
    },
      deep: {
        1: "No íntimo, a sua alma clama por liberdade e expressão da sua individualidade. Você deseja ser reconhecido pela sua originalidade e capacidade de liderar. Existe um anseio profundo por autonomia e pela chance de fazer as coisas do seu jeito, sem interferência externa. Ao atender esse chamado, você encontra paz e propósito.",
        2: "A sua alma deseja união, parceria e equilíbrio emocional. Há uma necessidade interna de se sentir amado e compreendido. O desejo de criar vínculos verdadeiros é profundo, e você se sente completo quando há sintonia emocional. No entanto, precisa aprender a não se perder no outro — seu valor não depende de aprovação.",
        3: "No âmago, você anseia por expressão, beleza e alegria. Existe uma vontade de viver com leveza e de tocar os outros com palavras, arte ou presença vibrante. A sua alma quer cantar, rir, encantar. Mas para que isso floresça, é preciso vencer medos de julgamento e confiar na sua autenticidade.",
        4: "A sua alma busca segurança, estrutura e um senso de ordem. Há um impulso interno por estabilidade e por saber que tudo tem um lugar certo. No fundo, você deseja construir algo duradouro, que resista ao tempo. Porém, também precisa aceitar que nem tudo pode ser controlado — e que o caos às vezes gera crescimento.",
        5: "Há em você uma inquietação fundamental. A alma deseja movimento, mudança, descoberta. Você precisa de estímulo, aventura e variedade para se sentir vivo. Rotina sufoca sua luz interior. No entanto, também deve cultivar raízes internas para que a liberdade não se torne fuga.",
        6: "A alma deseja cuidar, servir e proteger. Existe um chamado interno para oferecer amor, estabilidade e cura às pessoas ao redor. A sua realização vem da troca afetiva e da harmonia nos lares e vínculos. Mas atenção: aprender a se cuidar antes de cuidar dos outros é parte essencial da sua jornada.",
        7: "A sua alma deseja recolhimento, silêncio e contemplação. Existe um anseio por compreender os mistérios da existência, mergulhar no invisível e buscar conexão espiritual profunda. Você encontra paz quando está só, refletindo e estudando. Mas também deve permitir que essa sabedoria chegue aos outros.",
        8: "O desejo da alma é realizar, conquistar e deixar marca no mundo. Você se sente energizado por metas, desafios e pelo uso eficaz dos recursos materiais. Mas a alma também anseia por reconhecimento verdadeiro — aquele que vem da integridade. Prosperar com propósito é a sua via de realização.",
        9: "A sua alma deseja servir, amar e transformar. Existe uma sensibilidade aguçada à dor alheia e um impulso por ajudar, mesmo quando ninguém vê. O amor universal pulsa forte em você. Quando se entrega a causas maiores, encontra a sua verdadeira paz. Mas deve cuidar para não esquecer de si mesmo no processo."
      }
    },

  "Número da Personalidade": {
    simple: {
      1: "Aparência forte, decidida e independente.",
      2: "Imagem pacífica, gentil e sensível.",
      3: "Expressivo, alegre e comunicativo.",
      4: "Responsável, confiável e prático.",
      5: "Espontâneo, aventureiro e curioso.",
      6: "Amável, cuidadoso e acolhedor.",
      7: "Reservado, pensativo e enigmático.",
      8: "Seguro, ambicioso e influente.",
      9: "Generoso, empático e inspirador."
    },
      deep: {
        1: "A sua presença transmite liderança, coragem e firmeza. As pessoas percebem você como alguém determinado, com opinião forte e postura de comando. Mesmo em silêncio, você impõe respeito. Isso pode atrair admiradores — e também opositores. O desafio é equilibrar autoconfiança com humildade.",
        2: "Você emana empatia e sensibilidade. A sua presença costuma ser acolhedora, delicada e receptiva. Os outros se sentem à vontade para se abrir com você. A sua aparência pode transmitir doçura ou reserva, mas há magnetismo sutil em sua gentileza. Lembre-se de se proteger energeticamente.",
        3: "Carismático, vibrante, cheio de vida — é assim que os outros o veem. A sua comunicação é envolvente, e sua expressão corporal muitas vezes fala mais do que palavras. Você inspira leveza, humor e alegria. A energia social atrai, mas às vezes esconde sua profundidade real.",
        4: "Você transmite confiabilidade e seriedade. Há em você uma energia de constância e disciplina. As pessoas veem alguém que leva a vida a sério, que cumpre o que promete, e que não se perde em distrações. Isso atrai quem busca estabilidade. O seu desafio é não se tornar rígido demais.",
        5: "A sua presença é inquieta e estimulante. Os outros percebem alguém curioso, versátil, que adora conversar e se mover. Há um charme na sua espontaneidade e liberdade. Você quebra rotinas por onde passa, e isso encanta — ou assusta. O segredo é saber quando desacelerar.",
        6: "Você irradia acolhimento e harmonia. A sua imagem é de alguém protetor, confiável e generoso. Pode ser percebido como uma figura maternal ou paternal, mesmo sem querer. Os outros se sentem seguros com sua presença. Mas é preciso cuidar para que isso não vire obrigação emocional.",
        7: "A sua aura é reservada, misteriosa, contemplativa. Mesmo sem palavras, transmite profundidade. Os outros podem vê-lo como sábio, estranho ou enigmático. A sua postura desperta curiosidade e respeito. Mas cuidado para que o distanciamento não se torne barreira afetiva.",
        8: "Você passa força, autoridade e magnetismo. A presença é marcante, muitas vezes associada a sucesso e ambição. Os outros o percebem como alguém que sabe o que quer e vai atrás. Isso inspira — e também intimida. Aprender a suavizar a rigidez fortalece seus vínculos.",
        9: "Você transmite nobreza de alma. A sua presença inspira compaixão, sabedoria e generosidade. Há algo em seus olhos que fala de dor e cura, como se já tivesse vivido muitas vidas. Os outros se sentem tocados por você, mesmo sem saber explicar por quê. A sua energia é cura silenciosa."
      }
    },

  "Ano Pessoal": {
    simple: {
      1: "Ano de inícios e novas oportunidades.",
      2: "Ano de paciência e relacionamentos.",
      3: "Ano de expressão e criatividade.",
      4: "Ano de trabalho e estruturação.",
      5: "Ano de mudanças e liberdade.",
      6: "Ano de responsabilidades e família.",
      7: "Ano de introspecção e espiritualidade.",
      8: "Ano de conquistas e poder.",
      9: "Ano de conclusão e desapego."
    },
      deep: {
        1: "Um ciclo se inicia. Este é o ano para plantar sementes que definirão os próximos nove anos. É tempo de coragem, ousadia e ação independente. Evite esperar por permissões — confie na sua visão e dê os primeiros passos.",
        2: "O ritmo desacelera. Este é um ano para cultivar relações, fortalecer vínculos e trabalhar em conjunto. A paciência será testada, mas os frutos virão através da diplomacia e do cuidado com os detalhes invisíveis.",
        3: "O ano da expressão, da criatividade e da conexão com a alegria. Momento de expandir socialmente, comunicar ideias e buscar leveza. Liberte sua voz, confie no seu brilho e compartilhe sua arte com o mundo.",
        4: "Hora de construir com consistência. Este é um ano de organização, responsabilidade e foco em resultados duradouros. Pode parecer exigente, mas é nesse alicerce que os sonhos ganham forma concreta.",
        5: "A mudança é inevitável. Um ano marcado por liberdade, viagens, surpresas e reviravoltas. Nada será como antes. Adapte-se com leveza, mas evite impulsividade. Mova-se com propósito, não apenas por tédio.",
        6: "Ano de comprometimento, família e equilíbrio afetivo. O universo chama você a cuidar — de si, dos outros, do que ama. Pode haver questões familiares ou de lar que exigem atenção. Cultive beleza no cotidiano.",
        7: "Tempo de introspecção, estudo e conexão espiritual. Um ano mais silencioso, voltado para a busca interior. Menos ação externa, mais contemplação. Questões existenciais podem emergir: acolha-as com sabedoria.",
        8: "Ano de colheita e poder pessoal. Você será chamado a liderar, assumir responsabilidades e lidar com questões materiais de forma madura. Ambição e prosperidade se alinham quando há ética e clareza de propósito.",
        9: "Um ciclo se encerra. Este é o ano da conclusão, do perdão, da liberação. Desapegue do que não serve mais — pessoas, padrões, lugares. Faça limpezas físicas e emocionais. Só o que for essencial deve seguir."
      }
  },

  "Li\u00e7\u00f5es C\u00e1rmicas": {
    simple: {
        1: "Desenvolver iniciativa e autoconfian\u00e7a.",
        2: "Aprender coopera\u00e7\u00e3o e empatia.",
        3: "Expressar-se com criatividade e alegria.",
        4: "Cultivar disciplina e organiza\u00e7\u00e3o.",
        5: "Abra\u00e7ar mudan\u00e7as e liberdade.",
        6: "Assumir responsabilidades familiares.",
        7: "Buscar conhecimento e espiritualidade.",
        8: "Gerir recursos com sabedoria.",
        9: "Praticar compaix\u00e3o e servi\u00e7o ao pr\u00f3ximo."
    },
    deep: {
        1: "Em vidas passadas, você pode ter se submetido demais, apagado sua luz ou evitado tomar iniciativa. Nesta vida, precisa aprender a confiar em si, agir com firmeza e liderar sua própria jornada, mesmo com medo.",
        2: "Faltou empatia, escuta ou capacidade de colaborar. Agora, é essencial desenvolver sensibilidade, paciência e harmonia nas relações. A cooperação é sua lição mais valiosa — e o respeito mútuo, seu maior mestre.",
        3: "Você pode ter sufocado sua voz, evitado brilhar ou se escondido do mundo. Nesta vida, deve se expressar com autenticidade, criatividade e alegria. O medo do julgamento precisa ser superado para a alma florescer.",
        4: "A desorganização, a fuga de responsabilidades e a falta de foco comprometeram vidas anteriores. Agora, sua alma precisa aprender a estruturar, trabalhar com disciplina e sustentar aquilo que constrói.",
        5: "A alma pode ter resistido à mudança ou vivido excessos desregrados. Nesta encarnação, o desafio é encontrar equilíbrio entre liberdade e responsabilidade, desenvolvendo flexibilidade sem perder o centro.",
        6: "Negligência com o cuidado afetivo, abandono ou excesso de dependência podem marcar o passado. Hoje, você aprende a amar com maturidade, assumir compromissos e equilibrar doação com autovalor.",
        7: "Você pode ter vivido na superfície, negligenciado o mundo interior ou usado conhecimento de forma manipulativa. Agora, é hora de buscar sabedoria verdadeira, refletir, meditar e honrar o plano espiritual.",
        8: "Houve mau uso do poder, ganância ou descontrole material. Nesta vida, você deve aprender a gerir recursos com ética, alinhar ambição com espiritualidade e construir um legado consciente.",
        9: "Faltou compaixão, generosidade ou desapego. Agora, você é chamado a servir causas maiores, a perdoar com o coração e a se conectar ao sofrimento humano com empatia e ação verdadeira."
    }
   },

   "N\u00fameros K\u00e1rmicos": {
    simple: {
        13: "Superar a pregui\u00e7a e desenvolver disciplina.",
        14: "Equilibrar liberdade com responsabilidade.",
        16: "Transformar o ego e buscar humildade.",
        19: "Assumir responsabilidade sem ego\u00edsmo."
    },
    deep: {
        13: "Nesta vida, você é chamado a desenvolver autodisciplina, consistência e foco. Em vidas passadas, pode ter procrastinado, evitado esforço ou vivido na preguiça. Agora, só haverá progresso com esforço estruturado e perseverança.",
        14: "A alma abusou da liberdade ou do prazer — excessos, vícios ou irresponsabilidade podem marcar o passado. Hoje, sua missão é encontrar equilíbrio, controlar impulsos e ser livre sem ferir a si ou aos outros.",
        16: "Ego, orgulho ou manipulação espiritual provocaram quedas em outras vidas. Esta existência pede humildade profunda, autoconhecimento doloroso e reconstrução a partir da verdade interior. É um número de renascimento.",
        19: "Você pode ter usado o poder de forma egoísta, ferido outros ou buscado glória pessoal. Nesta vida, deve aprender a agir com empatia, assumir responsabilidades e liderar sem esperar aplausos. O seu desafio é o amor altruísta."
    }

}

};

export { explanations };

export function getAllDetailedExplanations({ name, birthDate }) {
  const numeroVida = calcularNumeroDeVida(birthDate);
  const numeroAlma = calcularNumeroDaAlma(name);
  const numeroPersonalidade = calcularNumeroDaPersonalidade(name);
  const anoPessoal = calcularAnoPessoal(birthDate);
  const licoesCarmicas = calcularLicoesCarmicas(name);
  const { karmico } = calcularNumerosKarmicos(name);

  const buildExplicacao = (tipo, numero) => ({
    simple: explanations?.[tipo]?.simple?.[numero] ?? `Sem explicação para ${tipo} ${numero}`,
    deep: explanations?.[tipo]?.deep?.[numero] ?? `Sem explicação profunda para ${tipo} ${numero}`
  });

  return [
    {
      title: "Número de Vida",
      ...buildExplicacao("Número de Vida", numeroVida)
    },
    {
      title: "Número da Alma",
      ...buildExplicacao("Número da Alma", numeroAlma)
    },
    {
      title: "Número da Personalidade",
      ...buildExplicacao("Número da Personalidade", numeroPersonalidade)
    },
    {
      title: "Ano Pessoal",
      ...buildExplicacao("Ano Pessoal", anoPessoal)
    },
    {
      title: "Lições Cármicas",
      simple: licoesCarmicas.length
        ? licoesCarmicas.map(n => explanations["Lições Cármicas"].simple?.[n] ?? `Sem explicação para lição ${n}`).join("\n\n")
        : "Não tens Lições Cármicas nesta encarnação.",
      deep: licoesCarmicas.length
        ? licoesCarmicas.map(n => explanations["Lições Cármicas"].deep?.[n] ?? `Sem explicação profunda para lição ${n}`).join("\n\n")
        : "Não tens Lições Cármicas nesta encarnação."
    },
    {
      title: "Número Kármico",
      simple: karmico
        ? `Tens um número kármico importante: ${karmico}\n\n${explanations["Números Kármicos"].simple?.[karmico] ?? "Sem explicação simples."}`
        : "Não tens números kármicos no teu nome.",
      deep: karmico
        ? `Tens um número kármico importante: ${karmico}\n\n${explanations["Números Kármicos"].deep?.[karmico] ?? "Sem explicação profunda."}`
        : "Não tens números kármicos no teu nome."
    }
  ];
}