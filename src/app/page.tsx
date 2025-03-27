import Hero from "@/components/landing-page/hero";
import getAxios from "@/types/api/getAxios";
import { HeroCMS } from "@/types/landing-page/hero";


export default async function Home() {

  const data = await getAxios<HeroCMS>(
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080"
  );

  return (
    <Hero content={data} />
  );
}


