import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Rarity = "All" | "Common" | "Rare" | "Epic" | "Legendary";
type SortOption = "newest" | "price-low" | "price-high" | "rarity";

interface NFTItem {
  id: number;
  name: string;
  image: string;
  rarity: Exclude<Rarity, "All">;
  price: number;
  seller: string;
}

const rarityColors: Record<string, string> = {
  Common: "text-muted-foreground border-muted",
  Rare: "text-primary border-primary/40",
  Epic: "text-secondary border-secondary/40",
  Legendary: "text-accent border-accent/40",
};

const rarityGlow: Record<string, string> = {
  Common: "",
  Rare: "glow-cyan",
  Epic: "glow-purple",
  Legendary: "glow-gold",
};

const mockNFTs: NFTItem[] = [
  { id: 1, name: "Shadow Charizard", image: "/placeholder.svg", rarity: "Legendary", price: 12.5, seller: "7xKp...3nRq" },
  { id: 2, name: "Neon Pikachu", image: "/placeholder.svg", rarity: "Epic", price: 5.2, seller: "9mBz...1xLp" },
  { id: 3, name: "Crystal Eevee", image: "/placeholder.svg", rarity: "Rare", price: 2.8, seller: "4kWn...8vTr" },
  { id: 4, name: "Holo Mewtwo", image: "/placeholder.svg", rarity: "Legendary", price: 18.0, seller: "2jFx...6dNs" },
  { id: 5, name: "Volt Jolteon", image: "/placeholder.svg", rarity: "Rare", price: 1.9, seller: "8pCm...4hYz" },
  { id: 6, name: "Flame Arcanine", image: "/placeholder.svg", rarity: "Epic", price: 4.1, seller: "5tRn...2bKq" },
  { id: 7, name: "Frost Articuno", image: "/placeholder.svg", rarity: "Legendary", price: 22.3, seller: "1vGx...9wMp" },
  { id: 8, name: "Spark Magnemite", image: "/placeholder.svg", rarity: "Common", price: 0.5, seller: "6hDz...3cLr" },
  { id: 9, name: "Aqua Vaporeon", image: "/placeholder.svg", rarity: "Rare", price: 2.1, seller: "3xNm...7jTs" },
  { id: 10, name: "Moss Bulbasaur", image: "/placeholder.svg", rarity: "Common", price: 0.3, seller: "8kPz...1fWn" },
  { id: 11, name: "Phantom Gengar", image: "/placeholder.svg", rarity: "Epic", price: 6.7, seller: "4rBx...5tYm" },
  { id: 12, name: "Storm Zapdos", image: "/placeholder.svg", rarity: "Legendary", price: 15.8, seller: "9wCn...2hLp" },
];

const Marketplace = () => {
  const [search, setSearch] = useState("");
  const [rarity, setRarity] = useState<Rarity>("All");
  const [sort, setSort] = useState<SortOption>("newest");

  const filtered = mockNFTs
    .filter((n) => rarity === "All" || n.rarity === rarity)
    .filter((n) => n.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rarity") {
        const order = { Legendary: 0, Epic: 1, Rare: 2, Common: 3 };
        return order[a.rarity] - order[b.rarity];
      }
      return b.id - a.id;
    });

  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            NFT <span className="text-primary text-glow-cyan">Marketplace</span>
          </h1>
          <p className="text-muted-foreground max-w-lg">Browse, buy, and trade NFTs won from the claw machine.</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search NFTs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <select
                value={rarity}
                onChange={(e) => setRarity(e.target.value as Rarity)}
                className="h-10 pl-10 pr-8 rounded-lg bg-card border border-border text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:border-primary"
              >
                {(["All", "Common", "Rare", "Epic", "Legendary"] as Rarity[]).map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="h-10 pl-4 pr-8 rounded-lg bg-card border border-border text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:border-primary"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="rarity">Rarity</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((nft, i) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`card-game group cursor-pointer ${rarityGlow[nft.rarity]}`}
            >
              <div className="aspect-square bg-muted/30 flex items-center justify-center overflow-hidden">
                <img src={nft.image} alt={nft.name} className="w-3/4 h-3/4 object-contain opacity-60 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-semibold text-foreground truncate">{nft.name}</h3>
                  <span className={`text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${rarityColors[nft.rarity]}`}>
                    {nft.rarity}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Price</p>
                    <p className="text-sm font-display font-bold text-primary">{nft.price} SOL</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Seller</p>
                    <p className="text-xs text-muted-foreground font-mono">{nft.seller}</p>
                  </div>
                </div>
                <button className="w-full btn-neon text-xs py-2">Buy Now</button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-display text-lg">No NFTs found</p>
            <p className="text-sm mt-1">Try adjusting your filters.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
