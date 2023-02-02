import NumberGenerator from "@/components/lucky_pick_generator/number_generator";

export default function LuckyPick() {
    return (
            <div className="flex basis-4/5 bg-[#ECECEC]">
                <div className="flex flex-col w-full justify-around content-center">
                    <h1 className="text-6xl mt-12 mx-auto font-bold text-[#ff4d4d]">LUCKY PICK</h1>
                    <p className="mt-4 mx-auto">Select a lotto game</p>
                    <div className="flex flex-row h-[200px] p-8 justify-around mb-8">
                        <NumberGenerator 
                            gameNumber=""
                        />
                    </div>
                </div>
            </div>
    )
}