import React from 'react'

export const ListaBotones = ({ lista, funcion }) => {

    const handleClick = (e) =>{
        funcion(e.target.value);
    }
    
  return (
    <>
    {
        lista.map( item => {
            return (
                <button className='col-3 btn btn-primary m-1' 
                onClick={ handleClick }
                value={ item }
                key={item}>{item}</button>
                )
            })            
        }
    </>
  )
}
