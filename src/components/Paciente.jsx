
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    //console.log(paciente)
    /*
    Se puede usar el prop que se recibió, o tambien puedo usar
    el destructuring como a continuacion.
    */
    const { propietario, email } = paciente

    const handleEliminar = () => {
        if (confirm("Desea eliminar este registro?")) {
            eliminarPaciente(paciente.id)
        }

    }
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">

            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {''}
                <span className="font-normal normal-case"> {paciente.nombre} </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {''}
                <span className="font-normal normal-case"> {propietario} </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> email: {''}
                <span className="font-normal normal-case"> {email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha alta: {''}
                <span className="font-normal normal-case"> {paciente.fecha} </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {''}
                <span className="font-normal normal-case"> {paciente.sintomas} </span>
            </p>
            <div className="flex justify-between mt-10">
                <button type="button"
                    className="py-2 px-10 bg-indigo-500 hover: bg-indigo-700 text-white rounded-lg uppercase font-bold"
                    //Si 
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
                <button type="button"
                    className="py-2 px-10 bg-red-500 hover: bg-red-700 text-white rounded-lg uppercase font-bold"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>

    )
}

export default Paciente