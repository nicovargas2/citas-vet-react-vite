import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  //const [pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem('pacientes')) || [])
  const [pacientes, setPacientes] = useState([])  //array de objetos paciente
  const [paciente, setPaciente] = useState({})  //objeto vacio

  //Los useEffect se ejecutan segun el orden que los declaremos aca.
  //Si tienen dependencias, se ejecutan mas de 1 vez. Sino solo una vez.
  useEffect(() => {
    console.log(localStorage.getItem('pacientes'))

    const obtenerLS = () => {
      let pacientesLS;
      if (localStorage.getItem('pacientes') == null) {
        pacientesLS = [];
      } else {
        pacientesLS = JSON.parse(localStorage.getItem('pacientes'))
      }
      setPacientes(pacientesLS)
    }

    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  const sumar = () => {
    const numero = 5;
    if (numero > 5) {
      console.log('el numero es mayor a 5')
    } else {
      console.log('el numero NO es mayor a 5')
    }
  }

  //sumar();

  const edad = 17;
  const nombre = 'Martin';

  // Dentro de lo que es codigo HTML puedo poner cualquier cosa incluso sin tags,
  // pero si quiero que algo ejecute como javascript lo pongo dentro de llaves
  // ej.:
  // 1+1={1 + 1}
  // <p> {'Hola ' + nombre.toUpperCase() + '!'}</p>

  return (
    <>
      { //edad >= 18 ? 'Eres mayor de edad' : 'No eres mayor de edad'
      }
      <div className="container mx-auto mt-20">
        <Header
        //numeros={1}
        //isAdmin={false}
        />

        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </>
  )
}

export default App
