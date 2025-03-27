import Image from "next/image";
import { HeroCMS } from "@/types/landing-page/hero";

export default function Hero({ content }: { content: HeroCMS }) {

  return (
    <div className="min-h-screen bg-background">
      <p className="font-outfit">{content.tag ? content.tag : "Tag"}</p>
      <p className="font-lora">
        {content?.title ? content.title : "Fetching title..."}
      </p>
      <p className="font-outfit">
        {content.description ? content.description : "Fetching description"}
      </p>
      {content?.image ? (
        <Image height={500} width={500} src={content.image} alt="image" />
      ) : (
        <p>Fetching Image...</p>
      )}
    </div>
  );
}
