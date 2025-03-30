import About from "@/components/landing-page/about";
import Hero from "@/components/landing-page/hero";
import getAxios from "@/lib/api/getAxios";
import { HomeCMS } from "@/lib/types/landing-page/hero";

export default async function Home() {
  const { hero, about } = await getAxios<HomeCMS>(
    process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : ""
  );

  return (
    <main className="pt-24 lg:pt-12 w-[92%] mx-auto space-y-24">
      <Hero content={hero} />
      <About content={about} />
    </main>
  );
}
