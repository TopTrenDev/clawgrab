import { motion } from "framer-motion";
import { Gamepad2, ArrowDown } from "lucide-react";
import clawMachineImg from "@/assets/claw-machine-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-medium text-primary tracking-wide">LIVE ON SOLANA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6">
              Grab Your{" "}
              <span className="text-primary text-glow-cyan">NFT</span>
              <br />
              Treasures
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Drop the claw, grab a pack, and reveal rare Pokémon-style NFT collectibles. 
              Trade, hold, or sell — your luck, your call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#packs" className="btn-neon flex items-center justify-center gap-2 text-base px-8 py-4">
                <Gamepad2 className="h-5 w-5" />
                Play Now
              </a>
              <button className="btn-neon-outline flex items-center justify-center gap-2 text-base px-8 py-4">
                How It Works
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {[
                { value: "12.4K", label: "NFTs Grabbed" },
                { value: "3.2K", label: "Players" },
                { value: "845", label: "SOL Volume" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Claw machine */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-[60px]" />
              <img
                src={clawMachineImg}
                alt="NFT Claw Machine filled with collectible cards"
                className="relative rounded-2xl border border-border w-full max-w-[500px] animate-float"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -top-4 -right-4 rounded-xl bg-card border border-primary/30 px-4 py-2 glow-cyan"
              >
                <div className="text-xs text-muted-foreground">Next Drop</div>
                <div className="font-display text-sm font-bold text-primary">02:34:12</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
