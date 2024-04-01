import { Delius_Unicase } from "next/font/google";

import { Link } from "@/components/oiu/link";
import { Search } from "@/components/oiu/search";

const delius = Delius_Unicase({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export const C_Header = () => {
  return (
    <header
      className={
        delius.className +
        " flex flex-row py-4 px-10 space-x-5 w-full justify-between shadow-lg shadow-slate-200/40 fixed text-slate-100 z-50"
      }
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <CompanyTitle className="w-1/5" />
      <nav className="w-2/5 flex self-center">
        <ul className="flex flex-row space-x-5 justify-around w-full">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="">COFFEE</Link>
          </li>
          <li>
            <Link href="">PASTRIES</Link>
          </li>
          <li>
            <Link href="">VISIT US</Link>
          </li>
          <li>
            <Link href="">KNOW US</Link>
          </li>
        </ul>
      </nav>
      <div className="search self-center w-1/5">
        <Search />
      </div>
    </header>
  );
};

interface CompanyTitleProps {
  className?: string;
}

const CompanyTitle = ({ className }: CompanyTitleProps) => {
  return (
    <div className={delius.className + " " + className}>
      <h1 className="text-3xl">Coffee</h1>
    </div>
  );
};
