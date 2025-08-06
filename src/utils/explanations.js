import {
  calcularNumeroDeVida,
  calcularNumeroDaAlma,
  calcularNumeroDaPersonalidade,
  calcularAnoPessoal,
  calcularLicoesCarmicas,
  calcularNumerosKarmicos,
} from '../utils/numerologyUtils';

const explanations = {
  pt:{
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
      9: "Compaixão, altruísmo e humanitarismo.",
      11: "MESTRE - Intuição elevada, inspiração e idealismo.",
      22: "MESTRE - Construção, liderança prática e realização em grande escala.",
      33: "MESTRE - Amor universal, cura e altruísmo espiritual."
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
        9: "Você é o servidor universal — uma alma antiga com vocação para a compaixão, a entrega e o amor incondicional. O número 9 carrega a missão de curar feridas coletivas através da empatia, da arte e do exemplo. O seu coração é vasto e sente o sofrimento alheio como se fosse seu. O seu caminho é o do perdão, do desapego e da generosidade. Ao aprender a doar de si sem se sacrificar, torna-se uma fonte de luz para todos ao seu redor. A sua alma é um reflexo do amor universal.",
        11: "MESTRE - Você é o visionário iluminado, alguém com uma conexão espiritual intensa e uma sensibilidade que transcende o comum. A missão do número 11 envolve inspirar e despertar os outros, trazendo luz e esperança onde há escuridão. Você sente a responsabilidade de canalizar ideias elevadas e transformar intuição em ação concreta. No entanto, seu desafio é equilibrar a intensidade emocional e evitar a ansiedade, aprendendo a confiar no fluxo divino e na sua sabedoria interior.",
        22: "MESTRE - Você é o mestre construtor, com a capacidade de transformar sonhos grandiosos em realidade palpável. A vibração do 22 traz a força de um líder prático e visionário, capaz de realizar grandes feitos que beneficiam muitas pessoas. A sua missão é equilibrar ambição com humildade, traduzindo ideias espirituais em estruturas sólidas e duradouras. Você tem o potencial de deixar um legado, mas deve aprender a não se sobrecarregar nem se prender a expectativas externas.",
        33: "MESTRE - Você é o mestre professor, carregando uma energia de amor incondicional e serviço ao próximo em seu grau máximo. A missão do número 33 é curar, educar e elevar a consciência coletiva através do exemplo e da compaixão profunda. Sua alma é um canal de cura, e você é chamado a inspirar sacrifício consciente sem perder sua própria luz. Seu desafio é manter o equilíbrio emocional e espiritual, encontrando força no amor próprio para irradiar essa luz ao mundo."
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
      9: "Chamado à compaixão e serviço ao próximo.",
      11: "MESTRE - Alma intuitiva, sensível e inspiradora, buscando elevar a consciência.",
      22: "MESTRE - Alma prática e visionária, focada em construir legados duradouros.",
      33: "MESTRE - Alma compassiva e amorosa, dedicada ao serviço e à cura."
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
        9: "A sua alma deseja servir, amar e transformar. Existe uma sensibilidade aguçada à dor alheia e um impulso por ajudar, mesmo quando ninguém vê. O amor universal pulsa forte em você. Quando se entrega a causas maiores, encontra a sua verdadeira paz. Mas deve cuidar para não esquecer de si mesmo no processo.",
        11: "MESTRE - A sua alma é profundamente conectada ao plano espiritual, trazendo uma intuição aguçada e uma missão de inspirar os outros através da luz e da esperança. Você sente um chamado para transcender o ordinário, enfrentando desafios emocionais que fortalecem sua sensibilidade e sabedoria interior. É fundamental aprender a confiar no seu potencial espiritual sem se perder na ansiedade.",
        22: "MESTRE - Você carrega uma alma com a capacidade rara de transformar ideias elevadas em realidades concretas. Sua missão é construir estruturas sólidas, tanto internas quanto externas, que beneficiem a coletividade. O equilíbrio entre ambição e humildade é o caminho para a realização plena, assim como o cuidado para não se sobrecarregar com responsabilidades que possam esgotar sua energia.",
        33: "MESTRE - A sua alma traz uma vibração de amor incondicional e serviço profundo. Você está aqui para curar e elevar o coletivo, assumindo um papel de mestre que lidera pelo exemplo e pela compaixão. O desafio reside em manter seu próprio equilíbrio emocional enquanto oferece sua luz aos outros, cultivando amor próprio para sustentar essa missão grandiosa."
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
      9: "Generoso, empático e inspirador.",
      11: "MESTRE - Imagem de inspiração e sensibilidade, irradiando intuição e idealismo.",
      22: "MESTRE - Presença de líder confiável e visionário, transmitindo força e estabilidade.",
      33: "MESTRE - Aura de mestre amoroso e curador, mostrando dedicação e altruísmo."
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
        9: "Você transmite nobreza de alma. A sua presença inspira compaixão, sabedoria e generosidade. Há algo em seus olhos que fala de dor e cura, como se já tivesse vivido muitas vidas. Os outros se sentem tocados por você, mesmo sem saber explicar por quê. A sua energia é cura silenciosa.",
        11: "MESTRE - Você projeta uma personalidade que chama atenção pela sua energia vibrante e sensível. Sua presença inspira confiança, mesmo que por dentro você sinta as dúvidas e a intensidade emocional que esse número traz. O desafio é harmonizar essa dualidade e usar sua influência para motivar e iluminar o caminho dos outros.",
        22: "MESTRE - A sua personalidade se manifesta como a de alguém altamente capaz, pragmático e ao mesmo tempo visionário. Você é visto como um construtor de confiança, alguém que traz soluções concretas e visão de futuro. É importante equilibrar essa imagem forte com flexibilidade e autocuidado para evitar o desgaste.",
        33: "MESTRE - Você aparece para o mundo como uma pessoa calorosa, dedicada e profundamente altruísta. Sua personalidade é magnética e acolhedora, refletindo seu desejo de ajudar e curar. O desafio é manter essa imagem autêntica sem se perder nas expectativas alheias, encontrando sempre tempo para nutrir sua própria essência."
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
  },
  en:{
    "lifeNumber": {
      simple: {
      1: "Leadership, independence, and initiative.",
      2: "Cooperation, diplomacy, and sensitivity.",
      3: "Creativity, expression, and sociability.",
      4: "Discipline, organization, and hard work.",
      5: "Freedom, adventure, and adaptability.",
      6: "Responsibility, love, and care for others.",
      7: "Spirituality, introspection, and wisdom.",
      8: "Ambition, power, and material success.",
      9: "Compassion, altruism, and humanitarianism.",
      11: "MASTER - High intuition, inspiration, and idealism.",
      22: "MASTER - Builder, practical leadership, and large-scale achievement.",
      33: "MASTER - Teacher, unconditional love, healing, and altruism."
      },
      deep: {
      1: "You carry the vibration of a pioneer, someone who came to this world to lead and assert their individuality. Your mission is to develop courage, initiative, and independence, even when facing loneliness or external resistance. Your journey is about trusting your inner voice and not relying on outside approval. You are meant to inspire through example—with strength, determination, and creativity. Like the sun shines alone, you are here to shine without asking for permission.",
      2: "You are the peacemaker, one who feels with the heart and listens with the soul. Number 2 brings a mission of healing through empathy, sensitivity, and diplomacy. Your path involves building bridges, active listening, and gentleness in relationships. Your strength lies in softness, not force. In a world of loud voices, you teach the beauty of silence and harmony. Your challenge is to trust that vulnerability is also a form of power.",
      3: "The creative light of the universe pulses through you. Number 3 represents expression, joy, and imagination. Your mission is to color the world with your art, your words, and your presence. You are here to awaken smiles, inspire hope, and channel ideas from subtle realms. Cultivate spontaneity and authenticity, but be wary of distraction. When you align heart and mind, you become a beacon of inspiration for others.",
      4: "You are the builder of reality. The vibration of 4 speaks of stability, responsibility, and order. Your mission in this life is to create solid foundations—in projects, relationships, or social structures. You came to teach the value of discipline, patience, and well-done work. Although 4 is practical, it has a spiritual purpose: to show that the sacred also lives in the everyday. Your path is to transform effort into lasting achievement.",
      5: "The free and adventurous soul of number 5 came into the world to experience, change, and expand horizons. Your mission involves flexibility, innovation, and movement. You learn through diversity and teach others to break free from limiting beliefs. However, it’s essential to balance freedom with responsibility. Your energy is like wind—light, creative, and revolutionary. When channeled wisely, it becomes a transformative force.",
      6: "You are the guardian of love and care. The vibration of 6 is deeply connected to family, home, beauty, and service. Your mission is to bring emotional healing where there is pain, offering shelter with generosity. Your challenge is not to overload yourself trying to save everyone. When you learn to love without self-neglect, you become a true channel of healing. Your soul resonates with the gift of making the world more tender and harmonious.",
      7: "You are the seeker of truth—with a deep sense of introspection, mystery, and spirituality. Number 7 carries a mission of self-knowledge, analysis, and sacred connection. You may feel different or misunderstood, but that’s part of your calling. You are a bridge between the visible and invisible. Your soul yearns for meaning, not superficiality. When connected to intuition and inner silence, you find divine wisdom.",
      8: "You are the manifestor of balance between power and consciousness. Number 8 carries a mission of material achievement—but with ethics, responsibility, and a sense of justice. Your challenge is to use ambition as a tool for growth, not domination. With natural leadership, you are here to build empires—but you only truly prosper when you understand that real power comes from spirit, not ego. You are called to lead with purpose and integrity.",
      9: "You are the universal server—an old soul with a vocation for compassion, service, and unconditional love. Number 9 brings a mission to heal collective wounds through empathy, art, and example. Your heart is vast and feels others’ pain as your own. Your path is one of forgiveness, detachment, and generosity. When you learn to give without self-sacrifice, you become a source of light to everyone around you. Your soul reflects universal love.",
      11: "MASTER - You are the enlightened visionary, someone with an intense spiritual connection and sensitivity that transcends the ordinary. Your mission involves inspiring and awakening others, bringing light and hope where there is darkness. You feel responsible for channeling elevated ideas and turning intuition into concrete action. However, your challenge is to balance emotional intensity and avoid anxiety, learning to trust the divine flow and your inner wisdom.",
      22: "MASTER - You are the master builder with the ability to transform grand dreams into tangible reality. The vibration of 22 carries the strength of a practical and visionary leader capable of accomplishing great feats that benefit many. Your mission is to balance ambition with humility, translating spiritual ideas into solid, lasting structures. You have the potential to leave a legacy but must learn not to overburden yourself or get caught in external expectations.",
      33: "MASTER - You are the master teacher carrying an energy of unconditional love and service at its highest level. The mission of 33 is to heal, educate, and elevate collective consciousness through example and deep compassion. Your soul is a healing channel, called to inspire conscious sacrifice without losing your own light. Your challenge is to maintain emotional and spiritual balance, finding strength in self-love to radiate this light to the world."
    }
    },
    "soulNumber": {
      simple: {
        1: "Desire for leadership and independence.",
        2: "Search for harmony and partnerships.",
        3: "Emotional expression and creativity.",
        4: "Need for security and stability.",
        5: "Longing for freedom and change.",
        6: "Desire to care for others.",
        7: "Search for inner knowledge.",
        8: "Desire for success and achievement.",
        9: "Calling for compassion and service.",
        11: "MASTER - An intuitive, sensitive, and inspiring soul seeking to raise consciousness.",
        22: "MASTER - A practical and visionary soul focused on building lasting legacies.",
        33: "MASTER - A compassionate and loving soul dedicated to service and healing."
      },
      deep: {
        1: "Deep within, your soul longs for freedom and the expression of your individuality. You want to be recognized for your originality and ability to lead. There's a strong desire for autonomy and to do things your own way. When you follow that call, you find peace and purpose.",
        2: "Your soul seeks union, partnership, and emotional balance. There's an internal need to feel loved and understood. The desire to create true connections is strong, and you feel complete when there's emotional harmony. However, you must learn not to lose yourself in others—your worth isn't defined by approval.",
        3: "At your core, you yearn for expression, beauty, and joy. There’s a desire to live lightly and touch others through your words, art, or vibrant presence. Your soul wants to sing, laugh, and enchant. But for that to flourish, you must overcome the fear of judgment and trust your authenticity.",
        4: "Your soul seeks safety, structure, and a sense of order. There’s an internal drive for stability and the reassurance that everything has its place. Deep down, you want to build something lasting. But you also need to accept that not everything can be controlled—sometimes chaos brings growth.",
        5: "There is a fundamental restlessness in you. The soul longs for movement, change, and discovery. You need stimulation, adventure, and variety to feel alive. Routine dims your inner light. Still, you must develop inner roots so that freedom doesn’t become escape.",
        6: "Your soul desires to care, serve, and protect. There's an internal calling to offer love, stability, and healing to those around you. You find fulfillment in emotional exchanges and harmony in homes and relationships. But remember: learning to care for yourself first is part of your journey.",
        7: "Your soul desires retreat, silence, and contemplation. There is a longing to understand life’s mysteries, dive into the unseen, and seek spiritual connection. You find peace in solitude, reflection, and study. But you must also allow that wisdom to reach others.",
        8: "Your soul desires to achieve, conquer, and leave a mark on the world. You feel energized by goals, challenges, and efficient use of material resources. But your soul also craves true recognition—the kind that comes from integrity. Prosperity with purpose is your path to fulfillment.",
        9: "Your soul desires to serve, love, and transform. There’s a heightened sensitivity to others' pain and an urge to help, even when unseen. Universal love beats strongly in you. When you devote yourself to greater causes, you find peace. But take care not to forget yourself in the process.",
        11: "MASTER - Your soul is deeply connected to the spiritual realm, bringing sharp intuition and a mission to inspire others through light and hope. You feel called to transcend the ordinary, facing emotional challenges that strengthen your sensitivity and inner wisdom. It is essential to learn to trust your spiritual potential without getting lost in anxiety.",
        22: "MASTER - You carry a soul with the rare ability to transform lofty ideas into concrete realities. Your mission is to build solid structures, both internal and external, that benefit the collective. Balancing ambition with humility is the path to full realization, as is taking care not to overburden yourself with responsibilities that may drain your energy.",
        33: "MASTER - Your soul carries a vibration of unconditional love and deep service. You are here to heal and uplift the collective, taking on the role of a master who leads by example and compassion. The challenge lies in maintaining your emotional balance while offering your light to others, cultivating self-love to sustain this grand mission."  
      }
    }, 
    "personalityNumber": {
      simple: {
        1: "Appears as a leader, independent and strong-willed.",
        2: "Seen as diplomatic, friendly, and cooperative.",
        3: "Expressive, cheerful, and communicative personality.",
        4: "Serious, responsible, and trustworthy image.",
        5: "Perceived as free-spirited and adventurous.",
        6: "Comes across as caring, protective, and warm.",
        7: "Seen as mysterious, intellectual, and reserved.",
        8: "Projects authority, ambition, and confidence.",
        9: "Appears compassionate, wise, and humanitarian.",
        11: "MASTER - An image of inspiration and sensitivity, radiating intuition and idealism.",
        22: "MASTER - The presence of a reliable and visionary leader, conveying strength and stability.",
        33: "MASTER - An aura of a loving teacher and healer, showing dedication and altruism."
      },
      deep: {
        1: "You are perceived as a natural leader—strong, assertive, and confident. People tend to admire your independence and determination. There's a certain boldness in your presence that inspires respect. Your challenge is not to seem arrogant or overly competitive. When balanced, your image becomes one of authentic strength.",
        2: "You come across as gentle, empathetic, and cooperative. Others feel comfortable around you because you radiate peace and receptivity. Your personality is one of harmony and grace, often attracting those in need of a kind ear. You must ensure that your desire to please doesn’t make you invisible or passive.",
        3: "People perceive you as expressive, friendly, and magnetic. There's an artistic charm about you that draws attention naturally. Your words and presence tend to uplift others. Your challenge is to avoid superficiality—behind the joy must be substance. When integrated, your personality inspires hope and creativity.",
        4: "You appear structured, responsible, and reliable. Others often trust you with serious matters because of your methodical and grounded approach. You exude a sense of calm discipline. The challenge is to let go of rigidity and learn to relax control. Your personality becomes a pillar of strength when rooted in balance.",
        5: "Your aura is vibrant, lively, and unpredictable. You attract people with your spontaneity and boldness. Freedom is written all over your personality—others feel your resistance to monotony. The challenge is not to appear erratic or unreliable. When aligned, your presence brings excitement and new ideas.",
        6: "You emanate love, care, and a nurturing presence. People see you as someone they can turn to for emotional support and guidance. You may be drawn to healing or artistic roles. Your challenge is not to assume too much responsibility for others. When healthy, your presence brings comfort and beauty.",
        7: "You’re seen as enigmatic, introspective, and wise. There’s a mystique around you that invites curiosity. People sense your depth, even if they don’t fully understand you. The challenge is not to isolate yourself emotionally. When integrated, your presence becomes quietly powerful and deeply inspiring.",
        8: "You project ambition, control, and leadership. Others may perceive you as someone who’s goal-oriented and highly capable. There’s strength in your posture and clarity in your presence. The challenge is to not come across as intimidating or emotionally distant. When balanced, you command respect with grace.",
        9: "You radiate compassion, wisdom, and generosity. People see you as someone with a big heart and humanitarian outlook. You carry an aura of kindness that transcends superficial interaction. Your challenge is to protect your energy. When centered, your personality uplifts and elevates everyone around you.",
        11: "MASTER - You project a personality that draws attention with its vibrant and sensitive energy. Your presence inspires confidence, even if inside you feel the doubts and emotional intensity that this number brings. The challenge is to harmonize this duality and use your influence to motivate and illuminate others’ paths.",
        22: "MASTER - Your personality manifests as someone highly capable, pragmatic, and at the same time visionary. You are seen as a builder of trust, someone who brings concrete solutions and a future vision. It is important to balance this strong image with flexibility and self-care to avoid burnout.",
        33: "MASTER - You appear to the world as a warm, dedicated, and deeply altruistic person. Your personality is magnetic and welcoming, reflecting your desire to help and heal. The challenge is to maintain this authentic image without losing yourself in others’ expectations, always finding time to nurture your own essence."
      }
    },
    "personalYear": {
      simple: {
        1: "Year of new beginnings and initiatives.",
        2: "Time for cooperation and partnerships.",
        3: "Year of creativity and social life.",
        4: "Time for building and discipline.",
        5: "Year of change and freedom.",
        6: "Time for family and responsibilities.",
        7: "Year of introspection and learning.",
        8: "Time for material achievements.",
        9: "Year of closure and transformation."
      },
      deep: {
        1: "A cycle begins. This is the time to plant the seeds of your desires. Everything that starts this year tends to echo for the next 9 years. Focus on you, your identity, and your goals. Don’t wait for external validation—initiate, lead, and trust your instincts.",
        2: "Now is the time to collaborate. The energy is more delicate and relational. Partnerships, alliances, and emotional dynamics come to the forefront. Listen more, speak less. Be diplomatic and patient. Growth will happen quietly but significantly, like roots beneath the soil.",
        3: "Time to express yourself. Creativity, joy, and communication are highlighted. It’s a great year for art, socializing, and exploring new forms of fun and expression. Be careful not to waste energy or spread yourself too thin. Let your inner child play—but stay present.",
        4: "Now it’s time to get serious. You’ll be called to organize, plan, and structure your life. It’s a great time to build strong foundations—personally, professionally, and emotionally. You may feel pressure, but effort invested this year will bear fruit for years to come.",
        5: "Change knocks on the door. This is a year of movement, travel, and transformation. You may feel restless or drawn to novelty. Take care not to act impulsively, but don’t resist the winds of change either. Freedom becomes your guide—use it with awareness.",
        6: "Responsibility returns. This year may highlight family, home, and emotional connections. You’re being called to serve, love, and care. Don’t forget your own needs. It’s also a great time to bring harmony to relationships and improve your physical environment.",
        7: "The soul calls for silence. It’s a time for reflection, study, and inner search. You may feel more withdrawn or contemplative. Trust the process. Seek meaning, spirituality, and emotional healing. Isolation isn’t loneliness when it brings you closer to truth.",
        8: "Now is the time to act with ambition. This year brings themes of leadership, career, and financial goals. You may feel more empowered or challenged in material matters. Step up, take responsibility, and be strategic. Prosperity comes through effort and vision.",
        9: "Closure and release. This is the last year of a 9-year cycle. You’re being called to let go—of people, situations, and beliefs that no longer serve. Practice forgiveness and prepare for renewal. What ends now makes room for something greater next cycle."
      }
    },
    "karmicLessons": {
      simple: {
        1: "Lesson in developing independence and initiative.",
        2: "Learning to collaborate and trust others.",
        3: "Learning to express emotions and creativity.",
        4: "Lesson in building discipline and organization.",
        5: "Need to develop adaptability and responsible freedom.",
        6: "Learning to care for others without controlling them.",
        7: "Developing spiritual depth and trust in intuition.",
        8: "Lesson in managing power, ambition, and finances.",
        9: "Learning forgiveness and selfless service."
      },
      deep: {
        1: "You are being called to develop independence, initiative, and self-confidence. In past lives, you may have relied too much on others or lacked autonomy. In this life, you must learn to lead your own path, assert your will, and act without fear of disapproval. You are here to find your inner strength and become your own authority.",
        2: "Your soul is learning cooperation, patience, and emotional intelligence. You may have avoided partnerships or acted selfishly in other lifetimes. Now, you are being called to listen, share, and create harmony. This lesson teaches that gentleness and collaboration are signs of strength, not weakness.",
        3: "You are learning to express your emotions, creativity, and truth. In previous lives, you may have silenced your voice or been overly rational. This life calls you to open your heart, communicate with authenticity, and find joy in self-expression. Releasing fear of judgment is key to fulfilling your soul’s mission.",
        4: "This lesson is about building foundations, respecting limits, and creating order. In the past, you may have been scattered or avoided responsibility. Now, life demands that you be practical, committed, and disciplined. This energy invites you to structure your dreams and turn ideas into real accomplishments.",
        5: "You are learning the true meaning of freedom. Perhaps in other lives you were rigid—or irresponsible. Now, the universe invites you to explore, change, and innovate, but with balance. This lesson is about experiencing variety without losing direction. Freedom comes from within, not from escape.",
        6: "Your soul is learning to love without dependency and to serve without martyrdom. In other lifetimes, you may have dominated others in the name of love or neglected emotional duties. This life teaches you to care, heal, and create harmonious environments—but without losing your sense of self.",
        7: "You are being called to explore inner life, intuition, and deeper meaning. You may have avoided spiritual truths or lived too superficially in other incarnations. Now, the challenge is to trust the invisible, cultivate silence, and connect with divine wisdom. It’s time to embrace mystery, not fear it.",
        8: "This lesson involves power, authority, and material balance. In past lives, you may have abused power—or feared it. In this life, you’re being called to achieve, lead, and handle money with integrity. Prosperity is part of your path, but only when aligned with purpose and ethics.",
        9: "You are learning to release attachments, forgive, and serve selflessly. You may have clung to control or materialism in other lives. Now, you are called to be a channel of compassion and wisdom. This lesson is about healing through giving, but also knowing when to let go."
      }
    },
    "karmicNumbers": {
      simple: {
        13: "Karmic test in laziness, avoidance of responsibility, or misuse of discipline.",
        14: "Karmic challenge involving freedom, excess, or manipulation.",
        16: "Challenge related to ego, pride, and emotional collapse.",
        19: "Karma involving control, selfishness, and abuse of authority."
      },
      deep: {
        13: "This karmic number signals a lesson around structure, effort, and humility. In past lives, you may have misused authority, avoided work, or been overly rigid. In this life, you’re being asked to build slowly, respect processes, and avoid shortcuts. You’ll only succeed with consistency and dedication.",
        14: "You carry karmic energy linked to misuse of freedom, sensual excess, or emotional instability. In other lives, you may have manipulated or escaped responsibility. Now, you’re invited to develop discipline, emotional maturity, and responsible use of your energy. True freedom comes through self-awareness and balance.",
        16: "This number brings deep lessons through ego deconstruction. You may face personal losses or identity crises that lead to awakening. In past lives, you may have acted arrogantly or betrayed trust. Now, you’re being called to spiritual humility, transformation, and surrender. Rebirth often follows apparent collapse.",
        19: "This karmic number speaks of lessons around individuality and power. You may have misused authority, dominated others, or denied your own light. In this life, you’re being called to lead with humility and compassion. Self-confidence must be rebuilt without pride. You're here to shine, but not to control."
      }
    }
  }
};

export { explanations };

const tipoPorId = {
  lifeNumber: {
    pt: "Número de Vida",
    en: "lifeNumber"
  },
  soulNumber: {
    pt: "Número da Alma",
    en: "soulNumber"
  },
  personalityNumber: {
    pt: "Número da Personalidade",
    en: "personalityNumber"
  },
  personalYear: {
    pt: "Ano Pessoal",
    en: "personalYear"
  },
  karmicLessons: {
    pt: "Lições Cármicas",
    en: "karmicLessons"
  },
  karmicNumber: {
    pt: "Números Kármicos",
    en: "karmicNumbers"
  }
};

export function getAllDetailedExplanations({ name, birthDate,language}) {
  const numeroVida = calcularNumeroDeVida(birthDate);
  const numeroAlma = calcularNumeroDaAlma(name);
  const numeroPersonalidade = calcularNumeroDaPersonalidade(name);
  const anoPessoal = calcularAnoPessoal(birthDate);
  const licoesCarmicas = calcularLicoesCarmicas(name);
  const { karmico } = calcularNumerosKarmicos(name);

  const explanationsLang = explanations[language];

const buildExplicacao = (id, numero) => {
  const tipo = tipoPorId[id]?.[language] || tipoPorId[id]?.pt;
  return {
    simple: explanationsLang?.[tipo]?.simple?.[numero] ?? `No simple explanation for ${id} ${numero}`,
    deep: explanationsLang?.[tipo]?.deep?.[numero] ?? `No deep explanation for ${id} ${numero}`
  };
};


  return [
    {
      id: "lifeNumber",
      ...buildExplicacao("lifeNumber", numeroVida)
    },
    {
      id: "soulNumber",
      ...buildExplicacao("soulNumber", numeroAlma)
    },
    {
      id: "personalityNumber",
      ...buildExplicacao("personalityNumber", numeroPersonalidade)
    },
    {
      id: "personalYear",
      ...buildExplicacao("personalYear", anoPessoal)
    },
    {
      id: "karmicLessons",
      simple: licoesCarmicas.length
        ? licoesCarmicas.map(n =>
            explanationsLang?.[tipoPorId.karmicLessons[language]]?.simple?.[n] ??
            `No simple explanation for lesson ${n}`
          ).join("\n\n")
        : language === 'pt' ? "Não tens Lições Cármicas nesta encarnação." : "You don't have karmic lessons in this incarnation.",
      deep: licoesCarmicas.length
        ? licoesCarmicas.map(n =>
            explanationsLang?.[tipoPorId.karmicLessons[language]]?.deep?.[n] ??
            `No deep explanation for lesson ${n}`
          ).join("\n\n")
        : language === 'pt' ? "Não tens Lições Cármicas nesta encarnação." : "You don't have karmic lessons in this incarnation."
    },
    {
      id: "karmicNumber",
      simple: karmico
        ? `${language === 'pt' ? "Tens um número kármico importante" : "You have a significant karmic number"}: ${karmico}\n\n${
            explanationsLang?.[tipoPorId.karmicNumber[language]]?.simple?.[karmico] ?? "No simple explanation."
          }`
        : language === 'pt' ? "Não tens números kármicos no teu nome." : "You don't have karmic numbers in your name.",
      deep: karmico
        ? `${language === 'pt' ? "Tens um número kármico importante" : "You have a significant karmic number"}: ${karmico}\n\n${
            explanationsLang?.[tipoPorId.karmicNumber[language]]?.deep?.[karmico] ?? "No deep explanation."
          }`
        : language === 'pt' ? "Não tens números kármicos no teu nome." : "You don't have karmic numbers in your name."
    }
  ];

}