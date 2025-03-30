import Image from 'next/image';
import SmallBean from "@/assets/small_beans.svg";
import { cn } from '@/lib/utils';

type Props = {
  tag: string;
  className?: string;
};

export default function CoffeeTag({ tag = "", className= "" }: Props) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <p className="font-outfit text-foreground text-base sm:text-lg">
        {tag ? tag : "Tag"}
      </p>
      <div className="relative h-7 w-7">
        <Image alt="small-bean" fill src={SmallBean} />
      </div>
    </div>
  );
}