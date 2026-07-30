import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-accent-foreground font-mono text-sm">
              AI
            </div>
            <span>AI-Ready</span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link href="/">
            <Button variant="ghost" size="sm">Products</Button>
          </Link>
          <Link href="/seo">
            <Button variant="ghost" size="sm">SEO View</Button>
          </Link>
          <Link href="/aeo">
            <Button variant="ghost" size="sm">AEO View</Button>
          </Link>
          <Link href="/ai-knowledge">
            <Button variant="ghost" size="sm">AI Knowledge</Button>
          </Link>
          <Link href="/car-audio-fitment">
            <Button variant="ghost" size="sm">Car Audio Case Study</Button>
          </Link>
        </nav>

        <div className="flex md:hidden">
          <Link href="/car-audio-fitment">
            <Button variant="outline" size="sm">Case Study</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
