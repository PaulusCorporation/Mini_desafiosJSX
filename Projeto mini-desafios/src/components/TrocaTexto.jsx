import React, { useState } from 'react'


const TrocaTexto = () => {

    const [texto, setTexto] = useState('Salve!')

  return (
    <div>
    <h1>{texto}</h1>
    <button onClick={() => setTexto('Falou!')}>
        Trocar
    </button>
    </div>
  )
}

export default TrocaTexto