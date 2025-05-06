export default function Button({text}:{text:string}) {
    return (
        <div className="w-fit px-[40px] py-3 border border-main text-[30px] bg-main text-background font-Warp rounded-full">
            {" "}
            {text}
        </div>
    );
}       