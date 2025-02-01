
export default function Navbar() {
    return(
        <nav className="flex flex-row w-full min-h-3 rounded-md border-black border-2 p-3 mb-16 text-[#FF1818]">
            <div className="basis-1/2 font-bold">
                <div className="text-xl">Lotter.io</div>
            </div>
            <div className="flex basis-1/2 flex-row text-center font-semibold justify-items-center">
                <div className="basis-1/4">Home</div>
                <div className="basis-1/4">Games</div>
                <div className="basis-1/4">Lucky Pick</div>
                <div className="basis-1/4">Lotto Results</div>
            </div>
        </nav>
    )
};