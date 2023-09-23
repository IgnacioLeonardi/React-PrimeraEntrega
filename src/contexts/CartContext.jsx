import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addItem = (item, quantity) => {
        const alreadyExists = cartList.some(items => items.id === item.id)
        if (!alreadyExists) setCartList(prev => [...prev, { ...item, quantity }])
        else {
            const refreshProducs = cartList.map(items => {
                if (items.id === item.id)
                    return {
                        ...items,
                        quantity: items.quantity + quantity,
                    }
                else return items
            })
            setCartList(refreshProducs)
        }
    }

    const totalWidget = cartList.reduce((acc, val) => acc + val.quantity, 0)

    const clear = () => setCartList([])

    const removeItem = (id) => {
        const itemsFiltered = cartList.filter(cartList => cartList.id !== id)
        setCartList(itemsFiltered)
    }
    return (
        <CartContext.Provider value={{ addItem, cartList, clear, removeItem, totalWidget }}>
            {children}
        </CartContext.Provider>
    )
}