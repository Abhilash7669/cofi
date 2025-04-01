import { Button } from "@/components/ui/button";

type Props = {
  text?: string;
};

export default function ButtonOutline({ text = "View All"}: Props) {
  return (
    <Button
        variant="outline"
        className="rounded-full font-outfit border-2 border-button text-btn-outline hover:text-white px-6 text-base w-fit"
    >
      {text}
    </Button>
  )
}