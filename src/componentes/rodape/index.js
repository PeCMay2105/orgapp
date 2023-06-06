import './rodape.css'


const Rodape = ()=>{

    return(
        <div className='retangulo'>
            <div className='redes'>
                <img src='/imagens/fb.png'></img>
                <img src='/imagens/tw.png'></img>
                <img src='/imagens/ig.png'></img>
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png'></img>
            </div>
            <div className='copyright'>
                <h4 className='creditos'>Desenvolvido por alura</h4>
            </div>
        </div>
    )
}
export default Rodape;