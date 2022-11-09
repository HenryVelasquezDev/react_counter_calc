import React, { useState } from 'react'


export const Counter = ( { valor, incremento, decremento }) => {
    
    const [contador, setContador] = useState(valor);

  return (
    <>
    <div>counter { contador }</div>
    <button onClick={() => setContador( contador + incremento ) }>+{incremento}</button>
    <button onClick={() => setContador( contador - decremento ) }>-{decremento}</button>

    </>
  )
}
