"use client"

import { createContext, Dispatch, SetStateAction, use, useEffect, useState } from "react"

type ContextProps = {
    cart: Cart,
    setCart: Dispatch<SetStateAction<Cart>>
    total: number,
    setTotal: Dispatch<SetStateAction<number>>
}

const CartContext = createContext<ContextProps>({
    cart: [],
    total: 0,
    setCart: () => null,
    setTotal: () => null
})

export const CartProvider = ({children}: any) => {
    
    const [cart, setCart] = useState<Cart>([])
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        const cart = localStorage.getItem('cart')
        if(cart) {
            const parsedCart = JSON.parse(cart)
            let total = 0
            parsedCart.forEach((item: CartItem) => {
                total += item.price * item.quantity
            })
            setTotal(total);
            setCart(parsedCart)
            
        }
        else {
            localStorage.setItem('cart', JSON.stringify([]))
            setTotal(0);
            setCart([])
        }
    }, [])
    return (
        <CartContext.Provider value={{cart, setCart, total, setTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext