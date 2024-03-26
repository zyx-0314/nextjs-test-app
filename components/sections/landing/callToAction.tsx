import { Button } from "@/components/ui/button"

export const CallToActionSection = () => {

    return (
        <section className="py-8 bg-amber-100">
            <div
                className="container flex flex-col items-center justify-center py-4 gap-y-10"
            >
                <h3
                    className="text-5xl font-bold text-center text-gray-800"
                >
                    Check out our best coffee betans
                </h3>
                <Button
                    className="bg-amber-950 text-white text-xl p-6 hover:bg-amber-900 rounded-3xl"
                >
                    Explore our products
                </Button>
            </div>
        </section>
    )
}