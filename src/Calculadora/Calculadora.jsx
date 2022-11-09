import React, { useState } from 'react';
import {BtnCalculadora} from './BtnCalculadora';

export const Calculadora = () => {
    
    const [texto, setTexto] = useState("");
    const [total, setTotal] = useState(0);

    const botones = [];

    const ops = ["+","-","*","/"];

    [1,2,3,4,5,6,7,8,9,0,"+","-","*","/"].forEach( item => {
        botones.push(
            <BtnCalculadora 
            valor = { item } 
            key = {item}
            funcion={(v) => {
                if (
                    ops.includes(v) && texto === '' ||
                    ops.includes(v) && ops.includes( texto.slice(-1))
                ){
                    return;
                }
                
                setTexto(texto + v)
            }}/>
        )
    })
    

  return (
    <>

    <div className="row">
        <div className="col">

        { texto }
        </div>
    </div>
    <div className="row">
        Total: { total }
    </div>
    <div className='col'>
        {botones}    
        <BtnCalculadora valor = "=" 
        funcion={(v) =>{ 
            setTotal( eval(texto) );
            setTexto("");
        }}/>
    </div>    

    <div className='col'>
        <BtnCalculadora valor = "AC" 
        funcion={(v) =>{ 
            setTotal(0);
            setTexto("");
        }}/>
        <BtnCalculadora valor = "C" 
        funcion={(v) =>{ 
            setTexto(texto.substring(0, texto.length-1));
        }}/>
    </div>

    </>
  )
}
