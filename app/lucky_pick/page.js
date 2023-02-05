import NumberGenerator from "@/components/lucky_pick_generator/number_generator";

export default function LuckyPick(props) {
    return (
            <div className="flex basis-4/5 bg-cover bg-[url('/images/lottery-wooden-balls-background.jpg')] backdrop-opacity-20">
                <div className="flex flex-col w-full justify-around content-center bg-[#ECECEC]/60 backdrop-brightness-[-65]">
                    <h1 className="text-6xl mx-auto font-bold text-[#ff4d4d] ">Lucky Pick</h1>
                    <p className="mx-auto">Select a lotto game</p>
                    <div id="betDiv">
                        <NumberGenerator 
                        betCount="0"
                        />
                    </div>
                </div>
            </div>
    )
}