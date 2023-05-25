import './formulario.css'
import CamposTexto from '../camposFormulario'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = () => {

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CamposTexto label="Nome" placeholder="Digite seu nome"></CamposTexto>
                <CamposTexto label="Cargo" placeholder="Digite seu cargo"></CamposTexto>
                <CamposTexto label="Imagem" placeholder="Insira o endereço da imagem"></CamposTexto>
                <ListaSuspensa lista={["Programação","Front-end","Data-Science","Dev-ops"]}></ListaSuspensa>
            </form>
        </section>
    )
}

export default Formulario