import { motion } from "framer-motion";
import { Grab, Package, Trophy, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Grab,
    title: "Drop the Claw",
    description: "Connect your Solana wallet and choose a pack to play.",
  },
  {
    icon: Package,
    title: "Reveal Your Pull",
    description: "Watch the claw grab your NFT and reveal the card rarity.",
  },
  {
    icon: Trophy,
    title: "Collect or Trade",
    description: "Keep your NFT, list it on the marketplace, or trade with others.",
  },
  {
    icon: RefreshCw,
    title: "Sell Back",
    description: "Don't want it? Sell back at 85% instant buyback value.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Four simple steps to start grabbing NFTs from the claw machine.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="font-display text-xs text-muted-foreground mb-2">STEP {i + 1}</div>
              <h3 className="font-display text-base font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
