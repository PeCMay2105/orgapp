import './formulario.css'
function Formulario(){
    return(
        <form className="formulario">
            <label for="Nome" id="etiqueta" className="etiqueta">Nome</label>
            <input type="textbox" name="Nome"></input>
        </form>
    )
}
export default Formulario;
