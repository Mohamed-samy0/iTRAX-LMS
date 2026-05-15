import { Users, BookOpenCheck, GraduationCap, FileText } from "lucide-react";
import { FeatureCard } from "./FeatureCard";
const featuresData = [
  {
    id: 1,
    title: "Dedicated Student Support",
    description:
      "Get help anytime with responsive support, ensuring a smooth and guided learning experience for everyone.",
    Icon: Users,
    iconColorClass: "text-[#00B4D8] bg-[#00B4D8]/10",
  },
  {
    id: 2,
    title: "Practical Course Assignments",
    description:
      "Apply what you learn with real assignments that reinforce skills and deepen your practical knowledge.",
    Icon: BookOpenCheck,
    iconColorClass: "text-[#9D4EDD] bg-[#9D4EDD]/10",
  },
  {
    id: 3,
    title: "Verified Course Certificates",
    description:
      "Earn official certificates upon completion to showcase skills and add credibility to your portfolio.",
    Icon: GraduationCap,
    iconColorClass: "text-[#E0A96D] bg-[#E0A96D]/10",
  },
  {
    id: 4,
    title: "Smart Quizzes Tool",
    description:
      "Test knowledge instantly with interactive quizzes designed to boost understanding and track progress effectively.",
    Icon: FileText,
    iconColorClass: "text-[#E76F51] bg-[#E76F51]/10",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-10 py-3 rounded-[30px] bg-primary/10 text-primary text-sm font-semibold mb-6">
            Features
          </div>
          <h2 className="text-3xl text-primary font-bold md:text-4xl lg:text-5xl leading-[1.2] mb-6">
            Master New Skills Using Advanced <br /> Learning Features
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Access modern tools, interactive content, and expert resources to
            master new skills and stay competitive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              Icon={feature.Icon}
              iconColorClass={feature.iconColorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
