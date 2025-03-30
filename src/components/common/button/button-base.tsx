import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaShoppingCart } from "react-icons/fa";

type Props = {
    className?: string;
};

export default function ButtonBase({ className }: Props) {
  return (
    <Button
      className={cn("rounded-full !p-6 flex gap-1 font-outfit font-medium", className)}
    >
      Find your Coffee <FaShoppingCart />
    </Button>
  );
}