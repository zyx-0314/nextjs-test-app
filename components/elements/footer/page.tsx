import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

import { Delius_Unicase } from "next/font/google";

const delius = Delius_Unicase({
    weight: "700",
    style: "normal",
    subsets: ["latin"],
});

export const FooterPage = () => {


    return (
        <>
            <footer
                className={" text-xs text-white text-center p-4 bottom-0 w-full bg-amber-950 pb-12"}
            >
                <div className="flex justify-around px-6">
                    <div className="flex items-center">
                        <h1
                            className={delius.className + " font-bold text-2xl"}
                        >
                            COFFEE
                        </h1>
                    </div>
                    {formatter({
                        title: "About",
                        subtitles: [
                            { title: "About Us", links: "#" },
                            { title: "Contact Us", links: "#" },
                            { title: "Careers", links: "#" },
                        ]
                    })}
                    {formatter({
                        title: "Services",
                        subtitles: [
                            { title: "Menu", links: "#" },
                            { title: "Drinks Menu", links: "#" },
                            { title: "Pastries Menu", links: "#" },
                        ]
                    })}
                    {formatter({
                        title: "Legal",
                        subtitles: [
                            { title: "Privacy Policy", links: "#" },
                            { title: "Terms & Conditions", links: "#" },
                            { title: "Cookies Policy", links: "#" },
                        ]
                    })}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg">Social Media</h3>
                        <div className="flex justify-between mt-5 text-lg">
                            <a href="" > <AiOutlineInstagram /> </a>
                            <a href="" > <FiTwitter /> </a>
                            <a href="" > <AiOutlineLinkedin /> </a>
                            <a href="" > <AiOutlineFacebook /></a>
                        </div>
                    </div>
                </div>
            </footer >
            <div className="bg-amber-950 text-white flex justify-center pt-4">
                <p>&copy; 2021 Coffee. All rights reserved.</p>
            </div>
        </>
    );
}

interface formatterInterface {
    title: string;
    subtitles?: {
        title: string;
        links: string;
    }[]
}

const formatter = ({ title, subtitles }: formatterInterface) => {
    return (
        <div className="flex flex-col gap-4">
            <h3
                className="font-bold text-lg mb-2"
            >
                {title}
            </h3>
            {subtitles && subtitles.map((subtitle, index) => (
                <a href={subtitle.links} key={index} > {subtitle.title}</a>
            ))
            }

        </div >
    )
}