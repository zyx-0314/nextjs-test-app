'use client'

import React, { createContext, useState } from 'react';

type cartDataType = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

const CartContext = createContext<{
    data: cartDataType[];
    setData: React.Dispatch<React.SetStateAction<cartDataType[]>>;
}>({
    data: [],
    setData: () => null,
});

export const CartProvider: React.FC = ({ children }: any) => {
    const [data, setData] = useState<cartDataType[]>([]);

    return (
        <CartContext.Provider value={{ data, setData }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
