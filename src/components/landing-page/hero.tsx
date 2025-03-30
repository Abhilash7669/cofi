import { HeroCMS } from "@/lib/types/landing-page/hero";
import ButtonBase from "@/components/common/button/button-base";
import Image from "next/image";
import CoffeeTag from "@/components/common/tag/coffee-tag";

type Props = {
  content: HeroCMS;
};

export default function Hero({ content }: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-[78%]">
        <CoffeeTag tag={content.tag} />
        <div className="space-y-2 lg:space-y-1">
          <h1 className="font-lora text-primary font-bold text-5xl sm:text-7xl md:text-8xl max-w-[12ch]">
            {content?.title ? content.title : "Fetching title..."}
          </h1>
          <p className="font-outfit text-foreground text-base sm:text-lg max-w-[45ch] leading-6">
            {content.description
              ? `${content.description} ☕`
              : "Fetching description"}
          </p>
        </div>
        <ButtonBase className="mt-6" />
      </div>
      <div className="overflow-hidden hidden lg:flex relative h-[40vw] max-h-[700px] rounded-full w-[400px]">
        {content?.image ? (
          <Image
            fill
            className="object-cover"
            src={content.image}
            alt="image"
          />
        ) : (
          <p>Fetching Image...</p>
        )}
      </div>
    </div>
  );
}
