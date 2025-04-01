import { cn } from "@/lib/utils";

type Props = {
    className?: string;
    variant: "title" | "body" | "subheading";
    children: React.ReactNode;
}

export default function Text({ className, children, variant="body" }: Props) {

    const styles: Record<Props["variant"], string> = {
      title: "font-bold text-5xl sm:text-7xl md:text-8xl font-lora text-primary",
      subheading: "font-semibold text-3xl sm:text-5xl md:text-6xl text-primary font-lora",
      body: "text-base sm:text-lg leading-6 font-outfit text-foreground",
    };

    return <p className={cn(styles[variant], className)}>{children}</p>;
}