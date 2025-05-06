import Image from "next/image";

interface KridaCardProps {
  title: string;
  img: string;
}

export default function KridaCard({ title, img }: KridaCardProps) {
  return (
    <div className="krida-card w-[400px] h-[400px]  backdrop-blur-sm rounded-[40px] border-2 border-main grouptransition-all duration-200 ease-in-out relative group hover:border-transparent cursor-pointer">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0055FF] to-[#00AEFF] opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out rounded-[40px]" />
      <div className="absolute top-0 left-0 w-full flex flex-col justify-end h-full p-[30px] gap-3">
        <div className="w-full flex justify-center group-hover:-translate-y-[140px] group-hover:-rotate-12 transition-all duration-200 ease-in-out">
          <Image src={img} alt="" width={250} height={250} />
        </div>
        <div className="w-full">
          <h1 className="font-Warp text-[48px] text-main group-hover:text-white">{title}</h1>
        </div>
      </div>
    </div>
  );
}
