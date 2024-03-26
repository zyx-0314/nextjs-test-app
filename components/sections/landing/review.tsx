import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export const ReviewSection = () => {
    return (
        <section
            className="flex flex-col items-center justify-center "
        >
            <div className="container">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>...</CarouselItem>
                        <CarouselItem>...</CarouselItem>
                        <CarouselItem>...</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </section>
    )
}