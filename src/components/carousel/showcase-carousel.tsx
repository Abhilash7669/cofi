"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; 

type Props = {
  children: React.ReactNode;
}

export default function ShowcaseCarousel({ children }: Props) {

  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 320px)": {
        slides: {
          perView: 1.3,
          spacing: 20
        }
      },
      "(min-width: 520px)": {
        slides: {
          perView: 1.8,
          spacing: 20
        }
      },
      "(min-width: 780px)": {
        slides: {
          perView: 2.1,
          spacing: 20,
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
          spacing: 80,
        },
      },
      "(min-width: 1520px)": {
        slides: {
          perView: 3,
          spacing: 120,
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
    <div className="">
      <div ref={sliderRef} className="keen-slider">
        { children }
      </div>
    </div>
  );
}
