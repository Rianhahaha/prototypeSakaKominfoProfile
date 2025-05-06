import Bgtext from "../bgtext";
import Image from "next/image";
import KridaCard from "./component/kridaCard";

export default function Krida() {
  return (
    <>
      <section className="h-[720px]  flex items-center justify-center gap-2 relative overflow-hidden text-center container mx-auto">

        <div className="absolute h-full flex flex-col w-full p-[100px] z-[5]">
          <div className="w-full">
            <h1 className="font-Warp text-[56px] mb-3 text-main">Krida</h1>
          </div>
          <div className="w-full flex gap-[30px] justify-center">
            <KridaCard img="/home/mulmed.svg" title="Multimedia"/>
            <KridaCard img="/home/broadcast.svg" title="Broadcasting"/>
            <KridaCard img="/home/tele.svg" title="Telematika"/>

          </div>
        </div>
        <Image
          alt=""
          width={500}
          height={500}
          src="/bg.png"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem]"
        />
      </section>
    </>
  );
}
