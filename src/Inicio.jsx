import React from 'react';
// import { CalculadoraNew } from './CalculadoraNew/CalculadoraNew';
// import { Calculadora } from './Calculadora/Calculadora';
// import { Counter } from './Counter';

import { Calculadora, CalculadoraNew, Counter } from './'; //archivo de importaciones principal, se debe llamar index.js y puede estar dentro de cada carpeta

export const Inicio = () => {
  return (
    <div className="container">
        <div className="row">Calculadora New</div>
        <div className="row">
            <CalculadoraNew/>
        </div>
        <div className="row">Calculadora</div>
        <div className="row">
            <Calculadora />
        </div>
        <div className="row">Contador incremento 1</div>
        <div className="row">
            <Counter valor={ 0 } incremento={ 1 } decremento={ 1 } />
        </div>
        <div className="row">Contador incremento 5</div>
        <div className="row">
            <Counter valor={ 0 } incremento={ 5 } decremento={ 5 } />
        </div>
    </div>
  )
}
