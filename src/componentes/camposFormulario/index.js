import './Camposformulario.css'
const CamposTexto= (prop1)=>{
    console.log(prop1)
    return(
        
        <div className="App">
            
                <label htmlFor="nome" id="etiqueta" className="etiqueta">{prop1.label}</label>
                <input type="textbox" name={prop1.label} placeholder={prop1.placeholder}></input>
            
        </div>
    )
}
export default CamposTexto;
