import Image from "next/image";
import Hero from "./_components/home/hero";
import About from "./_components/home/about";
import Krida from "./_components/home/krida";
import Dokumentasi from "./_components/home/dokumentasi";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Krida />
      {/* <Dokumentasi /> */}
    </>
  );
}
