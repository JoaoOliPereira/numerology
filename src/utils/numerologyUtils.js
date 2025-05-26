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

// Lições Cármicas: números 13, 14, 16, 19 que não aparecem no nome = lições
export function calcularLicoesCarmicas(nome) {
  if (!nome) return [];
  const numeros = nomeParaNumeros(nome);
  const presentes = new Set(numeros);
  const karmicos = [13, 14, 16, 19];
  return karmicos.filter((num) => !presentes.has(num));
}

// Números Kármicos: números 13, 14, 16, 19 que aparecem no nome
export function calcularNumerosKarmicos(nome) {
  if (!nome) return [];
  const numeros = nomeParaNumeros(nome);
  const presentes = new Set(numeros);
  const karmicos = [13, 14, 16, 19];
  return karmicos.filter((num) => presentes.has(num));
}