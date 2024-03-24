import { GiCoffeeCup, GiCakeSlice } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";
import { SiGitea } from "react-icons/si";

export const CategorySection = () => {

    const categoriesClass = 'text-8xl text-amber-800'
    const categories = [
        {
            name: 'Hot Coffee',
            icon: <GiCoffeeCup className={categoriesClass} />
        },
        {
            name: 'Cold Coffee',
            icon: <BiCoffeeTogo className={categoriesClass} />
        },
        {
            name: 'Tea',
            icon: <SiGitea className={categoriesClass} />
        },
        {
            name: 'Dessert',
            icon: <GiCakeSlice className={categoriesClass} />
        },
    ]

    return (
        <section className="flex h-full">
            <div className="container w-3/4 flex py-8 gap-3 justify-around">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {category.icon}
                        <p className="text-2xl">{category.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}