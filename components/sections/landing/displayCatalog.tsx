import React, { useContext } from 'react';
import { ItemCard } from "@/components/oiu/card"
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import CartContext from '@/provider/cart-data';

export const DisplayCatalog = () => {
    const { data: cartData, setData: setCartData } = useContext(CartContext);

    const itemPlaceholders = [
        [
            {
                name: 'Latte',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: true
            },
            {
                name: 'Cappuccino',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
            {
                name: 'Mocha',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
            {
                name: 'Espresso',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
        ],
        [
            {
                name: 'Latte',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
            {
                name: 'Cappuccino',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
            {
                name: 'Mocha',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
        ],
        [
            {
                name: 'Espresso',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
            {
                name: 'Latte',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
            {
                name: 'Cappuccino',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
            {
                name: 'Mocha',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
        ],
        [
            {
                name: 'Espresso',
                price: 5.00,
                image: 'https://via.placeholder.com/300',
                favorite: false
            },
        ]
    ]

    const addToCart = (item: any) => {

        if (cartData) {
            const existingItemIndex = cartData.findIndex(cartItem => cartItem.name === item.name);
            if (existingItemIndex !== -1) {
                const updatedCart = [...cartData];
                updatedCart[existingItemIndex].quantity += 1;
                setCartData(updatedCart);
            } else {
                console.log([...cartData, { ...item, quantity: 1, id: cartData.length + 1 }])
                setCartData([...cartData, { ...item, quantity: 1, id: cartData.length + 1 }]);
            }
        } else {
            setCartData([{ ...item, quantity: 1 }]);
        }
    };

    return (
        <section className="flex w-full h-full bg-orange-50 py-8">
            <div className="container flex flex-col items-center justify-center w-full h-full">
                <h3 className="text-4xl font-bold text-slategrey-800 mb-5">
                    OUR BEST HOT COFFEES
                </h3>
                <Carousel className="my-5" style={{ width: '-webkit-fill-available' }}>
                    <CarouselContent>
                        {itemPlaceholders.map((itemList, listIndex) => (
                            <CarouselItem key={listIndex} className="flex justify-center items-center w-fit gap-6">
                                {itemList.map((item, itemIndex) => (
                                    <ItemCard key={itemIndex} item={item} addToCart={() => addToCart(item)} />
                                ))}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <Separator className="my-8" />
                <h3 className="text-4xl font-bold text-slategrey-800 mb-5">
                    OUR BEST COLD COFFEES
                </h3>
                <Carousel className="my-5" style={{ width: '-webkit-fill-available' }}>
                    <CarouselContent>
                        {itemPlaceholders.map((itemList, listIndex) => (
                            <CarouselItem key={listIndex} className="flex justify-center items-center w-full h-full gap-6">
                                {itemList.map((item, itemIndex) => (
                                    <ItemCard key={itemIndex} item={item} addToCart={() => addToCart(item)} />
                                ))}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};
