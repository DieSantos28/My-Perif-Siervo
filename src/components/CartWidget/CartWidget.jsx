const CartWidget = ({cantCarrito}) => {
    return (
        <div>
           <i className="bi bi-cart-fill"></i> 
           <p>{cantCarrito}</p>
        </div>
    );
}

export default CartWidget;
