import Image from 'next/image';
import SmallBean from "@/assets/small_beans.svg";

type Props = {
    tag: string;
}

export default function CoffeeTag({ tag= "" }: Props) {

  return (
    <div className="flex items-center gap-1">
      <p className="font-outfit text-foreground text-base sm:text-lg">
        {tag ? tag : "Tag"}
      </p>
      <div className="relative h-7 w-7">
        <Image alt="small-bean" fill src={SmallBean} />
      </div>
    </div>
  );
}