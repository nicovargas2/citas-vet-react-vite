// DESTRUCTURING
// Puedo aplicarlo y en lugar de usar la palabra reservada props
// utilizo la variable que me pasaron:
// function Header(numeros, isAdmin ) {
// console.log(numeros)
// console.log(isAdmin)
//    o bien usarlo con props completo
// function Header(props) {
// console.log(props)

function Header() {

  return (
    <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
      Seguimiento Pacientes {""} Con Github {''}
      <span className="text-indigo-600">Veterinaria</span>
    </h1>
  )
}

export default Header