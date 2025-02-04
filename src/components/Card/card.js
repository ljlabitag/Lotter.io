import Image from "next/image";

export default function Card({ title, description, image }) {
    return (
        <div className="w-80 h-85 bg-[#A1E3F9] shadow-lg rounded-2xl overflow-hidden mt-8">
            <div className="flex justify-center w-full pt-8 max-h-[200px]">
                <Image 
                    src={image} 
                    alt={title} 
                    width={200} 
                    height={200} 
                    />
            </div>
            <div className="p-8">
                <h1 className="text-2xl font-bold my-2">{title}</h1>
                <p className="text-l">{description}</p>
            </div>
        </div>
    );
}