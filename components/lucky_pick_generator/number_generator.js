import Randomizer from "./random";

export default function NumberGenerator(props) {
    const betsArray = [];

    for (let i=0; i < parseInt(props.betCount); i++) {
        betsArray.push(Randomizer().map((number,index)=>{return(
            <div key={index} className="flex w-[8%] h-[100%] border-8 rounded-lg text-2xl items-center justify-center font-bold border-solid bg-[#ECECEC] border-[#ff4d4d]">{number}</div>
        )}));
    }

    return (
        betsArray.map((betArray,index)=> {
            return (
                <div key={index} className="flex flex-row h-[180px] p-8 justify-around mb-8">
                    {betArray}
                </div>
            )
        })
    )
}

