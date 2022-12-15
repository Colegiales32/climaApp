import useClima from "../hooks/useClima"
import { useState } from "react"

const Formulario = () => {

    const [alerta,setAlerta] = useState('')
    
    const {busqueda, datosBusqueda,consultarClima, setResultado} = useClima()

const handleSubmit = e => {
    e.preventDefault()
    setResultado({})

    if(Object.values(busqueda).includes('')) {
        setAlerta('Todos los campos son obligatorios')
        setTimeout(() => {
            setAlerta('')
        }, 4000);
        return
    }

    consultarClima(busqueda)
}


const {ciudad, pais} = busqueda

  return (
    <div className='contenedor'>
        {alerta && <p>{alerta}</p>}
        <form onSubmit={handleSubmit}>
            <div className='campo'>
                <label htmlFor='ciudad'>Ciudad</label>
                <input type="text" id='ciudad' 
                name='ciudad' onChange={datosBusqueda} value={ciudad} />
            </div>
            <div className='campo'>
                <label htmlFor='pais'>Pais</label>
                <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
            <option value=''>--Seleccione un Pais--</option>
            <option value='AR'>Argentina</option>
            <option value='CO'>Colombia</option>
            <option value='CR'>Costa Rica</option>
            <option value='ES'>España</option>
            <option value='US'>Estados Unidos</option>
            <option value='MX'>Mexico</option>
            <option value='PE'>Peru</option>
            </select>
            </div>

            <input type='submit' value='Consultar Clima'/>

        </form>
    </div>
  )
}

export default Formulario