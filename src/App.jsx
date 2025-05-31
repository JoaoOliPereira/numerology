import React, { useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import {
  calcularNumeroDeVida,
  calcularNumeroDaPersonalidade,
  calcularNumeroDaAlma,
  calcularAnoPessoal,
  calcularLicoesCarmicas,
  calcularNumerosKarmicos,
} from "./utils/numerologyUtils";
import { getAllDetailedExplanations } from "./utils/explanations";
import './App.css';

export default function App() {
  const [dataNascimento, setDataNascimento] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [modalInfo, setModalInfo] = useState({ open: false, title: "", content: "" });
  const [email, setEmail] = useState("");

  const mostrarExplicacao = (titulo) => {
    if (!dataNascimento && !nomeCompleto) return;

    const explicacoes = getAllDetailedExplanations({
      name: nomeCompleto,
      birthDate: dataNascimento,
    });

    const selecionado = explicacoes.find((e) => e.title === titulo);
    if (selecionado) {
      setModalInfo({
        open: true,
        title: selecionado.title,
        content: selecionado.explanation,
      });
    }
  };

  const renderValor = (valor) => (
    <div
      onClick={() => mostrarExplicacao(valor.title)}
      style={{
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        cursor: "pointer",
        padding: 8,
        borderRadius: 6,
        background: "#ffffff",
      }}
    >
      {valor.value}
    </div>
  );

  return (
    <div className="background">
      <header className="header">
        <div>
          <h1 className="headerText">🔢Numerologia</h1>
          <h2 className="headerText">🔮 Descubra os mistérios ocultos nos números do seu nome e nascimento 🔮</h2>
        </div>
      </header>
        <div
          style={{
            maxWidth: "960px",
            margin: "2rem auto",
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          }}
        >
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

          {/* Cada Card passa valor.title para o click */}
          <Card title="Número de Vida" description="Baseado na sua data de nascimento">
            {dataNascimento
              ? renderValor({ title: "Número de Vida", value: calcularNumeroDeVida(dataNascimento) })
              : <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha a data de nascimento</p>}
          </Card>

          <Card title="Número da Personalidade" description="Características externas (consoantes)">
            {nomeCompleto
              ? renderValor({ title: "Número da Personalidade", value: calcularNumeroDaPersonalidade(nomeCompleto) })
              : <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha o nome completo</p>}
          </Card>

          <Card title="Número da Alma" description="Motivações internas (vogais)">
            {nomeCompleto
              ? renderValor({ title: "Número da Alma", value: calcularNumeroDaAlma(nomeCompleto) })
              : <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha o nome completo</p>}
          </Card>

          <Card title="Ano Pessoal" description="Ciclo pessoal atual">
            {dataNascimento
              ? renderValor({ title: "Ano Pessoal", value: calcularAnoPessoal(dataNascimento) })
              : <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha a data de nascimento</p>}
          </Card>

          <Card title="Lições Cármicas" description="Lições a aprender nesta vida">
            {nomeCompleto
              ? renderValor({
                  title: "Lições Cármicas",
                  value: calcularLicoesCarmicas(nomeCompleto).join(", ") || "Nenhuma",
                })
              : <p style={{ opacity: 0.7, textAlign: "center" }}>Preencha o nome completo</p>}
          </Card>

          <Card title="Número Kármico" description="Desafios espirituais (caso existam)">
            {nomeCompleto
              ? (() => {
                  const { karmico } = calcularNumerosKarmicos(nomeCompleto);
                  return renderValor({
                    title: "Número Kármico",
                    value: karmico || "Nenhum",
                  });
                })()
              : <p style={{ opacity: 1, textAlign: "center" }}>Preencha o nome completo</p>}
          </Card>
          
          <Card title="Email" description="Coloque o seu email para receber o relatório completo.">
            <label htmlFor="email" style={{ display: "block", marginTop: 12, marginBottom: 8 }}>
              Email:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu nome completo"
              style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
              />
            <button type="submit">Enviar Informações</button>
          </Card>
          
          <Modal
            open={modalInfo.open}
            onClose={() => setModalInfo({ ...modalInfo, open: false })}
            title={modalInfo.title}
          >
            <p>{modalInfo.content}</p>
          </Modal>
        </div>
        <footer className="footer">
          <p className="footerText">© 2025 Numerologia. Todos os direitos reservados. Este site é apenas para fins informativos e de entretenimento.</p>
        </footer>
    </div>
  );
}
