import React, { useState } from "react";
import Card from "./components/Card";
import {
  calcularNumeroDeVida,
  calcularNumeroDaPersonalidade,
  calcularNumeroDaAlma,
  calcularAnoPessoal,
  calcularLicoesCarmicas,
  calcularNumerosKarmicos,
} from "./utils/numerologyUtils";

export default function App() {
  const [dataNascimento, setDataNascimento] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");

  return (
    <div
      style={{
        maxWidth: "960px",
        margin: "2rem auto",
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      }}
    >
      {/* Inputs Gerais */}
      <Card title="Informações Pessoais" description="Digite seus dados para calcular os números">
        <label htmlFor="dataNascimento" style={{ display: "block", marginBottom: 8 }}>
          Data de Nascimento:
        </label>
        <input
          type="date"
          id="dataNascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />

        <label htmlFor="nomeCompleto" style={{ display: "block", marginTop: 12, marginBottom: 8 }}>
          Nome Completo:
        </label>
        <input
          type="text"
          id="nomeCompleto"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          placeholder="Seu nome completo"
          style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
      </Card>

      {/* Cartões com cálculo e resultado */}
      <Card title="Número de Vida" description="Número baseado na sua data de nascimento">
        {dataNascimento ? (
          <div style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}>
            {calcularNumeroDeVida(dataNascimento)}
          </div>
        ) : (
          <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha a data de nascimento</p>
        )}
      </Card>

      <Card
        title="Número da Personalidade"
        description="Características externas baseadas nas consoantes do seu nome"
      >
        {nomeCompleto ? (
          <div style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}>
            {calcularNumeroDaPersonalidade(nomeCompleto)}
          </div>
        ) : (
          <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha o nome completo</p>
        )}
      </Card>

      <Card
        title="Número da Alma"
        description="Motivações internas baseadas nas vogais do seu nome"
      >
        {nomeCompleto ? (
          <div style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}>
            {calcularNumeroDaAlma(nomeCompleto)}
          </div>
        ) : (
          <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha o nome completo</p>
        )}
      </Card>

      <Card
        title="Ano Pessoal"
        description="Ano pessoal básico calculado com sua data de nascimento e ano atual"
      >
        {dataNascimento ? (
          <div style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}>
            {calcularAnoPessoal(dataNascimento)}
          </div>
        ) : (
          <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha a data de nascimento</p>
        )}
      </Card>

      <Card
        title="Lições Cármicas"
        description="Números que indicam lições a serem aprendidas na vida"
      >
        {nomeCompleto ? (
          <div style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
            {calcularLicoesCarmicas(nomeCompleto).join(", ") || "Nenhuma"}
          </div>
        ) : (
          <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha o nome completo</p>
        )}
      </Card>

      <Card
        title="Números Kármicos"
        description="Números que indicam dívidas ou desafios cármicos"
      >
        {nomeCompleto ? (
          <div style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
            {calcularNumerosKarmicos(nomeCompleto).join(", ") || "Nenhum"}
          </div>
        ) : (
          <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha o nome completo</p>
        )}
      </Card>
    </div>
  );
}