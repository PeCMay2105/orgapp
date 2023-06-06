import { useState } from 'react'
import './ListaSuspensa.css'
const ListaSuspensa = (props) =>{
const lista = props.lista
const label = props.label


const teste =(event)=>{
    props.NaAlteracao(event.target.value)
    console.log(event.target.value)
}
    return(
        <div className='listaSuspensa'>
            <h3>{label}</h3>
            <select onChange={teste} value={props.valor} >
                <option value="">Escolha um time</option>
                {lista.map(item => <option key={item} >{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa