"use client"

import { useContext, useEffect, useState } from 'react';

import { AiOutlineShoppingCart } from "react-icons/ai";

import { OrderCard } from "@/components/oiu/card";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import CartContext from '@/provider/cart-data';

export const OrderList = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const { data: cartData, setData: setCartData } = useContext(CartContext);

    useEffect(() => {
        if (cartData.length === 0) setTotalPrice(0);
        else setTotalPrice(cartData.reduce((total, order) => total + (order.price * order.quantity), 0));
    }, [cartData])

    function CheckOut() {
        try {
            // Call API to checkout
            // If success, clear cart
            setCartData([]);
        } catch (error) {
            alert("Failed to checkout, please try again later");
        }
    }

    return (
        <Sheet>
            <SheetTrigger><AiOutlineShoppingCart className="text-xl mx-3" /></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Order List</SheetTitle>
                    <SheetDescription>
                        <OrderCard orderList={cartData} setOrderList={setCartData} />
                    </SheetDescription>
                    <SheetFooter
                        className="fixed bottom-0 pb-5 pr-5"
                        style={{ width: '-webkit-fill-available' }}
                    >
                        <div className="flex w-full justify-between">
                            <p className="text-xl font-bold">Total: $ {totalPrice}</p>
                            <button
                                className="bg-blue-500 text-white rounded-lg px-3 py-1"
                                onClick={CheckOut}
                            >
                                Checkout
                            </button>
                        </div>
                    </SheetFooter>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}