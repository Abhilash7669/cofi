import About from "@/components/landing-page/about";
import Hero from "@/components/landing-page/hero";
import getAxios from "@/lib/api/getAxios";
import { HomeCMS } from "@/lib/types/landing-page/hero";

export default async function Home() {
  const { hero, about } = await getAxios<HomeCMS>("http://localhost:8080");

  return (
    <main className="pt-12 w-[92%] mx-auto">
      <Hero content={hero} />
      <About content={about} />
    </main>
  );
}
