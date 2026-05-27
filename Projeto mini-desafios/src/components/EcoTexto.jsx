import React from 'react'
import { useState } from 'react'

const EcoTexto = () => {

    const [texto, setTexto] = useState('')
    
    return (
    <div>
        <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
    />
    {texto
    ? <p>Tu digitou: <strong>{texto}</strong></p>
    : <p style={{color: 'red'}}>Digita algo...</p>}

    </div>
  )
}

export default EcoTexto