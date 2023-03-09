import React from 'react';
import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  //Los States tienen que ser declarados en la parte superior, dentro, pero antes del return
  //Primer State hecho
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
    //console.log('estoy en el useEffect')
  }, [paciente]);

  /* 
  useEffect(() => {
    console.log('El componente está listo!')
  }, []);
  */

  //genero un arrow function para hacer un id dinamico
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString()
    return random + fecha
  }

  const handleSubmit = (e) => {
    //aca puedo hacer todas las validaciones que quiera
    //Si es que tengo varios campos para validar. O, en cada uno de los campos cuando hago el onChange
    e.preventDefault(); //preventDefault lo que hace es frenar la ejecucion normal para realizar otras cosas.


    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      return;
    }
    setError(false)

    //construimos un objeto de paciente, con los datos del form! 
    //sin id, porque luego evaluamos si ya tiene o no.
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    //si tiene un id, es que estoy editando
    if (paciente.id) {
      //editando
      objetoPaciente.id = paciente.id
      //ahora tenemos 2, paciente que es la version vieja y el objeto paciente siendo editado
      // Ahora tengo que encontrar al registro original para sobreescribirlo.

      const pacientesActualizado = pacientes.map(
        pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      )

      setPacientes(pacientesActualizado)
      setPaciente({})

    } else {
      //nuevo paciente
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    /* console.log ("Objeto paciente: " + objetoPaciente) */

    // SPREAD OPERATOR. son los puntitos. es de los metodos INMUTABLES
    // Lo que hacemos es tomar una copia SIN MODIFICAR el original, y le agrega el nuevo objeto
    // paciente. Ahi lo pasa usando la funcion y no se rompe el array original por fuera de las 
    // funciones permitidas.

    //setPacientes([...pacientes, objetoPaciente])

    //finalmente blanqueo el formulario
    setNombre('')
    setEmail('')
    setFecha('')
    setPropietario('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Anadir Pacientes y {''}
        <span className="text-indigo-600 font-bold">
          administrarlos </span>
      </p>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      // En lugar de usar un ternario, uso un doble ampersand que significa que si el flag es true haga lo que sigue
      // {error ? 'Si hay un error.' : 'No hay un error'}
      >
        {error && <Error><p>Todos los campos son obligatorios</p></Error>
        }
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre mascota {nombre}</label>
          <input id='mascota'
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder='Ingrese nombre de la mascota'
            value={nombre}
            //Callback, tenemos acceso a e que es el evento de este onChange
            onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
          <input id='propietario'
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder='Ingrese nombre del propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
            email</label>
          <input id='email'
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder='email del propietario'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input id='alta'
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
            Sintomas</label>
          <textarea
            id='sintomas'
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder='Describe los sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 
          cursor-pointer transition-all"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />

      </form>

    </div>
  )
}

export default Formulario