// tabela pitagórica
const tabelaNumeros = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

function reduzir(num) {
  if (num < 10) return num;
  return reduzir(
    num
      .toString()
      .split("")
      .reduce((acc, val) => acc + Number(val), 0)
  );
}

// Calcula número de vida (data nascimento)
export function calcularNumeroDeVida(data) {
  if (!data) return null;
  const [ano, mes, dia] = data.split("-").map(Number);
  if (!ano || !mes || !dia) return null;

  const soma =
    ano
      .toString()
      .split("")
      .reduce((acc, val) => acc + Number(val), 0) +
    mes
      .toString()
      .split("")
      .reduce((acc, val) => acc + Number(val), 0) +
    dia
      .toString()
      .split("")
      .reduce((acc, val) => acc + Number(val), 0);

  return reduzir(soma);
}

// Função auxiliar para converter nome para números
function nomeParaNumeros(nome) {
  return nome
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map((letra) => tabelaNumeros[letra] || 0);
}

// Número da Personalidade: soma das consoantes reduzida
export function calcularNumeroDaPersonalidade(nome) {
  if (!nome) return null;
  const consoantes = nome
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .filter((letra) => !"AEIOU".includes(letra));

  const soma = consoantes.reduce((acc, letra) => acc + tabelaNumeros[letra], 0);

  return reduzir(soma);
}

// Número da Alma: soma das vogais reduzida
export function calcularNumeroDaAlma(nome) {
  if (!nome) return null;
  const vogais = nome
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .filter((letra) => "AEIOU".includes(letra));

  const soma = vogais.reduce((acc, letra) => acc + tabelaNumeros[letra], 0);

  return reduzir(soma);
}

// Ano pessoal básico: soma dia + mês + ano atual, reduzido
export function calcularAnoPessoal(data) {
  if (!data) return null;
  const [anoNasc, mesNasc, diaNasc] = data.split("-").map(Number);
  if (!anoNasc || !mesNasc || !diaNasc) return null;

  const anoAtual = new Date().getFullYear();

  const soma =
    diaNasc
      .toString()
      .split("")
      .reduce((acc, val) => acc + Number(val), 0) +
    mesNasc
      .toString()
      .split("")
      .reduce((acc, val) => acc + Number(val), 0) +
    anoAtual
      .toString()
      .split("")
      .reduce((acc, val) => acc + Number(val), 0);

  return reduzir(soma);
}

// Lições Cármicas: números de 1 a 9 que não aparecem no nome
export function calcularLicoesCarmicas(nome) {
  const numeros = nomeParaNumeros(nome);
  const presentes = new Set(numeros);
  const todos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return todos.filter((n) => !presentes.has(n));
}

// Números kármicos reconhecidos
const numerosKarmicos = [13, 14, 16, 19];

// Soma os números de um nome e verifica se algum desses aparece
export function calcularNumerosKarmicos(nome) {
  const nomeLimpo = nome.toUpperCase().replace(/[^A-Z]/g, "");

  const soma = nomeLimpo.split("").reduce((acc, letra) => {
    const valor = tabelaNumeros[letra] || 0;
    return acc + valor;
  }, 0);

  // Salva valor antes de reduzir
  const numeroAntesDeReduzir = soma;

  // Reduz o número até obter 1–9 (exceto 11/22/33 se quiser manter mestres)
  const reduzir = (n) => {
    while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
      n = n
        .toString()
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return n;
  };

  const numeroFinal = reduzir(soma);

  // Se a soma original for um número kármico, devolve essa informação
  if (numerosKarmicos.includes(numeroAntesDeReduzir)) {
    return {
      numeroFinal,
      karmico: numeroAntesDeReduzir,
    };
  }

  return {
    numeroFinal,
    karmico: null,
  };
}