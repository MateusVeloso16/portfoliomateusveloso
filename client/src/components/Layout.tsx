import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const goContact = () => {
    setMobileMenuOpen(false);
    setLocation("/contact");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border/40 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div
            className="text-xl font-bold tracking-tight cursor-pointer flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-primary">●</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}

            <Button
              variant="default"
              size="sm"
              className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)]"
              onClick={goContact}
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/40 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-lg font-medium text-left py-2 border-b border-border/10"
              >
                {link.name}
              </button>
            ))}

            <Button className="w-full mt-4 rounded-full" onClick={goContact}>
              Contact Me
            </Button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-0">{children}</main>

      {/* Footer */}
      <footer className="bg-muted/20 border-t border-border/40 py-12 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mateus Veloso. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/mateus-veloso-b18629a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/MateusVeloso16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>

            <button
              onClick={goContact}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Contact Me"
            >
              <MessageSquare size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
