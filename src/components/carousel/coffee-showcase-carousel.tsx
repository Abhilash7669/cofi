"use client";

import Image from "next/image";
import DummyImg from "@/assets/dummy_img.png";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; 
import { Button } from "@/components/ui/button";

export default function CoffeeShowcaseCarousel() {

  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 780px)": {
        slides: {
          perView: 2.1,
          spacing: 12,
        },
      },
      "(min-width: 900px)": {
        slides: {
          perView: 2.4,
          spacing: 32,
        },
      },
      "(min-width: 1320px)": {
        slides: {
          perView: 3,
          spacing: 52,
        },
      },
      "(min-width: 1520px)": {
        slides: {
          perView: 3,
          spacing: 80,
        },
      },
      "(min-width: 1800px)": {
        slides: {
          perView: 3,
          spacing: 120,
        },
      },
    },
    slides: {
      perView: 1.2,
      spacing: 12,
    }
  });

  return (
    <div className="overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="border border-primary-dark bg-card keen-slider__slide shadow-2xl rounded-lg"
          >
            <div className="relative h-[20vw] max-h-80 w-full">
              <Image
                fill
                src={DummyImg}
                className="object-cover"
                alt="dummyimg"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="space-y-2">
                <p className="rounded-full border-2 border-[#ABABAB] text-[0.7rem] px-4 py-[0.15rem] bg-[#E62E31] text-white w-fit flex items-center justify-center">
                  Instant
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-lora font-semibold text-3xl text-primary">
                    Dark Roast
                  </p>
                  <p className="font-outfit text-foreground">500₹</p>
                </div>
              </div>
              <p className="font-outfit text-foreground leading-6">
                A rich, deep roast of our Arabica Beans. Very Chocolately - goes
                great with milk!
              </p>
              <Button variant="default" className="rounded-full w-full">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
