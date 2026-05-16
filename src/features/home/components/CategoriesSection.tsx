import {
  Wand2,
  Layout,
  BookOpen,
  Gamepad2,
  Megaphone,
  Smartphone,
  Code2,
  Video,
} from "lucide-react";
import { CategoryCard } from "./CategoryCard";

const categoriesData = [
  {
    title: "Graphic Design",
    Icon: Wand2,
    href: "/categories/graphic-design",
    iconColorClass: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Ui \\ Ux Design",
    Icon: Layout,
    href: "/categories/ui-ux-design",
    iconColorClass: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "models Ai",
    Icon: BookOpen,
    href: "/categories/models-ai",
    iconColorClass: "bg-yellow-500/10 text-yellow-600",
  },
  {
    title: "Game Development",
    Icon: Gamepad2,
    href: "/categories/game-development",
    iconColorClass: "bg-green-500/10 text-green-600",
  },
  {
    title: "Digital Marketing",
    Icon: Megaphone,
    href: "/categories/digital-marketing",
    iconColorClass: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Mobile Development",
    Icon: Smartphone,
    href: "/categories/mobile-development",
    iconColorClass: "bg-cyan-500/10 text-cyan-600",
  },
  {
    title: "Web Development",
    Icon: Code2,
    href: "/categories/web-development",
    iconColorClass: "bg-pink-500/10 text-pink-600",
  },
  {
    title: "Editing videos",
    Icon: Video,
    href: "/categories/editing-videos",
    iconColorClass: "bg-emerald-500/10 text-emerald-600",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-10 py-3 rounded-[30px] bg-primary/10 text-primary text-sm font-semibold mb-6">
            Features
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-[1.1]">
            Explore 100+ online courses now
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Access modern tools, interactive content, and expert resources to
            master new skills and stay competitive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {categoriesData.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              Icon={category.Icon}
              href={category.href}
              iconColorClass={category.iconColorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
