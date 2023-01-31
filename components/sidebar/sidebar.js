import styles from "./sidebar.module.css";

export default function Sidebar() {
    return (
        <div className="flex flex-col basis-1/5 justify-evenly p-8 bg-[#FFC300]">
            <div className="flex flex-row ">
                <a>Hello</a>
            </div>
            <div className="flex flex-col gap-4">
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