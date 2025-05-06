export default function Bgtext({ text }: { text: string }) {
  return (
    <>
      <div className="w-full text-[140px] font-Warp opacity-20">
        <div
          className="text-wrap  leading-[100%] text-transparent"
          style={{
            WebkitTextStroke: "1px #FFFFFF",
          }}
        >
          <div
            className="flex flex-col items-center justify-center "
            style={{ paintOrder: "stroke fill" }}
          >
            <div>{text}</div>
            <div>{text}</div>
            <div>{text}</div>
            <div>{text}</div>
          </div>
        </div>
      </div>
    </>
  );
}
