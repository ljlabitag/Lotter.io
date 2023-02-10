"use client"

import { useState } from "react";
import NumberGenerator from "@/components/lucky_pick_generator/number_generator";

export default function LuckyPick() {
    const [gameValue, setGameValue] = useState('Select a lotto game');
    const [betCountValue, setBetCountValue] = useState(1);
    const numberGeneratorProps = {
        game: 'Select a lotto game',
        betCount: 0,
    }
    const [props, setProps] = useState(numberGeneratorProps);

    return (
        <div className="flex flex-row min-h-screen">
            <div className="flex flex-col basis-1/5 justify-start p-8 bg-[#FFC300]">
                <div className="flex flex-col mb-8">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="game" className="mb-1 text-sm font-medium text-gray-800">Select a lotto game</label>
                        <select name="game" value={gameValue} onChange={(e)=>setGameValue(e.target.value)} id="game"
                        className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 shadow">
                            <option>Select a lotto game</option>
                            <option value="Lotto 6/42">Lotto 6/42</option>
                            <option value="Megalotto 6/45">Megalotto 6/45</option>
                            <option value="Superlotto 6/49">Superlotto 6/49</option>
                            <option value="Grand Lotto 6/55">Grand Lotto 6/55</option>
                            <option value="Ultra Lotto 6/58">Ultra Lotto 6/58</option>
                        </select>
                    </div>

                    <div className="flex flex-col my-4">
                        <label htmlFor="betNumber" className="mb-1 text-sm font-medium text-gray-800">Enter number of lucky pick/s:</label>
                        <input name="betCount" value={betCountValue}  onChange={(e)=>setBetCountValue(e.target.value)} id="betNumber" type="number" min="1" max="10" placeholder="Number of bets" 
                        className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 shadow" ></input>
                    </div>
                </div>
                <div className="flex flex-col gap-4 my-auto">
                    <button type="button" onClick={()=>{setProps({game: gameValue, betCount: betCountValue})}} className="bg-gray-100 hover:bg-[#ff4d4d] hover:text-[#ECECEC] text-gray-800 font-bold py-2 px-4 rounded shadow items-center">
                        Pick Again
                    </button>
                    <button type="button" className="bg-gray-100 hover:bg-[#ff4d4d] hover:text-[#ECECEC] text-gray-800 font-bold py-2 px-4 rounded shadow items-center">
                        Save
                    </button>
                </div>
            </div>


            <div className="flex basis-4/5 bg-cover bg-[url('/images/lottery-wooden-balls-background.jpg')] backdrop-opacity-20">
                <div className="flex flex-col w-full justify-around content-center bg-[#ECECEC]/60 backdrop-brightness-[-65]">
                    <h1 className="text-6xl mx-auto font-bold text-[#ff4d4d] ">Lucky Pick</h1>
                    <p className="mx-auto">{gameValue}</p>
                    <div id="betDiv">
                        <NumberGenerator 
                            game={props.game}
                            betCount={props.betCount}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}