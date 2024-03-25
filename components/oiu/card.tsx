import { CiCoffeeBean } from "react-icons/ci";
import Image from 'next/image';
import { useState } from 'react';

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Button } from '@/components/ui/button';

interface ItemCardInterface {
    item: {
        name: string,
        price: number,
        image: string,
        favorite: boolean
    }
}

export const ItemCard = ({ item }: ItemCardInterface) => {

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
            <button
                onClick={() => setIsFavorite(!isFavorite)}
            >
                {isFavorite
                    ? <AiFillHeart className='absolute text-xl right-5 top-5' />
                    : <AiOutlineHeart className='absolute text-xl right-5 top-5' />
                }
            </button>
            <p className="text-2xl mt-2 font-semibold">{item.name}</p>
            <p className="text-md mb-3 font-light">{item.name}</p>
            <div className='flex justify-between w-full items-center '>
                <p className="text-xl font-bold">$ {item.price}</p>
                <Button className='bg-amber-950 hover:bg-amber-800 text-white p-2 rounded-xl'>Order Now</Button>
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