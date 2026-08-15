import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WorkTeaser } from "@/components/home/WorkTeaser";
import { Process } from "@/components/home/Process";
import { Capabilities } from "@/components/home/Capabilities";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WorkTeaser />
      <Process />
      <Capabilities />
      <CtaBand />
    </>
  );
}
