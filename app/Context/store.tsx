"use client"

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react"

type ContextProps = {
    cart: string[],
    setCart: Dispatch<SetStateAction<string[]>>
}

const CartContext = createContext<ContextProps>({
    cart: [],
    setCart: () => null
})

export const CartProvider = ({children}: any) => {
    const [cart, setCart] = useState<string[]>([])
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}