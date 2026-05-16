import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  Icon: LucideIcon;
  href: string;
  iconColorClass: string;
}

export function CategoryCard({
  title,
  Icon,
  href,
  iconColorClass,
}: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-card border border-border/40 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full min-h-[220px]">
        <div
          className={cn(
            "w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
            iconColorClass
          )}
        >
          <Icon className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-bold text-foreground text-center group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Link>
  );
}
