import Image from "next/image";
import Card from "../components/Card/card";

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
              <div className="mt-32">
                    <div className="flex justify-center">
                        <h3 className="text-4xl font-bold">Featured Games</h3>
                    </div>
                    <div className="flex justify-evenly">
                        <Card 
                            title="6/42 Lotto" 
                            description="The 6/42 Lotto is a nationwide lottery game drawn every Tuesday, Thursday, and Saturday. The jackpot prize starts at P5,940,000." 
                            image="/lotto games images/Lotto_642_Logo_1995.webp"
                        />
                        <Card 
                            title="6/45 Mega Lotto" 
                            description="The 6/45 Mega Lotto is a nationwide lottery game drawn every Monday, Wednesday, and Friday. The jackpot prize starts at P8,910,000." 
                            image="/lotto games images/Mega_Lotto_645_Logo_1997.webp"
                        />
                        <Card 
                            title="6/49 Super Lotto" 
                            description="The 6/49 Super Lotto is a nationwide lottery game drawn every Tuesday, Thursday, and Sunday. The jackpot prize starts at P15,840,000." 
                            image="/lotto games images/Super_Lotto_649_Logo_2000.webp"
                        />
                        <Card 
                            title="6/55 Grand Lotto" 
                            description="The 6/55 Grand Lotto is a nationwide lottery game drawn every Monday, Wednesday, and Saturday. The jackpot prize starts at P29,700,000." 
                            image="/lotto games images/Grand_Lotto_655_Logo_2010.webp"
                        />
                        <Card 
                            title="6/58 Ultra Lotto" 
                            description="The 6/58 Ultra Lotto is a nationwide lottery game drawn every Tuesday, Friday, and Sunday. The jackpot prize starts at P49,500,000." 
                            image="/lotto games images/Ultra_Lotto_658_Logo_2015.webp"
                        />
                    </div>
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
