import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import Text from "@/components/common/text/text";
import ButtonOutline from "@/components/common/button/button-outline";
import CoffeeShowcaseCarousel from "@/components/carousel/coffee-showcase-carousel";

type Props = object;

export default async function CoffeeShowcase({ }: Props) {

  return (
    <section>
      <div className="flex space-y-4 md:space-y-0 flex-col md:flex-row md:items-center md:justify-between mb-14">
        <Text variant="subheading">Find Your Flavour</Text>
        <ButtonOutline />
      </div>
      <Tabs className="md:px-8 space-y-8" defaultValue="featured">
        <TabsList className=" min-w-2xs h-11 p-2">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="best-seller">Best Seller</TabsTrigger>
        </TabsList>
        <TabsContent value="featured">
          <CoffeeShowcaseCarousel />
        </TabsContent>
        <TabsContent value="best-seller">Best sellerCards here</TabsContent>
      </Tabs>
    </section>
  );
}