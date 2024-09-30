import React from 'react'

export default function Biografia() {
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <h1 className="titulo-biografia">Biografia de Immanuel Velikovsky</h1>
      <img className='w-80' src='/autor.jpg' alt='Foto de Immanuel Velikovsky'></img>
        <h2 className="titulo-topico">Informações Pessoais</h2>
        <ul className="topicos">
            <li><strong>Nome Completo:</strong> Immanuel Velikovsky</li>
            <li><strong>Data de Nascimento:</strong> 10 de julho de 1895</li>
            <li><strong>Local de Nascimento:</strong> Vitebsk, Império Russo (atual Bielorrússia)</li>
        </ul>
        <h2 className="titulo-topico">Educação</h2>
        <ul className="topicos">
            <li>Formou-se em Medicina na Universidade de Moscou.</li>
            <li>Estudou Filosofia e História na Universidade de Haia.</li>
        </ul>
        <h2 className="titulo-topico">Carreira</h2>
        <ul className="topicos">
            <li>Praticou medicina em Jerusalém antes de emigrar para os Estados Unidos em 1939.</li>
            <li>Escreveu sobre mitologia, história antiga e astronomia.</li>
        </ul>
        <h2 className="titulo-topico">Obras Principais</h2>
        <ul className="topicos">
            <li><strong>"Mundus Plutonia" (1950)</strong>: Apresenta suas teorias sobre a origem da Terra e do sistema solar.</li>
            <li><strong>"Idéias em Conflito" (1950)</strong>: Explora a interação entre ciência e mitologia, propondo uma visão alternativa da história.</li>
            <li><strong>"A História do Cataclismo" (1955)</strong>: Analisa eventos cataclísmicos na história da Terra e suas implicações.</li>
            <li><strong>"A Nova Atlântida" (1980)</strong>: Explora a ideia de civilizações antigas e seus legados.</li>
        </ul>
        <h2 className="titulo-topico">Teorias</h2>
        <ul className="topicos">
            <li>Propôs que eventos astronômicos, como a passagem de Vênus, tiveram impactos significativos na história da humanidade.</li>
            <li>Defendeu que muitos mitos e relatos históricos têm raízes em eventos reais de cataclismos.</li>
        </ul>
        <h2 className="titulo-topico">Controvérsias</h2>
        <ul className="topicos">
            <li>Seus trabalhos foram amplamente criticados e rejeitados pela comunidade científica.</li>
            <li>Acusado de pseudociência por não seguir o método científico convencional.</li>
        </ul>
        <h2 className="titulo-topico">Vida Pessoal</h2>
        <ul className="topicos">
            <li>Casou-se com a artista e escritora Elisheva Velikovsky.</li>
            <li>Tinha dois filhos.</li>
        </ul>
        <h2 className="titulo-topico">Morte</h2>
        <ul className="topicos">
            <li>17 de agosto de 1979, em Nova Jersey, Estados Unidos.</li>
        </ul>
        <h2 className="titulo-topico">Legado</h2>
        <ul className="topicos">
            <li>Apesar da controvérsia, suas ideias continuam a ser discutidas em círculos não acadêmicos e por entusiastas de teorias alternativas.</li>
        </ul>
    </div>
  )
}
