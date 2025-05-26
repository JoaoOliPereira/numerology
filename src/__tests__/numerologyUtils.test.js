import { calcularLicoesCarmicas } from "../utils/numerologyUtils";
import React, { useState } from "react";

describe("calcularLicoesCarmicas", () => {
  test("retorna todos os números quando nome vazio", () => {
    expect(calcularLicoesCarmicas("")).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  test("retorna lições cármicas corretas para 'Carlos Silva'", () => {
    expect(calcularLicoesCarmicas("Carlos Silva")).toEqual([2, 5, 7, 8]);
  });

  test("retorna array vazio se nome cobre todos os números", () => {
    expect(calcularLicoesCarmicas("ABCDEFGHI")).toEqual([]);
  });
});

import { calcularNumerosKarmicos } from "../utils/numerologyUtils";

describe("calcularNumerosKarmicos", () => {
  test("detecta número kármico 13", () => {
    const nome = "ADGJ"; // Soma = 13
    const resultado = calcularNumerosKarmicos(nome);
    expect(resultado.karmico).toBe(13);
    expect(resultado.numeroFinal).toBe(4); // 1 + 3 = 4
  });

test("detecta número kármico 14", () => {
    const nome = "AENC"; // 1+5+5+3 = 14 (A+E+N+C) = 1+5+5+3
    const resultado = calcularNumerosKarmicos(nome);
    expect(resultado.karmico).toBe(14);
    expect(resultado.numeroFinal).toBe(5);
  });

  test("detecta número kármico 16", () => {
    const nome = "AFGK"; // 1+6+7+2 = 16 (A+F+G+K)
    const resultado = calcularNumerosKarmicos(nome);
    expect(resultado.karmico).toBe(16);
    expect(resultado.numeroFinal).toBe(7);
  });

  test("detecta número kármico 19", () => {
    const nome = "AIHS"; // 1+9+8+1 = 19 (A+I+H+S)
    const resultado = calcularNumerosKarmicos(nome);
    expect(resultado.karmico).toBe(19);
    expect(resultado.numeroFinal).toBe(1);
  });

  test("retorna null quando não é número kármico", () => {
    const resultado = calcularNumerosKarmicos("Ana");
    expect(resultado.karmico).toBe(null);
  });

  test("retorna número final reduzido", () => {
    const resultado = calcularNumerosKarmicos("Carlos Silva");
    expect(typeof resultado.numeroFinal).toBe("number");
  });
});
