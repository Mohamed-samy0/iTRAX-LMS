import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, CalendarCheck } from "lucide-react";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl z-10 mx-auto px-4">
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-sm">
        <span className="text-xl font-bold">Welcome In iTRAX 🤩</span>
      </div>

      <h1 className="w-full text-4xl md:text-5xl lg:text-[56px] font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight text-center">
        Start Learning With Top Tutors
        <span className="block mt-2">Worldwide</span>
      </h1>
      <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
        Join thousands of learners advancing their skills through expert-led
        courses. Connect with top instructors, learn anytime, and unlock new
        career opportunities on one platform
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Button
          size="lg"
          className="rounded-xl px-8 text-base font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all hover:bg-black hover:text-white"
          asChild
        >
          <Link href="/courses">
            <BookOpen className="w-5 h-5 mr-2" />
            Enroll on Courses
          </Link>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="rounded-xl px-8 text-base font-semibold border-border text-foreground transition-all"
          asChild
        >
          <Link href="/contact">
            <CalendarCheck className="w-5 h-5 mr-2" />
            Book a Meeting
          </Link>
        </Button>
      </div>
    </div>
  );
}
