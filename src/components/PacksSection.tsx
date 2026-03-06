import { motion } from "framer-motion";
import { Sparkles, Minus, Plus } from "lucide-react";
import { useState } from "react";
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
    odds: "35% Rare, 10% Ultra Rare",
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
    odds: "50% Rare, 25% Ultra Rare",
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
    odds: "70% Rare, 40% Ultra Rare",
    inStock: true,
  },
];

const PackCard = ({ pack, index }: { pack: typeof packs[0]; index: number }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="card-game group"
    >
      <div className="relative p-6 flex justify-center bg-muted/30">
        {pack.inStock && (
          <span className="absolute top-3 right-3 text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded-full">
            In Stock
          </span>
        )}
        <img
          src={pack.image}
          alt={pack.name}
          className="h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-base font-semibold text-foreground">{pack.name}</h3>
          <span className={`text-xs font-semibold ${pack.rarityColor}`}>{pack.rarity}</span>
        </div>

        <p className="text-xs text-muted-foreground mb-4">{pack.odds}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="font-display text-xl font-bold text-foreground">
            {pack.price} <span className="text-sm text-muted-foreground">{pack.currency}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-7 w-7 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="font-display text-sm w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="h-7 w-7 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
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

const PacksSection = () => {
  return (
    <section id="packs" className="py-20 relative">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Choose Your <span className="text-primary">Pack</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Each pack contains unique NFT collectibles. Higher tiers mean rarer pulls.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {packs.map((pack, i) => (
            <PackCard key={pack.id} pack={pack} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PacksSection;
