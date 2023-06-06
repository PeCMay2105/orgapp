import { Children } from 'react'
import './times.css'
import Card from  '../cardColaborador/index.js'

const Time = (props)=>{
    const colaboradores = props.colaboradores
    console.log(colaboradores)
    return(
        props.colaboradores.length > 0 ? <section className='time'style={{backgroundColor: props.corSecundaria}}>
           <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
           <div className='colaboradores'>
           {colaboradores.filter(objColaborador => objColaborador.Time == props.nome).map(objColaborador => <Card Nome={objColaborador.Nome} Cargo={objColaborador.Cargo} Imagem={objColaborador.Imagem} Time={objColaborador.Time} corDeFundo={props.corPrimaria} key={objColaborador.nome}></Card>)}
           </div>
        </section>
        : ''
    )
}

export default Time