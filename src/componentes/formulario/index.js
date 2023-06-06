import './formulario.css'
import CamposTexto from '../camposFormulario'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../botao'
import { useState } from 'react'

const Formulario = (props) => {
 

const listaDeTimes = [...props.times]


const [nome,setNome] = useState('Nome');
const [cargo,setCargo] = useState('Cargo');
const [imagem,setImagem] = useState('Imagem');
const [time,setTime] = useState("")

const cardColaborador = {
    "Nome": nome,
    "Cargo": cargo,
    "Imagem": imagem,
    "Time": time
}

const escutador = (event) =>{
    event.preventDefault();
    props.cadastrarColaborador(cardColaborador)
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    console.log("O formulario foi enviado contendo as seguintes iformações:", nome,cargo,imagem,time)
}

    return (
        <section className='formulario'>
            <form onSubmit={escutador}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CamposTexto label="Nome" placeholder="Digite seu nome" valor={nome} NaAlteracao={valor => setNome(valor)}></CamposTexto>
                <CamposTexto label="Cargo" placeholder="Digite seu cargo" valor={cargo} NaAlteracao={valor => setCargo(valor)}></CamposTexto>
                <CamposTexto label="Imagem" placeholder="Insira o endereço da imagem" valor={imagem} NaAlteracao={valor => setImagem(valor)}></CamposTexto>
                <ListaSuspensa lista={listaDeTimes} label="Escolha seu time" valor={time} NaAlteracao={(time)=> setTime(time) }></ListaSuspensa>
                <Botao conteudo="Criar card">Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario