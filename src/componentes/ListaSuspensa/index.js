import './ListaSuspensa.css'
const ListaSuspensa = (props) =>{
const lista = props.lista
    return(
        <div>
            <select>
                {lista.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa