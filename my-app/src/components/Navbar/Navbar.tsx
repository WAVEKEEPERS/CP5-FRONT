import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/biografia">Biografia</Link></li>
            <li><Link href="/calculos">Cálculos</Link></li>
            <li><Link href="/livro">Livro</Link></li>
            <li><Link href="/nasa">Imagens Nasa</Link></li>
        </ul>
    </nav>
  )
}
