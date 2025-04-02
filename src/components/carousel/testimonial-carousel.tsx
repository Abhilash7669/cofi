"use client"

import { cn } from "@/lib/utils";
import "keen-slider/keen-slider.min.css";
import { LiaChevronCircleRightSolid } from "react-icons/lia";
import { LiaChevronCircleLeftSolid } from "react-icons/lia";
import { useKeenSlider } from "keen-slider/react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function TestimonialCarousel({ children, className }: Props) {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 1,
            spacing: 14
        }
    });

  return (
    <div className="w-full relative">
      <ul ref={sliderRef} className={cn("keen-slider relative", className)}>
        {children}
      </ul>
      <div className="flex justify-center space-x-4 mt-5 md:block">
        <LiaChevronCircleLeftSolid
          onClick={() => instanceRef.current?.prev()}
          size={52}
          className="md:absolute md:top-2/4 md:-left-24 md:-translate-y-3/4 text-[#F5F5F5] z-30 cursor-pointer active:scale-95 md:hover:opacity-90 transition-all"
        />
        <LiaChevronCircleRightSolid
          onClick={() => instanceRef.current?.next()}
          size={52}
          className="md:absolute md:top-2/4 md:-right-24 md:-translate-y-3/4 text-[#F5F5F5] z-30 cursor-pointer active:scale-95 md:hover:opacity-90 transition-all"
        />
      </div>
    </div>
  );
}