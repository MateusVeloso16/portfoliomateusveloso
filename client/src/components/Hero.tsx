import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Abstract Titanium Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>
      </div>

      <div className="container relative z-10 px-6 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wider mb-6 backdrop-blur-sm">
            AVAILABLE FOR NEW OPPORTUNITIES
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60"
        >
          Mateus Veloso
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          A diverse set of tools connecting precision with modern software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 text-base h-12 bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all hover:scale-105"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 text-base h-12 border-primary/20 bg-background/50 backdrop-blur-md hover:bg-primary/10 transition-all hover:scale-105"
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            Download CV <Download className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
