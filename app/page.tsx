import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className=" overflow-hidden items-center justify-items-center flex absolute top-0 left-0 right-0 bottom-0 p-4 h-screen group bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#F0BCD4]/35 via-[#D82A31]/35 to-[#231F20]/35" id="New_body_div">
          <div className="bg-black/50 p-4 rounded-xl grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-full gap-16 font-[family-name:var(--font-geist-sans)] relative  m-auto lg:w-3/4">
            <img 
              className=" md:w-96 md:h-96 md:-top-16 absolute md:-left-24 w-60 h-60 -top-5 -left-16 object-cover overflow-visible md:rotate-45" 
              src="./comingsoon_bg2.png" />
            <img 
            className=" md:w-50 md:h-50 md:-bottom-4 absolute w-60 h-60 -bottom-10 -right-10 object-cover overflow-visible " 
            src="./comingsoon_bg.png" />
          {/* <img 
            className=" md:w-96 md:h-96 md:-bottom-24 absolute md:-right-24 w-60 h-60 -bottom-20 -right-20 " 
            id=""
            src="./comingsoon.png"
          />
          <img 
            className=" md:w-96 md:h-96 md:-top-24 absolute md:-left-24 w-60 h-60 -top-20 -left-20 " 
            id="comingsoon"
            src="./comingsoon.png"
          /> */}

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <Image
                src="/newlogo.png"
                alt="Skmei"
                width={400}
                height={200}
                priority
                className="m-auto p-2 bg-white rounded relative z-50"
              />

              <div className="text-center w-full md:max-w-xl relative z-50">
                <h1
                  className="bg-gradient-to-r from-[#D7FFF1] to-[#F7F052] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-5xl font-bold  mb-4">
                 Scheduled Maintenance in Progress
                </h1>
                <p className="text-lg text-white  backdrop-blur-sm rounded">Our website is undergoing maintenance. We'll return soon with a better and smoother experience.</p>
                <div className="mt-6 text-sm text-white">
                 
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
