import { ReactNode } from "react";

interface LinkProps {
    href: string;
    children: ReactNode;
}

export const Link = ({ href, children }: LinkProps) => {
    return (
        <a href={href} className=" hover:underline">
            {children}
        </a>
    );
}
