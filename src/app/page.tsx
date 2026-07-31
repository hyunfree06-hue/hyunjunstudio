import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { Values } from "@/components/home/Values";
import { Services } from "@/components/home/Services";
import { ReviewsZigzag } from "@/components/home/ReviewsZigzag";
import { Process } from "@/components/home/Process";
import { Faq } from "@/components/home/Faq";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Values />
      <Services />
      <ReviewsZigzag />
      <Process />
      <Faq />
      <CtaBand />
    </>
  );
}
