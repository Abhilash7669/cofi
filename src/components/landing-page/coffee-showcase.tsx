import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import Text from "@/components/common/text/text";
import ButtonOutline from "@/components/common/button/button-outline";
import ShowcaseCarousel from "@/components/carousel/showcase-carousel";
import ProductCard from "@/components/common/card/product-card";

type Props = object;

export default async function CoffeeShowcase({ }: Props) {

  return (
    <section>
      <div className="flex space-y-4 md:space-y-0 flex-col md:flex-row md:items-center md:justify-between mb-14">
        <Text variant="subheading">Find Your Flavour</Text>
        <ButtonOutline />
      </div>
      <Tabs className="md:px-8 space-y-8" defaultValue="featured">
        <TabsList className=" min-w-sm h-13 p-2">
          <TabsTrigger value="featured" className="font-outfit">
            Featured
          </TabsTrigger>
          <TabsTrigger value="best-seller" className="font-outfit">
            Best Seller
          </TabsTrigger>
        </TabsList>
        <TabsContent value="featured">
          <ShowcaseCarousel>
            {[0, 1, 2].map((item) => (
              <ProductCard
                className="keen-slider__slide"
                key={item}
                item={item}
              />
            ))}
          </ShowcaseCarousel>
        </TabsContent>
        <TabsContent value="best-seller">
          <ShowcaseCarousel>
            {[0, 1, 2].map((item) => (
              <ProductCard
                className="keen-slider__slide"
                key={item}
                item={item}
              />
            ))}
          </ShowcaseCarousel>
        </TabsContent>
      </Tabs>
    </section>
  );
}