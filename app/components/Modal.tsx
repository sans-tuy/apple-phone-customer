import { navbarData } from "@constanst/data";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { BsMoon } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { useContext, useRef } from "react";

interface Props {
  close: () => void;
}
export default function MobileNavbar(props: Props) {
  const { close } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const darkRef = useRef<HTMLButtonElement>(null);
  const handleDivClick = () => {
    // Trigger the button click when the parent div is clicked
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  const handleToggleDark = () => {
    // Trigger the button click when the parent div is clicked
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <div
      className="flex items-center justify-center text-black fixed z-[1000] top-0 left-0 w-full h-screen backdrop-blur backdrop-filter  transition-all duration-300  "
      onClick={handleDivClick}
      role="button"
      tabIndex={0}
    >
      <div
        className={`relative border border-solid border-neutral-200 w-[80%] md:w-1/2 flex flex-col p-4 shadow-md items-center gap-4 rounded-lg pt-8 animate-fromTopAnimation transition-all duration-300 `}
      >
        <button
          onClick={close}
          ref={buttonRef}
          className="absolute top-3 right-3 "
        >
          <RxCross2 color="red" />
        </button>
        {navbarData.map((val, idx) => (
          <Link href={val.href} key={`list-nav-${idx}`}>
            {val.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
