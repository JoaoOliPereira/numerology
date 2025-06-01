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
      1: "A alma pioneira. O número 1 vibra com a energia da criação e liderança. Indica uma missão de forjar novos caminhos e inspirar os outros com coragem e originalidade.",
      2: "O diplomata da alma. O número 2 pede união e equilíbrio. Representa alguém com missão de harmonizar conflitos e trazer paz com empatia profunda.",
      3: "O artista universal. O número 3 é a energia da expressão criativa e da alegria. Traz uma missão de iluminar o mundo com beleza e inspiração.",
      4: "O arquiteto espiritual. O número 4 representa estrutura e propósito. A missão é construir bases sólidas para a alma e para a sociedade.",
      5: "O espírito livre. O número 5 vibra com mudança e expansão. É chamado a explorar o desconhecido e inspirar liberdade de pensamento.",
      6: "O guardião do lar. O número 6 busca equilíbrio entre o dar e receber. Tem missão de nutrir, curar e servir com amor incondicional.",
      7: "O buscador da verdade. O número 7 é introspectivo e místico. Representa uma missão de autoconhecimento e conexão com o divino.",
      8: "O mestre do poder. O número 8 exige equilíbrio entre matéria e espírito. A missão é manifestar abundância com ética e liderança.",
      9: "O servidor universal. O número 9 carrega a vibração de conclusão, compaixão e entrega. Missão de servir a humanidade com amor universal."
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
      1: "A alma anseia por ser pioneira e afirmar sua identidade com força. Busca independência para realizar sua verdadeira missão.",
      2: "A alma deseja profunda união, harmonia e sintonia com os outros. Há sensibilidade elevada e busca por empatia.",
      3: "O coração quer se expressar, criar e partilhar alegria. A alma vibra com entusiasmo e beleza.",
      4: "A alma anseia por estrutura, segurança e ordem. Busca estabilidade como base da evolução.",
      5: "O espírito busca mudança, aventura e movimento. Há um desejo profundo de liberdade interior.",
      6: "A alma sente necessidade de cuidar, curar e proteger. Traz o dom do amor compassivo.",
      7: "A alma quer recolhimento, reflexão e conexão espiritual. Deseja compreender os mistérios da vida.",
      8: "Desejo por controle, poder e sucesso. A alma anseia por realizar seu potencial material e espiritual.",
      9: "Desejo profundo de servir a humanidade. A alma quer se doar com amor universal."
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
      1: "Você irradia força e individualidade. Os outros veem alguém confiante e de liderança natural.",
      2: "Transparece empatia e sensibilidade. Sua presença transmite paz e confiança.",
      3: "Expressivo e encantador. Encanta com leveza e alegria.",
      4: "Passa confiança e estabilidade. Vêem você como pilar de apoio.",
      5: "Atrai com energia e versatilidade. Sua presença é vibrante e dinâmica.",
      6: "Irradia cuidado e harmonia. Vêem você como alguém protetor e gentil.",
      7: "Aparência introspectiva e misteriosa. Inspira respeito e reflexão.",
      8: "Passa poder e autoridade. Os outros sentem seu magnetismo e liderança.",
      9: "Transmite compaixão e sabedoria. Sua presença inspira e conforta."
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
      1: "Nova jornada. Plantar as sementes do seu destino.",
      2: "Desenvolver relações e cooperação. Tempo de harmonia interior.",
      3: "Expandir criatividade e comunicar com o mundo.",
      4: "Trabalhar com firmeza, organizar estruturas sólidas.",
      5: "Libertar-se do antigo e abraçar a mudança.",
      6: "Focar em cuidar, curar e assumir responsabilidades.",
      7: "Buscar sabedoria e conexão espiritual profunda.",
      8: "Manifestar poder e prosperidade com consciência.",
      9: "Concluir ciclos, desapegar e servir com amor."
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
        1: "Em vidas passadas, pode ter faltado iniciativa e coragem. Nesta vida, \u00e9 essencial desenvolver autoconfian\u00e7a e lideran\u00e7a para cumprir sua miss\u00e3o.",
        2: "Houve falta de coopera\u00e7\u00e3o e empatia anteriormente. Agora, deve aprender a trabalhar em equipe e valorizar os relacionamentos.",
        3: "A express\u00e3o criativa foi negligenciada. \u00c9 hora de se comunicar com alegria e compartilhar seus talentos.",
        4: "A disciplina e a organiza\u00e7\u00e3o foram desafios. Nesta vida, deve construir bases s\u00f3lidas e cumprir suas responsabilidades.",
        5: "Resist\u00eancia \u00e0 mudan\u00e7a foi um obst\u00e1culo. Agora, \u00e9 importante abra\u00e7ar novas experi\u00eancias e buscar liberdade.",
        6: "Neglig\u00eancia com responsabilidades familiares ocorreu. Deve assumir compromissos e cuidar dos entes queridos.",
        7: "A superficialidade predominou. \u00c9 necess\u00e1rio aprofundar-se em conhecimento e espiritualidade.",
        8: "Houve m\u00e1 gest\u00e3o de recursos. Aprenda a lidar com dinheiro e poder de forma \u00e9tica.",
        9: "Faltou compaix\u00e3o e servi\u00e7o ao pr\u00f3ximo. Desenvolva empatia e contribua para o bem-estar coletivo."
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
        13: "Em vidas passadas, pode ter evitado responsabilidades, levando a uma vida de pregui\u00e7a e falta de foco. Nesta vida, \u00e9 crucial desenvolver disciplina, organiza\u00e7\u00e3o e perseveran\u00e7a para superar esses desafios.",
        14: "O abuso de liberdade e a falta de comprometimento foram predominantes. Agora, deve encontrar um equil\u00edbrio entre liberdade pessoal e responsabilidade, evitando excessos e instabilidade.",
        16: "O ego e o orgulho causaram desequil\u00edbrios anteriormente. Esta vida exige humildade, autoconhecimento e a desconstru\u00e7\u00e3o de velhos padr\u00f5es para uma verdadeira transforma\u00e7\u00e3o espiritual.",
        19: "A manipula\u00e7\u00e3o e o ego\u00edsmo marcaram vidas passadas. \u00c9 necess\u00e1rio aprender a liderar com empatia, assumindo responsabilidades sem buscar reconhecimento pessoal."
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