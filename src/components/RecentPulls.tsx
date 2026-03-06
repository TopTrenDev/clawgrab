import { motion } from "framer-motion";

const recentPulls = [
  { user: "0x3F...a9B2", card: "Holographic Charizard", rarity: "Ultra Rare", value: "4.2 SOL", time: "2m ago" },
  { user: "0x7A...c4D1", card: "Shadow Mewtwo", rarity: "Legendary", value: "8.5 SOL", time: "5m ago" },
  { user: "0xB2...e8F3", card: "Crystal Pikachu", rarity: "Rare", value: "1.8 SOL", time: "8m ago" },
  { user: "0x1C...d7A6", card: "Neon Gengar", rarity: "Ultra Rare", value: "3.1 SOL", time: "12m ago" },
  { user: "0x9E...f2B8", card: "Prismatic Eevee", rarity: "Rare", value: "1.2 SOL", time: "15m ago" },
];

const rarityColors: Record<string, string> = {
  "Rare": "text-primary",
  "Ultra Rare": "text-accent",
  "Legendary": "text-secondary",
};

const RecentPulls = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Recent <span className="text-primary">Pulls</span>
          </h2>
          <p className="text-muted-foreground">See what others are grabbing from the claw machine.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto rounded-xl border border-border overflow-hidden">
          <div className="grid grid-cols-5 gap-4 px-5 py-3 bg-muted/50 text-xs font-display text-muted-foreground tracking-wide">
            <span>PLAYER</span>
            <span className="col-span-2">CARD</span>
            <span>VALUE</span>
            <span className="text-right">TIME</span>
          </div>
          {recentPulls.map((pull, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-5 gap-4 px-5 py-3.5 border-t border-border hover:bg-muted/30 transition-colors items-center"
            >
              <span className="text-sm text-foreground font-mono">{pull.user}</span>
              <div className="col-span-2">
                <span className="text-sm text-foreground">{pull.card}</span>
                <span className={`ml-2 text-xs font-semibold ${rarityColors[pull.rarity] || "text-muted-foreground"}`}>
                  {pull.rarity}
                </span>
              </div>
              <span className="text-sm font-display font-semibold text-foreground">{pull.value}</span>
              <span className="text-xs text-muted-foreground text-right">{pull.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPulls;
