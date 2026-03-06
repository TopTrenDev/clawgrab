import { motion } from "framer-motion";
import { Sparkles, Minus, Plus, Package, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import packCommon from "@/assets/pack-common.png";
import packRare from "@/assets/pack-rare.png";
import packLegendary from "@/assets/pack-legendary.png";

const packs = [
  {
    id: 1,
    name: "Starter Pack",
    price: 0.5,
    currency: "SOL",
    image: packCommon,
    rarity: "Common",
    rarityColor: "text-primary",
    glowClass: "glow-cyan",
    odds: { rare: 35, ultraRare: 10, legendary: 2 },
    description: "Perfect for beginners. A solid chance at rare pulls with an affordable entry point.",
    contains: 3,
    inStock: true,
  },
  {
    id: 2,
    name: "Gold Rush Pack",
    price: 1.5,
    currency: "SOL",
    image: packRare,
    rarity: "Rare",
    rarityColor: "text-accent",
    glowClass: "glow-gold",
    odds: { rare: 50, ultraRare: 25, legendary: 8 },
    description: "Higher rarity odds and more cards per pack. The community favourite.",
    contains: 5,
    inStock: true,
  },
  {
    id: 3,
    name: "Legendary Pack",
    price: 3.0,
    currency: "SOL",
    image: packLegendary,
    rarity: "Legendary",
    rarityColor: "text-secondary",
    glowClass: "glow-purple",
    odds: { rare: 70, ultraRare: 40, legendary: 15 },
    description: "The ultimate pack. Guaranteed high-tier pulls with the best legendary odds.",
    contains: 7,
    inStock: true,
  },
];

const PackDetailCard = ({ pack, index }: { pack: typeof packs[0]; index: number }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12 }}
      className={`card-game group ${pack.glowClass}`}
    >
      <div className="relative p-8 flex justify-center bg-muted/30">
        {pack.inStock && (
          <span className="absolute top-3 right-3 text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded-full">
            In Stock
          </span>
        )}
        <img
          src={pack.image}
          alt={pack.name}
          className="h-64 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-bold text-foreground">{pack.name}</h3>
          <span className={`text-xs font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${pack.rarityColor} border-current/30`}>
            {pack.rarity}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{pack.description}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Package className="h-3.5 w-3.5" /> {pack.contains} cards</span>
          <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Verified on-chain</span>
        </div>

        {/* Odds bars */}
        <div className="space-y-2 pt-2">
          <p className="text-[10px] font-display uppercase tracking-wider text-muted-foreground">Drop Rates</p>
          {[
            { label: "Rare", value: pack.odds.rare, color: "bg-primary" },
            { label: "Ultra Rare", value: pack.odds.ultraRare, color: "bg-accent" },
            { label: "Legendary", value: pack.odds.legendary, color: "bg-secondary" },
          ].map((o) => (
            <div key={o.label} className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground w-20">{o.label}</span>
              <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${o.value}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className={`h-full rounded-full ${o.color}`}
                />
              </div>
              <span className="text-xs font-display font-bold text-foreground w-10 text-right">{o.value}%</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="font-display text-2xl font-bold text-foreground">
            {(pack.price * quantity).toFixed(1)} <span className="text-sm text-muted-foreground">{pack.currency}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="font-display text-sm w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
        </div>

        <button className="btn-neon w-full flex items-center justify-center gap-2 text-sm py-3">
          <Sparkles className="h-4 w-4" />
          Open Pack
        </button>
      </div>
    </motion.div>
  );
};

const Packs = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Choose Your <span className="text-primary text-glow-cyan">Pack</span>
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Each pack contains unique NFT collectibles. Higher tiers mean rarer pulls.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-6 sm:gap-10 mb-12"
        >
          {[
            { label: "Packs Opened", value: "24,891" },
            { label: "Legendaries Pulled", value: "1,203" },
            { label: "Total Volume", value: "42.5K SOL" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-lg sm:text-xl font-bold text-primary">{s.value}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packs.map((pack, i) => (
            <PackDetailCard key={pack.id} pack={pack} index={i} />
          ))}
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto grid sm:grid-cols-3 gap-6"
        >
          {[
            { icon: <Zap className="h-5 w-5 text-primary" />, title: "Instant Delivery", desc: "NFTs are minted and sent to your wallet immediately after opening." },
            { icon: <ShieldCheck className="h-5 w-5 text-primary" />, title: "Provably Fair", desc: "All odds are verifiable on-chain using Solana's randomness oracle." },
            { icon: <Sparkles className="h-5 w-5 text-primary" />, title: "Trade Anytime", desc: "List your pulls on the marketplace or trade directly with other players." },
          ].map((f) => (
            <div key={f.title} className="card-game p-5 text-center">
              <div className="flex justify-center mb-3">{f.icon}</div>
              <h4 className="font-display text-sm font-semibold text-foreground mb-1">{f.title}</h4>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Packs;
