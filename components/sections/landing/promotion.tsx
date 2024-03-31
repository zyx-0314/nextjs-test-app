import { SignUpModal } from "@/components/modals/sign-up-modal";

export const PromotionSection = () => {
    return (
        <section className="bg-amber-100">
            <div className="container py-8">
                <div className="w-full flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold py-3">Get 50% off on your first order</h2>
                    <p className="text-md ">Sign up now and get 50% off on your first order. Offer valid for new customers only.</p>
                    <SignUpModal />
                </div>
            </div>
        </section>
    );
}