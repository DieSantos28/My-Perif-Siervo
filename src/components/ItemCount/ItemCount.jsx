import { useState } from "react"
import {toast} from 'react-toastify'
export const ItemCount = ({valInicial, stock}) => {
    
    const [contador, setContador] = useState (valInicial)

    const aumentarContador = () => (contador < stock ) && setContador (contador + 1)
    const disminuirContador = () =>(contador > valInicial) && setContador (contador -1)
    const agregarCarrito = () => {
      toast(`👾 Agregaste ${contador} periferico(s) al carrito!`) 
    }

    return (
    <>


    <button className="btn btn-dark" onClick = {() => aumentarContador() }>+</button>
        {contador}
    <button className="btn btn-dark" onClick = {() => disminuirContador() }>-</button> 
    <button className="btn btn-dark" onClick={() => agregarCarrito()}>Agregar al carrito</button>
    </>
  )
}
