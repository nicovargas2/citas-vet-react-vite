import Paciente from "./Paciente"
import { useEffect } from "react"

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  //console.log("pacientes.length: " + pacientes.length)
  //console.log("Es igual a 0?: " + pacientes.length === 0)

  /* Desafio: detectar cuando hay un paciente agregado.
  useEffect(() => {
    if (pacientes.length > 0) {
      console.log("Nuevo paciente agregado!")
    }
  }, [pacientes]);
  */

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-auto">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold" >
              pacientes y citas</span>
          </p>

          {/* como lo que esta abajo es un arrow function y solo tengo 1 param, le puedo eliminar el parentesis
              quedando algo como { pacientes.map( paciente => */}
          {pacientes.map((paciente) =>
          (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold" >
              y los veras aquí</span>
          </p>

        </>
      )}
    </div>
  )
}

export default ListadoPacientes

