import Image from 'next/image';
import { useState } from 'react';

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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
                <button className='bg-orange-950 text-white p-2 rounded-md'>Order Now</button>
            </div>
        </div>
    )
}