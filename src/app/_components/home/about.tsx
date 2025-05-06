
import Image from "next/image";
export default function About() {
  return (
    <>
      <section className="h-[720px] p-[100px] flex items-center justify-center gap-2 relative overflow-hidden text-center container mx-auto">
        <div className="flex w-full h-full justify-between ">
          <div className="h-full flex flex-col justify-start text-right w-[415px] ">
            <div>
              <h1 className="font-Warp text-[56px] mb-3 text-main">Tentang Kami</h1>
              <p>
              Saka Kominfo Sleman merupakan wadah kegiatan bagi pramuka penegak dan pandega untuk meningkatkan pengetahuan dan keterampilan dalam bidang komunikasi informatika.
              </p>
            </div>
          </div>
          <div className="h-full flex flex-col justify-end text-left w-[415px] ">
            <div>
              <h1 className="font-Warp text-[56px] mb-3 text-main">Sejarah Kami</h1>
              <p>
              Saka Kominfo Sleman digagas untuk dibentuk pada saat pelaksanaan Kemah Bakti Racana (Kembara) #2 pada 8 Oktober 2018. 
                            </p>
            </div>
          </div>
        </div>
        <Image
          alt=""
          width={500}
          height={500}
          src="/bg.png"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[60rem]"
        />
        <Image
          alt=""
          width={500}
          height={500}
          src="/logo.png"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[15rem]"
        />
      </section>
    </>
  );
}
