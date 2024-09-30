import Link from 'next/link';
import React from 'react'

export default function Calculos() {
  
  const calculos = [
    {id:1,nome: 'Atração Gravitacional', description: 'Velikovsky sugeriu que a interação gravitacional entre planetas poderia causar catástrofes na Terra.'},
    {id:2,nome: 'Distância de Astros', description: 'Velikovsky argumentou que a proximidade entre astros poderia alterar suas órbitas, causando catástrofes na Terra e influenciando a história humana.'}, 
  ];
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Cálculos</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="item-table">ID</th>
            <th className="item-table">Nome do Cálculo</th>
            <th className="item-table">Descrição</th>
            <th className="item-table">Acessar</th>
          </tr>
        </thead>
        <tbody>
          {calculos.map((cal) => (
            <tr key={cal.id} className="hover:bg-gray-50">
              <td className="item-table">{cal.id}</td>
              <td className="item-table">{cal.nome}</td>
              <td className="item-table">{cal.description}</td>
              <td className="item-table">
                <Link href={`/calculos/${cal.id}`} className="text-blue-500 hover:underline">
                  Acessar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
