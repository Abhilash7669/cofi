import About from "@/components/landing-page/about";
import CoffeeShowcase from "@/components/landing-page/coffee-showcase";
import Hero from "@/components/landing-page/hero";
import Testimonial from "@/components/landing-page/testimonial";
import getAxios from "@/lib/api/getAxios";
import { HomeCMS } from "@/lib/types/landing-page/hero";

export default async function Home() {
  const { hero, about } = await getAxios<HomeCMS>(
    process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : ""
  );

  return (
    <main className="space-y-24">
      <div className="pt-24 lg:pt-12 w-[92%] mx-auto space-y-24">
        <Hero content={hero} />
        <About content={about} />
        <CoffeeShowcase />
      </div>
      <Testimonial />
    </main>
  );
}
