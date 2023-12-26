import Hero from "@/app/_components/Hero";
import React from "react";
import Reliability from "../../../../public/images/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <main>
      <Hero imgData={Reliability} imgAlt="home" title="Reliability Page" />
    </main>
  );
}
