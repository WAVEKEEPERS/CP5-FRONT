import React from 'react'

export default function Livro() {
  return (
    <div className="titulo-livro">
      <h1 className="h1-livro">Worlds in Collision - Immanuel Velikovsky</h1>
      <img className='capa-livro' src="capa-livro.jpg" alt="capa do livro" />
      <h2 className="h2-livro">Sobre o Livro</h2>
      <p className="p-livro">
        "Worlds in Collision" é uma obra publicada em 1950 que propõe uma nova perspectiva sobre a história e a ciência,
        sugerindo que eventos cataclísmicos, causados por interações planetárias, influenciaram o desenvolvimento da civilização
        e os mitos de diversas culturas.
      </p>

      <h2 className="text-xl font-semibold mb-4">Resumo em Tópicos</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Contexto e Objetivo:</strong> Publicado em 1950, o livro busca reavaliar a história da Terra e da civilização humana.
        </li>
        <li>
          <strong>Teoria Principal:</strong> Sugere que planetas como Vênus e Marte interagiram de maneira catastrófica.
        </li>
        <li>
          <strong>Interpretação de Mitos:</strong> Analisa mitos e relatos históricos como memórias de eventos astronômicos reais.
        </li>
        <li>
          <strong>Evidências Apresentadas:</strong> Usa dados de várias disciplinas, incluindo astronomia, história e arqueologia.
        </li>
        <li>
          <strong>Controvérsias e Críticas:</strong> Gerou intenso debate na comunidade científica, sendo muitas vezes rejeitada.
        </li>
        <li>
          <strong>Impacto Cultural:</strong> Apesar das controvérsias, influenciou discussões sobre ciência e religião.
        </li>
        <li>
          <strong>Legado:</strong> Continuou a gerar interesse e discussão, levando a uma reavaliação da história e da ciência.
        </li>
      </ul>
    </div>
  )
}
