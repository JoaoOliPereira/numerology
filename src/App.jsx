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
import { translations } from "./utils/translations";
import ptFlag from './ptflag.png';
import enFlag from './enflag.png';

export default function App() {
  const [dataNascimento, setDataNascimento] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [modalInfo, setModalInfo] = useState({ open: false, title: "", content: "" });
  const [modoDetalhado, setModoDetalhado] = useState(false);
  
  const [idioma, changeLanguage] = useState('pt');
  const translation = (key) => translations[idioma][key] || key;

  const alternarModoExplicacao = () => {
    const novoModo = !modoDetalhado;
    setModoDetalhado(novoModo);

    // Atualiza o conteúdo do modal com o novo modo
    setModalInfo((prev) => ({
      ...prev,
      content: novoModo ? prev.deep : prev.simple,
    }));
  };

 const mostrarExplicacao = (id, valor) => {
  if (!dataNascimento && !nomeCompleto) return;
  const explicacoes = getAllDetailedExplanations({
    name: nomeCompleto,
    birthDate: dataNascimento,
    language: idioma
  });

  const selecionado = explicacoes.find((e) => e.id === id);
  if (selecionado) {
    setModalInfo({
      open: true,
      title: `${translation(id)} - ${valor}`,
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
        onClick={() => mostrarExplicacao(valor.id, valor.value)}
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

  return (
    <div className="background">
      <header className="header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="headerText">{translation('title')}</h1>
            <h2 className="headerText">{translation('subtitle')}</h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <img
              src={ptFlag}
              alt="Português"
              onClick={() => changeLanguage('pt')}
              style={{
                width: 28,
                height: 20,
                cursor: 'pointer',
                border: idioma === 'pt' ? '2px solid #fff' : '1px solid #ccc',
                borderRadius: 6
              }}
            />
            <img
              src={enFlag}
              alt="English"
              onClick={() => changeLanguage('en')}
              style={{
                width: 28,
                height: 20,
                cursor: 'pointer',
                border: idioma === 'en' ? '2px solid #fff' : '1px solid #ccc',
                borderRadius: 4
              }}
            />
          </div>
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
          <Card title={translation("personalInfo")} description={translation("enterData")}>
            <label htmlFor="dataNascimento" style={{ display: "block", marginBottom: 8 }}>
              {translation("birthdate")}
            </label>
            <input
              type="date"
              id="dataNascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            />

            <label htmlFor={translation("fullName")} style={{ display: "block", marginTop: 12, marginBottom: 8 }}>
              {translation("fullName")}
            </label>
            <input
              type="text"
              id="nomeCompleto"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              placeholder={translation("fullNameDesc")}
              style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            />
          </Card>

          {/* Cada Card passa valor.title para o click */}
          <Card title={translation("lifeNumber")} description={translation("lifeNumberDesc")}>
            {dataNascimento
              ? renderValor({id: "lifeNumber", title: translation("lifeNumber"), value: calcularNumeroDeVida(dataNascimento) })
              : <p style={{ opacity: 0.7, textAlign: "center" }}>{translation("fillBirthdate")}</p>}
          </Card>

          <Card title={translation("personalityNumber")} description={translation("personalityNumberDesc")}>
            {nomeCompleto
              ? renderValor({ id: "personalityNumber",title: translation("personalityNumber"), value: calcularNumeroDaPersonalidade(nomeCompleto) })
              : <p style={{ opacity: 0.7, textAlign: "center" }}>{translation("fillName")}</p>}
          </Card>

          <Card title={translation("soulNumber")} description={translation("soulNumberDesc")}>
            {nomeCompleto
              ? renderValor({ id: "soulNumber", title: translation("soulNumber"), value: calcularNumeroDaAlma(nomeCompleto) })
              : <p style={{ opacity: 0.7, textAlign: "center" }}>{translation("fillName")}</p>}
          </Card>

          <Card title={translation("personalYear")} description={translation("personalYearDesc")}>
            {dataNascimento
              ? renderValor({id:"personalYear", title: "Ano Pessoal", value: calcularAnoPessoal(dataNascimento) })
              : <p style={{ opacity: 0.7, textAlign: "center" }}>{translation("fillBirthdate")}</p>}
          </Card>

          <Card title={translation("karmicLessons")} description={translation("karmicLessonsDesc")}>
            {nomeCompleto
              ? renderValor({
                  id: "karmicLessons",
                  title: translation("karmicLessons"),
                  value: calcularLicoesCarmicas(nomeCompleto).join(", ") || "Nenhuma",
                })
              : <p style={{ opacity: 0.7, textAlign: "center" }}>{translation("fillName")}</p>}
          </Card>

          <Card title={translation("karmicNumber")} description={translation("karmicNumberDesc")}>
            {nomeCompleto
              ? (() => {
                  const { karmico } = calcularNumerosKarmicos(nomeCompleto);
                  return renderValor({
                    id: "karmicNumber",
                    title: translation("karmicNumber"),
                    value: karmico || translation("noKarmic"),
                  });
                })()
              : <p style={{ opacity: 1, textAlign: "center" }}>{translation("fillName")}</p>}
          </Card>

            {nomeCompleto && dataNascimento && (
            <Card title={translation("dailyTip")} description={translation("dayNumber")}>
              {(() => {
                const numeroVida = calcularNumeroDeVida(dataNascimento);
                const numeroDia = gerarNumeroDoDia(numeroVida);
                const dica = dicasNumerologia[idioma]?.[numeroDia] ?? "";

                return (
                  <div style={{ textAlign: "center", fontStyle: "italic", padding: "1rem" }}>
                    <p style={{ fontSize: 20,color:"white" }}>{translation("dayNumber")}: <strong>{numeroDia}</strong></p>
                    <p style={{ marginTop: 8,color:"white" }}>{dica}</p>
                  </div>
                );
              })()}
            </Card>
          )}

          <Modal
            open={modalInfo.open}
            title={modalInfo.title}
            content={modalInfo.content}
            onClose={() => setModalInfo({ open: false, title: "", content: "" })}
            extraButton={{
              label: modoDetalhado ? translation("seeSimple") : translation("seeDetailed"),
              onClick: alternarModoExplicacao
            }}
          />

        </div>
        <footer className="footer">
          <p className="footerText">{translation("footer")}</p>
        </footer>
    </div>
  );
}
