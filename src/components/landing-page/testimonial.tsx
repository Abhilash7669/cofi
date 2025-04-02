import TestimonialCarousel from "@/components/carousel/testimonial-carousel";
import TestimonialCard from "@/components/common/testimonial/testimonial-card";
import { TestimonialData } from "@/lib/types/testimonial/testimonial";


type Props = object;

const DUMMY_DATA: TestimonialData[] = [
  {
    quote: "I love coffee, and I love building things. So, I thought—why not mix the two? This project started as a way to sharpen my skills, but it quickly became something more. I’ve always enjoyed tinkering with design and technology—bringing ideas to life, both in how they look and how they work ",
    name: "John Doe",
    position: "Founder, CEO",
    image: ""
  },
  {
    quote: "I love coffee, and I love building things. So, I thought—why not mix the two? This project started as a way to sharpen my skills, but it quickly became something more. I’ve always enjoyed tinkering with design and technology—bringing ideas to life, both in how they look and how they work ",
    name: "John Doe",
    position: "Founder, CEO",
    image: ""
  },
  {
    quote: "I love coffee, and I love building things. So, I thought—why not mix the two? This project started as a way to sharpen my skills, but it quickly became something more. I’ve always enjoyed tinkering with design and technology—bringing ideas to life, both in how they look and how they work ",
    name: "John Doe",
    position: "Founder, CEO",
    image: ""
  },
];

export default function Testimonial({}: Props) {
  return (
    <section className="bg-[url('/coffee_beans.png')] h-screen bg-cover bg-center relative flex items-center justify-center">
      <div className="absolute top-0 left-0 h-full w-full z-10 bg-black/40"></div>
      <div className="z-20 flex flex-col items-center justify-center max-w-2xl w-[92%]">
        <p className="text-6xl font-lora text-testimonial mb-4">
          Sips of Satisfaction
        </p>
        <TestimonialCarousel>
          {DUMMY_DATA.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </TestimonialCarousel>
      </div>
    </section>
  );
}
