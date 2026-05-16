import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import Logo from "@/../public/assets/images/logo.png";

export function MarketingNavbar() {
  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-5xl flex items-center justify-between px-6 py-3 bg-background/60 backdrop-blur-md border border-border/50 shadow-sm rounded-full transition-colors duration-300">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image src={Logo} width={102} height={32} alt="Logo" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors group">
            Courses
            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </div>

          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/events" className="hover:text-primary transition-colors">
            Events
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <button className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Globe className="w-4 h-4" />
            <span>العربية</span>
          </button>

          <div className="h-6 w-px bg-border hidden md:block"></div>
          <Button
            variant="outline"
            className="rounded-[10px] px-6 border-border text-foreground hover:bg-muted transition-colors hover:text-primary"
            asChild
          >
            <Link href="/login">Log in</Link>
          </Button>
          <Button
            className="rounded-[10px] px-6 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
            asChild
          >
            <Link href="/signup">Sign UP</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
