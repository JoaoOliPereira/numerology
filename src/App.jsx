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
  gerarNumeroDoDia,dicasNumerologia
} from "./utils/numerologyUtils";
import { getAllDetailedExplanations } from "./utils/explanations";
import './App.css';
import emailjs from 'emailjs-com';

export default function App() {
  const [dataNascimento, setDataNascimento] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [modalInfo, setModalInfo] = useState({ open: false, title: "", content: "" });
  const [email, setEmail] = useState("");
  const [modoDetalhado, setModoDetalhado] = useState(false);
  
  const alternarModoExplicacao = () => {
    const novoModo = !modoDetalhado;
    setModoDetalhado(novoModo);

    // Atualiza o conteúdo do modal com o novo modo
    setModalInfo((prev) => ({
      ...prev,
      content: novoModo ? prev.deep : prev.simple,
    }));
  };

  const mostrarExplicacao = (titulo, valor) => {
    if (!dataNascimento && !nomeCompleto) return;

    const explicacoes = getAllDetailedExplanations({
      name: nomeCompleto,
      birthDate: dataNascimento,
    });

    const selecionado = explicacoes.find((e) => e.title === titulo);
    if (selecionado) {
      setModalInfo({
        open: true,
        title: `${selecionado.title} - ${valor}`,
        content: modoDetalhado ? selecionado.deep : selecionado.simple,
        simple: selecionado.simple,
        deep: selecionado.deep
      });
    }
  };

  const renderValor = (valor) => (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
      cursor: "default",
      padding: 8,
      borderRadius: 6,
      background: "#ffffff"
    }}>
      <span>{valor.value}</span>
      <span
        onClick={() => mostrarExplicacao(valor.title, valor.value)}
        style={{
          cursor: "pointer",
          fontSize: 18,
          color: "#6c63ff", // tom de roxo
          border: "1px solid #6c63ff",
          borderRadius: "50%",
          width: 22,
          height: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          userSelect: "none"
        }}
        title="Ver explicação"
      >
        i
      </span>
    </div>
  );

  const enviarEmail = async () => {
    if (!email) {
      alert("Por favor, insira seu email.");
      return;
    }
    if (!nomeCompleto || !dataNascimento) {
      alert("Por favor, preencha seu nome completo e data de nascimento.");
      return;
    }

    // Pegando todas as explicações detalhadas
    const explicacoes = getAllDetailedExplanations({
      name: nomeCompleto,
      birthDate: dataNascimento,
    });

    // Construindo a mensagem concatenando todos os conteúdos detalhados
    const textoExplicacoes = explicacoes
      .map((exp) => `Título: ${exp.title}\nExplicação: ${exp.deep}\n`)
      .join("\n--------------------\n");

    const emailData = {
      to: email,
      subject: "Numerologia",
      message: `Nome Completo: ${nomeCompleto}\nData de Nascimento: ${dataNascimento}\n\nExplicações:\n${textoExplicacoes}`,
    };

    try {
      const response = await fetch("https://seu-backend.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert("Email enviado com sucesso!");
        setEmail("");
      } else {
        const error = await response.json();
        alert("Erro ao enviar email: " + (error.message || "Erro desconhecido"));
      }
    } catch (error) {
      alert("Erro na conexão com o servidor.");
    }
  };

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
            maxWidth: "100%",
            margin: "2rem auto",
            padding: "0 1rem",
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            boxSizing: "border-box"
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

            {nomeCompleto && dataNascimento && (
            <Card title="🔮 Dica do Dia" description="Orientação numerológica para hoje">
              {(() => {
                const numeroVida = calcularNumeroDeVida(dataNascimento);
                const numeroDia = gerarNumeroDoDia(numeroVida);
                const dica = dicasNumerologia[numeroDia];

                return (
                  <div style={{ textAlign: "center", fontStyle: "italic", padding: "1rem" }}>
                    <p style={{ fontSize: 20,color:"white" }}>Número do Dia: <strong>{numeroDia}</strong></p>
                    <p style={{ marginTop: 8,color:"white" }}>{dica}</p>
                  </div>
                );
              })()}
            </Card>
          )}

          {/** 
          <Card title="Email" description="Coloque o seu email para receber o relatório completo.">
            <label htmlFor="email" style={{ display: "block", marginTop: 12, marginBottom: 8 }}>
              Email:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Coloque aqui o seu Email:"
              style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
              />
            <button type="submit" onClick={enviarEmail}>Enviar Informações</button>
          </Card>
          */}

          <Modal
            open={modalInfo.open}
            title={modalInfo.title}
            content={modalInfo.content}
            onClose={() => setModalInfo({ open: false, title: "", content: "" })}
            extraButton={{
              label: modoDetalhado ? "Ver Explicação Simples" : "Ver Explicação Detalhada",
              onClick: alternarModoExplicacao
            }}
          />

        </div>
        <footer className="footer">
          <p className="footerText">© 2025 Numerologia. Todos os direitos reservados. Este site é apenas para fins informativos e de entretenimento.</p>
        </footer>
    </div>
  );
}
