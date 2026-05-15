import Image from "next/image";
import { HeroContent } from "./HeroContent";
import { HeroVisuals } from "./HeroVisuals";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen -mt-28 pt-32 pb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-[#9fcfdf] via-[#F4F9FC] to-white -z-10" />

      <div className="absolute top-12 left-0 w-20 sm:w-28 animate-float-slow z-0">
        <Image
          src="/assets/images/Group(2).png"
          alt=""
          width={120}
          height={70}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute top-36 left-[6%] w-28 sm:w-40 animate-float-medium z-0">
        <Image
          src="/assets/images/Group(3).png"
          alt=""
          width={200}
          height={120}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute top-20 right-0 w-24 sm:w-36 animate-float-slow z-0">
        <Image
          src="/assets/images/Group(1).png"
          alt=""
          width={160}
          height={100}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute top-44 right-[8%] w-20 sm:w-28 animate-float-medium z-0">
        <Image
          src="/assets/images/Group.png"
          alt=""
          width={120}
          height={70}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-24 left-[3%] w-24 sm:w-36 animate-float-slow z-0">
        <Image
          src="/assets/images/Group(3).png"
          alt=""
          width={200}
          height={120}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-48 left-[10%] w-16 sm:w-24 animate-float-medium z-0">
        <Image
          src="/assets/images/Group(2).png"
          alt=""
          width={120}
          height={70}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-28 right-[4%] w-20 sm:w-28 animate-float-medium z-0">
        <Image
          src="/assets/images/Group.png"
          alt=""
          width={120}
          height={70}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-52 right-[12%] w-16 sm:w-20 animate-float-slow z-0">
        <Image
          src="/assets/images/Group(1).png"
          alt=""
          width={100}
          height={60}
          className="w-full h-auto"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex flex-col items-center text-center">
          <HeroContent />
          <HeroVisuals />
        </div>
      </div>
    </section>
  );
}
