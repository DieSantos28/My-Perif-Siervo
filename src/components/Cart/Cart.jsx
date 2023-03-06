import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const carrito = [
        {id: 1, nombre: "Mouse", modelo: "1", img: 'https://firebasestorage.googleapis.com/v0/b/my-perif.appspot.com/o/mouse-razer.jpg?alt=media&token=ebcb8999-7fa3-4480-b52f-452b50c5b2ae', precio: 400, cantidad: 5 },
        {id: 2,nombre: "Teclado", modelo: "2", img: 'https://firebasestorage.googleapis.com/v0/b/my-perif.appspot.com/o/teclado-msi.jpg?alt=media&token=90353d77-34d8-4914-a682-a2b3271c00c0',precio: 300, cantidad: 2 },
        {id: 3,nombre: "Mouse", modelo: "3",img: 'https://firebasestorage.googleapis.com/v0/b/my-perif.appspot.com/o/mouse-hyperx.jpg?alt=media&token=e9bb507b-0145-4f46-88ab-c47797082178',precio: 500, cantidad: 3 },
    ]
    return(
        <>
            { carrito.length === 0 
              ?
                <>
                    <h2>Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
                </>
              :
                <div className="container cartContainer">
                    {
                        <ItemList products={carrito} plantilla={'itemCart'}/>
                    }
                    <div className="divButtons">
                        <p>Resumen de la compra: precio total</p>
                        <button className="btn btn-danger">Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                    </div>
                </div>
            }
        </>
    )
   
}
