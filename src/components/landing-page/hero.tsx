import Image from "next/image";
import { HeroCMS } from "@/types/landing-page/hero";

type Props = {
  content: HeroCMS
}

export default function Hero({ content }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-outfit text-foreground">
          {content.tag ? content.tag : "Tag"}
        </p>
        <p className="font-lora text-primary">
          {content?.title ? content.title : "Fetching title..."}
        </p>
        <p className="font-outfit text-foreground">
          {content.description ? content.description : "Fetching description"}
        </p>
        <p className="bg-button text-white">
          Find your coffee
        </p>
      </div>
      <div className="overflow-hidden relative h-[40vw] max-h-[700px] rounded-full w-[400px]">
        {content?.image ? (
          <Image fill className="object-cover" src={content.image} alt="image" />
        ) : (
          <p>Fetching Image...</p>
        )}
      </div>
    </div>
  );
}
