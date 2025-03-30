import ButtonBase from "@/components/common/button/button-base";
import Text from "@/components/common/text/text";
import { AboutCMS } from "@/lib/types/landing-page/hero";

type Props = {
  content: AboutCMS;
};

export default function About({ content }: Props) {

  if(!content) return (
    <section className="bg-background text-primary">
      Loading About content
    </section>
  );

  return (
    <section className="flex flex-col lg:items-center justify-center space-y-8">
      <div className="space-y-4">
        <Text variant="title" className="font-semibold lg:text-center lg:mx-auto max-w-[10ch] lg:max-w-[14ch]">
          {content.title}☕
        </Text>
        <Text variant="body" className="lg:text-center max-w-[68ch]">
          {content.description}
        </Text>
      </div>
      <ButtonBase className="w-fit hidden lg:flex" />
    </section>
  );
}
