import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import carrito from "../assets/shoppingcart_77968.png"
import { Link } from "react-router-dom";

export const CartWidget = () => {
    const {totalWidget} = useContext(CartContext)

    return (
        <Link to="/cart">
            <img className="imgCarrito" src={carrito} alt="carrito" /> 
            <span className="spanCarrito">{totalWidget}</span>
        </Link>

    )
}