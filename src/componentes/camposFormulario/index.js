import { useState } from 'react'
import './Camposformulario.css'
const CamposTexto= (prop1)=>{
    
    const teste = (event)=> {
        prop1.NaAlteracao(event.target.value)
    }


    return(
        
        <div className="App">
            
                <label htmlFor="nome" id="etiqueta" className="etiqueta">{prop1.label}</label>
                <input  value={prop1.valor} onChange={teste} type="textbox" name={prop1.label} placeholder={prop1.placeholder}></input>
            
        </div>
    )
}
export default CamposTexto;
