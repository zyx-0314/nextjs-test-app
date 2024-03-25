import { Dancing_Script } from "next/font/google";

import { ReviewCard } from "@/components/oiu/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { CommentCreationModal } from "@/components/modals/comment-creation-modal";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export const ReviewSection = () => {

    const reviews = [
        [
            {
                author: "John Doe",
                image: "https://via.placeholder.com/300",
                rating: 4,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                author: "Mitch Doe",
                image: "https://via.placeholder.com/300",
                rating: 2,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore magna aliqua."
            },
            {
                author: "Jane Doe",
                image: "https://via.placeholder.com/300",
                rating: 5,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do ."
            },
        ],
        [
            {
                author: "John Lee",
                image: "https://via.placeholder.com/300",
                rating: 1,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                author: "Mitch Yu",
                image: "https://via.placeholder.com/300",
                rating: 2,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore magna aliqua."
            },
            {
                author: "Jane Lee Song",
                image: "https://via.placeholder.com/300",
                rating: 3,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
        ]
    ]

    return (
        <section
            className="flex flex-col items-center justify-center p-10"
        >
            <h2
                className={
                    dancingScript.className +
                    " text-2xl font-bold text-center text-black my-1"
                }
            >
                Come and Join
            </h2>
            <h3 className="text-4xl font-bold text-center text-black my-1">
                Our Happy Customers
            </h3>
            <div className="w-full p-8 flex flex-col gap-4 items-center justify-center ">
                <Carousel>
                    <CarouselContent>
                        {reviews.map((review, index) => (
                            <CarouselItem
                                key={index}
                                className="flex justify-center items-center w-full h-full gap-6"
                            >
                                {review.map((r, i) => (
                                    <ReviewCard
                                        key={i}
                                        review={r}
                                        main={i === 1}
                                    />
                                ))}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <CommentCreationModal />
            </div>
        </section>
    )
}