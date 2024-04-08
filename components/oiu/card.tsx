"use client"

import Image from 'next/image';

import { useState } from 'react';

import { CiCoffeeBean } from "react-icons/ci";
import { BiUpArrowCircle } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { BiDownArrowCircle } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { Button } from '@/components/ui/button';

interface ItemCardInterface {
    item: {
        name: string,
        price: number,
        image: string,
        favorite: boolean
    },
    addToCart: (a: any) => void
}

export const ItemCard = ({ item, addToCart }: ItemCardInterface) => {

    const [isFavorite, setIsFavorite] = useState(item.favorite)

    return (
        <div className="relative flex flex-col items-start bg-orange-100 rounded-lg p-2">
            <Image
                className="w-72 h-96 object-cover rounded-lg"
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
            />
            <div
                onClick={() => setIsFavorite(!isFavorite)}
                className='absolute text-xl right-5 top-5 cursor-pointer'
            >
                {isFavorite
                    ? <AiFillHeart />
                    : <AiOutlineHeart />
                }
            </div>
            <p className="text-2xl mt-2 font-semibold">{item.name}</p>
            <p className="text-md mb-3 font-light">{item.name}</p>
            <div className='flex justify-between w-full items-center '>
                <p className="text-xl font-bold">$ {item.price}</p>
                <Button onClick={() => addToCart(item)}>Order Now</Button>
            </div>
        </div>
    )
}

interface ReviewCardInterface {
    review: {
        author: string,
        image: string,
        rating: number,
        content: string
    },
    main?: boolean
}

export const ReviewCard = ({ review, main = false }: ReviewCardInterface) => {
    return (
        <>
            <div className={"flex flex-col items-start bg-orange-100 rounded-lg px-7 py-3 w-1/3 " + (main ? "min-h-64" : "min-h-56")}>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-5 mb-5">
                        <Image
                            className="w-20 h-20 object-cover rounded-full"
                            src={review.image}
                            alt={review.author}
                            width={150}
                            height={150}
                        />
                        <p className="text-2xl mt-2 font-semibold">{review.author}</p>
                    </div>
                    <div className="flex flex-row">
                        {
                            Array.from({ length: 5 - review.rating }).map((_, index) => (
                                <CiCoffeeBean key={index} className="text-2xl text-orange-300" />
                            ))
                        }
                        {
                            Array.from({ length: review.rating }).map((_, index) => (
                                <CiCoffeeBean key={index} className="text-2xl" />
                            ))
                        }
                    </div>
                </div>
                <p className="text-md mb-3 font-light line-clamp-3">{review.content}</p>
            </div>
        </>
    )
}

interface OrderCardInterface {
    orderList: {
        id: number,
        name: string,
        price: number,
        quantity: number,
    }[],
    setOrderList: any,
}

export const OrderCard = ({ orderList, setOrderList }: OrderCardInterface) => {

    const modifyOrderQuantity = (itemId: number, value: number) => {
        let updatedItems = orderList.map(order =>
            order.id === itemId ? { ...order, quantity: value } : order
        );

        setOrderList(updatedItems);
    };

    // remove order from order list
    const removeOrder = (itemId: number) => {
        let updatedItems = orderList.filter(order => order.id !== itemId);
        setOrderList(updatedItems);
    };

    return (
        <>
            {orderList.map((order, index) => (
                <div
                    className="flex flex-row items-center justify-between bg-gray-100 rounded-sm w-full my-4"
                    key={index}
                >
                    <Image
                        className="w-24 h-24 object-cover p-2"
                        src={'https://via.placeholder.com/300'}
                        alt={order.name}
                        width={200}
                        height={200}
                    />
                    <div className="flex flex-col w-full px-2">
                        <div className="flex items-center justify-between text-lg text-black">
                            <p className="font-semibold">{order.name}</p>
                            <div className="flex justify-center items-center gap-1">
                                <BiDownArrowCircle
                                    className='hover:cursor-pointer'
                                    onClick={() => modifyOrderQuantity(order.id, (order.quantity - 1) < 1 ? 1 : order.quantity - 1)}
                                />
                                {order.quantity}
                                <BiUpArrowCircle
                                    className='hover:cursor-pointer'
                                    onClick={() => modifyOrderQuantity(order.id, order.quantity + 1)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-md font-light">$ {order.price}</p>
                            <p className="text-md font-light">X</p>
                            <p className="text-md font-light">{order.quantity}</p>
                            <p className="text-md font-light">=</p>
                            <p className="text-md font-light">{order.price * order.quantity}</p>
                        </div>
                        <div
                            className="w-full flex justify-end"
                            style={{
                                top: '-70px',
                                right: '-15px',
                                position: 'relative'
                            }}
                        >
                            <MdOutlineCancel
                                className='text-red-600 text-xl hover:cursor-pointer'
                                onClick={() => removeOrder(order.id)}
                            />
                        </div>
                    </div>
                </div>

            ))}
        </>
    )
}