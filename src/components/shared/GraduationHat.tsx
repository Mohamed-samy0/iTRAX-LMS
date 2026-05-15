import Image from "next/image";
import graduationHat from "@/../public/assets/images/graduation-hat.png";

export default function GraduationHat() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-slate-50/50 border-s border-slate-200 p-12">
      <div className="w-full max-w-lg text-center">
        <div className="relative w-80 h-80 mx-auto mb-8 flex items-center justify-center">
          <Image
            src={graduationHat}
            alt="Instant Certificate"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Instant Certificate Access
        </h2>
        <p className="text-lg text-slate-600">
          Download certificates right after completion
        </p>
      </div>
    </div>
  );
}
