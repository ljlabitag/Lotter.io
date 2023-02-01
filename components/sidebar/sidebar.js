import styles from "./sidebar.module.css";

export default function Sidebar() {
    return (
        <div className="flex flex-col basis-1/5 justify-start p-8 bg-[#FFC300]">
            <div className="flex flex-col mb-8">
                <div className="flex flex-col mb-4">
                    <label htmlFor="game" className="mb-1 text-sm font-medium text-gray-800">Select a lotto game</label>
                    <select id="game" className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 shadow">
                        <option selected>Choose a lotto game</option>
                        <option value="42">Lotto 6/42</option>
                        <option value="45">Megalotto 6/45</option>
                        <option value="49">Superlotto 6/49</option>
                        <option value="55">Grand Lotto 6/55</option>
                        <option value="58">Ultra Lotto 6/58</option>
                    </select>
                </div>

                <div className="flex flex-col my-4">
                    <label htmlFor="gamesNumber" className="mb-1 text-sm font-medium text-gray-800">Enter number of lucky pick/s:</label>
                    <input id="gamesNumber" type="number" min="1" max="10" placeholder="Number of games" className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 shadow" ></input>
                </div>
            </div>
            <div className="flex flex-col gap-4 my-auto">
                <button type="button" className="bg-gray-100 hover:bg-[#FF1818] hover:text-[#ECECEC] text-gray-800 font-bold py-2 px-4 rounded shadow items-center">
                    Pick Again
                </button> 
                <button type="button" className="bg-gray-100 hover:bg-[#FF1818] hover:text-[#ECECEC] text-gray-800 font-bold py-2 px-4 rounded shadow items-center">
                    Save
                </button>
            </div>
        </div>
    )
}