import Bgtext from "../bgtext";

export default function Hero() {
  return (
    <>
      <section className="h-[720px] px-[300px] flex items-center justify-center gap-2 relative overflow-hidden text-center container mx-auto">
        <div className=" leading-[1.2] flex flex-col justify-end h-full py-[50px] ">
          <h1 className="font-Warp text-[56px] mb-3">SAKA KOMINFO SLEMAN</h1>
          <p className="text-[32px">
            "Ikhlas Bakti Bina Mandiri Pandu Bumi dengan Informasi"
          </p>

          <div className="w-full mt-6">
            <a
              href=""
              className=" w-fit px-[40px] py-3 border-2 border-main text-lg bg-transparent text-white font-Warp rounded-full hover:bg-white/10 hovered"
            >
              {" "}
              Explore More!
            </a>

          </div>
        </div>

        <video
          src="/home/bumper.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <span className="absolute top-0 -z-10 w-full h-[70%] bg-gradient-to-b from-black to-transparent"></span>
        <span className="absolute bottom-0 -z-10 w-full h-full bg-gradient-to-b from-transparent to-black"></span>
      </section>
    </>
  );
}
