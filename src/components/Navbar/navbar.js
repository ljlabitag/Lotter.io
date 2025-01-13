
export default function Navbar() {
    return(
        <nav className="flex flex-row w-full min-h-3 py-4 px-8 bg-[#7D0A0A] text-white">
            <div className="basis-1/2 font-semibold">
                <div className="text-xl">Lotter.io</div>
            </div>
            <div className="flex basis-1/2 flex-row text-center font-light justify-items-center">
                <div className="basis-1/5">Home</div>
                <div className="basis-1/5">Games</div>
                <div className="basis-1/5">Lucky Pick</div>
                <div className="basis-1/5">About</div>
                <div className="basis-1/5">Contact Us</div>
            </div>
        </nav>
    )
};