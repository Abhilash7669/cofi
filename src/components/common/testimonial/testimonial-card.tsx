import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";
import { TestimonialData } from "@/lib/types/testimonial/testimonial";

type Props = {
  item: TestimonialData;
};

export default function TestimonialCard({ item }: Props) {

  if (!item) return <p>No data</p>;

  return (
    <li className="text-[#F5F5F5] keen-slider__slide">
      <p className="text-3xl font-lora">&quot;</p>
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-center font-outfit text-lg">{item.quote}</p>
        <div className="space-y-1 flex flex-col items-center justify-center">
          <div className="h-13 w-13 relative flex items-center justify-center bg-secondary rounded-full">
            {item.image && item.image.trim() ? (
              <Image fill src={item.image} alt="image" />
            ) : (
              <FaRegUserCircle className="text-primary h-[64%] w-[64%]" />
            )}
          </div>
          <div className="flex flex-col items-center justify-center font-outfit">
            <p className="text-white">{item.name}</p>
            <p className="text-yellow-300">{item.position}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
