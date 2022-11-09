import React, { useState } from 'react';
import { ListaBotones } from './ListaBotones';

export const CalculadoraNew = () => {

    const [total, setTotal] = useState("");

    const numeros = ["1","2","3","4","5","6","7","8","9","0","00"];

    const operacion = ["+","-","*","/"];
    
    const simbolos = ["=","AC","C"];

    const handleClick = (valor) => {
        if ( operacion.includes( valor ) && total === ''
            || operacion.includes( valor ) && operacion.includes( total.slice(-1))){
                return;
            }
        
        if ( ((valor === '0' || valor === '00') && total === '')
            ||( (valor === '0' || valor === '00' ) && operacion.includes( total.slice(-1)))
            ){
                return;
            }
        

        setTotal( total + valor);
    }

    const handleBtnSimbolos = (valor) => {
        
        if ( ['C','AC'].includes(valor) ){
            setTotal( valor === 'C' ? total.substring(0, total.length-1) : "");
            return;
        }

        // se ejecuta cuando valor es '='
        if ( total === ''){
            return;
        } 

        try {
            setTotal( eval(total) + '' );
        } catch (error) {
            console.log("error")
        }

    }

  return (
    <>
        <div className="row">
            <div className='col'>
                { total }
            </div>
        </div>
        <div className="row">
            <div className='col'>
            <ListaBotones lista={ numeros } funcion= { handleClick } />
            <ListaBotones lista={ operacion } funcion= { handleClick } />
            <ListaBotones lista={ simbolos } funcion= { handleBtnSimbolos } />

            </div>
        </div>  


    </>
  )
}
