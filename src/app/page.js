import Image from "next/image";

export default function Home() {
  return (
    <main>
    {/* Welcome Section */}
      <div className="flex flex-row">
        <div className="basis-3/5 pl-10 pt-6">
          <h2 className="text-6xl font-bold mb-4">
            Your Ultimate <br/>Companion in Playing <br/>the Philippine Lottery!
          </h2>  
          <p className="text-2xl">
            Welcome to Lotter.io! We provide you with the latest lotto results,
            <br/>lucky picks, and more! Stay updated, play smarter, and 
            <br/>never miss a chance to win big!
          </p>
        </div> 
        <div className="flex basis-2/5 justify-center items-center pr-14">
          <Image 
            src="/lottoballs.jpg" 
            alt="lotter.io" 
            width={288} 
            height={288} 
            className="w-[350px] h-[350px] rounded-full object-cover object-center  " 
          />
        </div>
      </div>

    {/* Featured Games Section */}
      <div>
        <p>Games</p>
      </div>

      <div>
        <p>Lucky Pick</p>
      </div>

      <div>
        <p>Contact Us</p>
      </div>
    </main>
  );
}
