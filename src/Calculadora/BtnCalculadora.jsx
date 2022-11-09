import React from 'react'

export const BtnCalculadora = ({ valor, funcion}) => {

    const handleOnClick = () => {
        funcion(valor);
    }

  return (
    <button className='btn btn-success col-3 m-1' onClick={  handleOnClick } >{ valor }</button>
  )
}
