import React from "react";
import home from '../../public/images/home.jpg'
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main>
      <Hero imgData={home} imgAlt="home" title="Home" />
    </main>
  );
}
