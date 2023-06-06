import './card.css'

const Card = (props)=>{

    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.Imagem} alt='foto do colaborador'></img>
            </div>
            <div className='rodape'>
                <h4>{props.Nome}</h4>
                <h5>{props.Cargo}</h5>
            </div>
        </div>
    )

}
export default Card;
