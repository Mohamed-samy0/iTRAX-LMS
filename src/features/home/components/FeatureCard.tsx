import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconColorClass: string;
}

export function FeatureCard({
  title,
  description,
  Icon,
  iconColorClass,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col p-8 bg-card text-card-foreground rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <div
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
          iconColorClass
        )}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
        {title}
      </h3>

      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
