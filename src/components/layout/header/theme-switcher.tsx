"use client"

import Image from "next/image";
import Moon from "@/assets/moon_icon.svg";
import { MdOutlineLightMode } from "react-icons/md";
import { useEffect, useRef } from "react";

type Props = object;

export default function ThemeSwitcher({ }: Props) {

    // todo re-work theme switcher
    const iconContainerRef = useRef<HTMLDivElement | null>(null);
    const sunRef = useRef<HTMLDivElement | null>(null);
    const moonRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
          const themeAttribute = document.body.getAttribute("data-theme");
          if (themeAttribute === "light") {
            moonRef.current?.classList.add("opacity-0");
          }
        }
    }, []);

    function handleTheme(e: React.MouseEvent<HTMLButtonElement>): void {

        e.preventDefault();

        if (typeof window !== "undefined") {

            const themeAttribute = document.body.getAttribute("data-theme");

            if (themeAttribute === "light") {
                document.body.setAttribute("data-theme", "dark");
                iconContainerRef.current?.classList.add("to-right");
                iconContainerRef.current?.classList.remove("to-left");

                sunRef.current?.classList.remove("opacity-100");
                sunRef.current?.classList.add("opacity-0");

                moonRef.current?.classList.add("opacity-100");
                moonRef.current?.classList.remove("opacity-0");
            } else {
                document.body.setAttribute("data-theme", "light");
                iconContainerRef.current?.classList.remove("to-right");
                iconContainerRef.current?.classList.add("to-left");

                sunRef.current?.classList.remove("opacity-0");
                sunRef.current?.classList.add("opacity-100");

                moonRef.current?.classList.remove("opacity-100");
                moonRef.current?.classList.add("opacity-0");
            }

        }

    }   

    return (
      <button
        onClick={handleTheme}
        className="relative h-9 w-20 rounded-full bg-theme-switcher cursor-pointer
            shadow-[inset_0_-2px_2px_0_rgba(76,47,16,0.25),inset_0_4px_4px_0_rgba(196,154,108,0.25),0_0_10px_2px_rgba(196,154,108,0.25)]"
      >
        <div
          ref={iconContainerRef}
          className="h-[72%] w-9 absolute top-2/4 -translate-y-2/4"
        >
          <div className="h-full w-full relative">
            <Image ref={moonRef} fill className="transition-all" src={Moon} alt="Moon" />
            <div
                ref={sunRef}            
                className="absolute h-full w-full transition-all"
            >
              <MdOutlineLightMode className="text-white h-full w-full" />
            </div>
          </div>
        </div>
      </button>
    );
}