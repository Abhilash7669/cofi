import Image from "next/image";
import DummyImg from "@/assets/dummy_img.png";
import { Button } from "@/components/ui/button";

type Props = {
  item: number;
  className?: string;
};

export default function ProductCard({ item, className }: Props) {
  return (
    <div
      key={item}
      className={`border border-primary-dark bg-card rounded-lg ${className}`}
    >
      <div className="relative h-[50vw] md:h-[20vw] max-h-80 w-full">
        <Image fill src={DummyImg} className="object-cover" alt="dummyimg" />
      </div>
      <div className="p-6 space-y-3">
        <div className="space-y-2">
          <p className="rounded-full border-2 border-[#ABABAB] text-[0.7rem] px-4 py-[0.15rem] bg-[#374151] text-white w-fit flex items-center justify-center">
            Instant
          </p>
          <div className="flex items-center justify-between">
            <p className="font-lora font-semibold text-3xl text-primary">
              Dark Roast
            </p>
            <p className="font-outfit text-foreground">500₹</p>
          </div>
        </div>
        <p className="font-outfit text-foreground leading-6">
          A rich, deep roast of our Arabica Beans. Very Chocolately - goes great
          with milk!
        </p>
        <Button variant="default" className="rounded-full w-full">
          View Details
        </Button>
      </div>
    </div>
  );
}
