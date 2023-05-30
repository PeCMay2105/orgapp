import './formulario.css'
import CamposTexto from '../camposFormulario'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../botao'

const Formulario = () => {
const escutador = (event) =>{
    event.preventDefault();
    console.log("Informações enviadas")
}
const listaDeTimes = ["Programação","Front-end","Data-Science","Dev-ops","Ux e Design","Mobilie","Inovação e Gestão"]
    return (
        <section className='formulario'>
            <form onSubmit={escutador}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CamposTexto label="Nome" placeholder="Digite seu nome"></CamposTexto>
                <CamposTexto label="Cargo" placeholder="Digite seu cargo"></CamposTexto>
                <CamposTexto label="Imagem" placeholder="Insira o endereço da imagem"></CamposTexto>
                <ListaSuspensa lista={listaDeTimes} label="Escolha seu time"></ListaSuspensa>
                <Botao conteudo="Criar card">Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario