import React from 'react'

const BotaoAlerta = () => {

    const handleClick = () => {
        alert('Boa, clicou!')
    }

  return (
    <div>
        <button onClick={handleClick}>Dá uma clicada, filho.. </button>
    </div>
  )
}

export default BotaoAlerta