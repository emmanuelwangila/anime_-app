import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-row justify-center  gap-5">
        <h1 className="sm:text-6xl   text-5xl text-blue-500 lg:max-w-lg font-bold leading-[120%]">
          Dive into a set of
          <span className="text-teal-500">
            {" "}
            Animations in<span className="text-indigo-600 m-2 ">
              Anime
            </span>{" "}
            World
          </span>
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        {/* <Image src="/anime.png" alt="anime" fill className="object-contain" /> */}
      </div>
    </header>
  );
}

export default Hero;
