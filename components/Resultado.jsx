import React from 'react'
import useClima from '../hooks/useClima'


const Resultado = () => {

const {resultado} = useClima()

const {name,main} = resultado

// Grados Kelvin
const kelvin = 273.15

const temperatura = parseInt(main.temp - kelvin)
const temperaturaMin = parseInt(main.temp_min - kelvin)
const temperaturaMax = parseInt(main.temp_max - kelvin)



  return (
    <div className='contenedor clima'>
      <h2>El clima de {name} es:</h2>
      <p>{temperatura}<span>&#x2103;</span></p>
     <div className='temp_min_max'>
      <p>Min: {temperaturaMin}<span>&#x2103;</span></p>
      <p>Max: {temperaturaMax}<span>&#x2103;</span></p>
     </div>
     
        </div>
  )
}

export default Resultado