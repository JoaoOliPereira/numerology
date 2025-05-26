import React, { useState } from "react";
import Card from "./Card";

export default function NumeroDeVida() {
  const [dataNascimento, setDataNascimento] = useState("");
  const [numeroVida, setNumeroVida] = useState(null);

  function calcularNumeroDeVida(data) {
    if (!data) return null;
    // data no formato YYYY-MM-DD
    const [ano, mes, dia] = data.split("-").map(Number);
    if (!ano || !mes || !dia) return null;

    // soma todos os dígitos do ano, mes, dia
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

    // reduz a um dígito
    function reduzir(num) {
      if (num < 10) return num;
      return reduzir(
        num
          .toString()
          .split("")
          .reduce((acc, val) => acc + Number(val), 0)
      );
    }

    return reduzir(soma);
  }

  function handleCalcular() {
    const resultado = calcularNumeroDeVida(dataNascimento);
    setNumeroVida(resultado);
  }

  return (
    <Card
      title="Número de Vida"
      description="Calcule o seu Número de Vida a partir da data de nascimento"
    >
      <input
        type="date"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
      />
      <button onClick={handleCalcular} style={{ marginTop: "1rem" }}>
        Calcular
      </button>
      {numeroVida !== null && (
        <div style={{ marginTop: "1rem" }}>
          O Seu Número de Vida é: <strong>{numeroVida}</strong>
        </div>
      )}
    </Card>
  );
}