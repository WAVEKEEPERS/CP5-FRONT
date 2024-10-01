"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface NasaImage {
  copyright: string;
  date: string;
  explanation: string;
  title: string;
  url: string;
  hdurl: string;
}

export default function Nasa() {
  const [lista, setLista] = useState<NasaImage[]>([]);

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch("http://localhost:3000/api/images");
      const dados = await response.json();
      setLista(dados);
    };
    chamadaApi();
  }, []);

  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">Nasa Imagens</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="item-table">Título</th>
            <th className="item-table">Exploração</th>
            <th className="item-table">URL da Imagem (Baixa Resolução)</th>
            <th className="item-table">URL da Imagem (Alta Resolução)</th>
            <th className="item-table">Data</th>
            <th className="item-table">Direitos Autorais</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((info) => (
            <tr key={info.date} className="text-center hover:bg-gray-50">
              <td className="item-table">{info.title}</td>
              <td className="item-table">{info.explanation}</td>
              <td className="text-green-500 hover:underline"><Link href={info.url}>Clique Aqui</Link></td>
              <td className="text-blue-500 hover:underline"><Link href={info.hdurl}>Clique Aqui</Link></td>
              <td className="item-table">{info.date}</td>
              <td className="item-table">{info.copyright}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
