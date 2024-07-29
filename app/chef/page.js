import ChefHero from "@/components/chef/chef-hero";
import Chefs from "@/components/chef/chefs";

export const metadata = {
  title: "Chefs | Silver Spoon",
  description:
    "Silver Spoon is a popular multi-cuisine restaurant known for its delicious food and quick delivery. They offer home delivery, catering, and have multiple locations in Delhi and Gurgaon.",
};

export default function ChefPage() {
  return (
    <>
      <ChefHero />
      <Chefs />
    </>
  );
}
