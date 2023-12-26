import Hero from "@/app/_components/Hero";
import React from "react";
import Performance from "@/../../public/images/performance.jpg";

export default function PerformancePage() {
  return (
    <main>
      <Hero imgData={Performance} imgAlt="home" title="Performance Page" />
    </main>
  );
}
