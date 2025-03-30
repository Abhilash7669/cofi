import { HeroCMS } from "@/lib/types/landing-page/hero";
import ButtonBase from "@/components/common/button/button-base";
import Image from "next/image";
import CoffeeTag from "@/components/common/tag/coffee-tag";
import Text from "@/components/common/text/text";

type Props = {
  content: HeroCMS;
};

export default function Hero({ content }: Props) {

  if(!content) return <section className="bg-background text-primary">No Hero content!</section>

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-[78%]">
        <CoffeeTag className="mb-4 lg:mb-0" tag={content.tag} />
        <div className="space-y-2 lg:space-y-1">
          <Text variant="title" className="max-w-[12ch]">
            {content?.title ? content.title : "Fetching title..."}
          </Text>
          <Text variant="body" className="max-w-[45ch]">
            {content.description
              ? `${content.description} ☕`
              : "Fetching description"}
          </Text>
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
    </section>
  );
}
