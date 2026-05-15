import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import Logo from "@/../public/assets/images/logo.png";

export function MarketingNavbar() {
  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-5xl flex items-center justify-between px-6 py-3 bg-white/30 backdrop-blur-md border border-slate-200/50 shadow-sm rounded-full">
        <div className="flex items-center">
          <Link
            href="/"
            className="font-bold text-2xl text-primary flex items-center gap-1"
          >
            <Image src={Logo} width={102} height={32} alt="Logo" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
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
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors">
            <Globe className="w-4 h-4" />
            <span>العربية</span>
          </button>

          <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
          <Button
            variant="outline"
            className="rounded-full px-6 border-blue-200 text-primary hover:bg-blue-50 hover:text-slate-700"
          >
            <Link href="/login">Log in</Link>
          </Button>
          <Button className="rounded-full px-6">
            <Link href="/signup">Sign UP</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
