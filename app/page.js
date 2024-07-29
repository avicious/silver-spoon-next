import Chef from "@/components/home/chef";
import Dish from "@/components/home/dish";
import Hero from "@/components/home/hero";
import Quote from "@/components/home/quote";
import Testimonials from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Quote />
      <Chef />
      <Dish />
      <Testimonials />
    </>
  );
}
