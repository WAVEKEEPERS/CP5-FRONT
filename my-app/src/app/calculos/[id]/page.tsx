import React from 'react'

export default function Calculo({params}:{params: {id:number}}) {
  return (
    <div>
      <h1>Calculo: {params.id}</h1>
    </div>
  )
}
