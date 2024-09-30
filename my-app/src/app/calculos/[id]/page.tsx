import React from 'react';

const calculos = [
  {
    id: 1,
    nome: "Calculo atracao gravitacional",
    description: "A atracao gravitacional entre dois corpos e calculada pela Lei da Gravitation Universal de Newton, expressa pela formula F = G * (m1 * m2) / r^2, onde F e a forca gravitacional, G e a constante gravitacional (6.674 x 10^-11 N(m/kg)^2), m1 e m2 sao as massas dos corpos, e r e a distancia entre seus centros. Essa formula demonstra que a forca gravitacional aumenta com a massa dos corpos e diminui com o quadrado da distancia entre eles.",
    formula: "F = G * (m1 * m2) / r^2"
  },
  {
    id: 2,
    nome: "Calculo distancia entre astros",
    description: "A distancia entre astros pode ser calculada utilizando a Lei da Gravitação Universal e as leis do movimento planetário. Uma forma comum de calcular a distancia entre dois corpos celestes e utilizando a formula da lei de Kepler, que relaciona o periodo orbital de um corpo (T) e a distancia media (r) ao corpo central. A formula e expressa como r = (G * M * T^2 / (4 * pi^2))^(1/3), onde G e a constante gravitacional, M e a massa do corpo central, T e o periodo orbital do corpo em questao, e pi e a constante matematica. Essa formula permite determinar a distancia media de um corpo em orbita ao redor de outro.",
    formula: "r = (G * M * T^2 / (4 * pi^2))^(1/3)"
  }
];

export default function Calculo({ params }: { params: { id: number } }) {
  const id = Number(params.id);
  const calculo = calculos.find(c => c.id === id);

  if (!calculo) {
    return <div>Cálculo não encontrado.</div>;
  }

  return (
    <div>
      <h1>{calculo.nome}</h1>
      <p>{calculo.description}</p>
      <p><strong>Fórmula:</strong> {calculo.formula}</p>
    </div>
  );
}
