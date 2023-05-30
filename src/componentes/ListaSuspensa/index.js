import './ListaSuspensa.css'
const ListaSuspensa = (props) =>{
const lista = props.lista
const label = props.label
    return(
        <div className='listaSuspensa'>
            <h3>{label}</h3>
            <select>
                {lista.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa