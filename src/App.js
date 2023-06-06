
import { useState } from 'react';
import Banner from './componentes/banner';
import CamposTexto from './componentes/camposFormulario';
import Formulario from './componentes/formulario';
import Time from './componentes/times';
import Rodape from './componentes/rodape';


function App() {

  const times = [
    {
      nome:"Programação",
      corPrimaria:"#57c278",
      corSecundaria:"#d9f7e9",
    },
    {
      nome:"Front-end",
      corPrimaria:"#82CFFA",
      corSecundaria:"#E8F8FF",
    },
    {
      nome:"Data-Science",
      corPrimaria:"#A6D157",
      corSecundaria:"#F0F8E2",
    },
    {
      nome:"Dev-ops",
      corPrimaria:"#E06B69",
      corSecundaria:"#FDE7E8",
    },
    {
      nome:"Ux e Design",
      corPrimaria:"#DB6EBF",
      corSecundaria:"#FAE9F5",
    },
    {
      nome:"Mobilie",
      corPrimaria:"#FFBA05",
      corSecundaria:"#FFF5D9",
    },
    {
      nome:"Inovação e Gestão",
      corPrimaria:"#FF8A29",
      corSecundaria:"#FFEEDF",
    }
  ]



  const [colaborador,setColaborador] = useState([])

  const criaColaborador = objeto =>{
    console.log(colaborador)
    setColaborador([...colaborador,objeto])
    console.log(objeto)
    console.log(colaborador)
    console.log(`O colaborador ${objeto.Nome} foi adicionado ao time ${objeto.Time}. Sua foto está disponível em ${objeto.Imagem} e seu cargo é ${objeto.Cargo}`)
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario times={times.map(objeto => objeto.nome)} cadastrarColaborador={objeto => criaColaborador(objeto)}></Formulario>
      {times.map(objeto =>{
        return <Time nome={objeto.nome} corPrimaria={objeto.corPrimaria} corSecundaria={objeto.corSecundaria} key={objeto.nome} colaboradores={colaborador}></Time>
      })}
      <Rodape></Rodape>
    </div>
  );
}
 
export default App;
