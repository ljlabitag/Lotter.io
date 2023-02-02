import Randomizer from "./random";

export default function NumberGenerator() {
    return (
        Randomizer().map((number,index)=> {
            return (
            <div key={index} className="flex w-[8%] h-[100%] border-8 rounded-lg text-2xl items-center justify-center font-bold border-solid border-[#ff4d4d]">{number}</div>
            )
        })
    )
}