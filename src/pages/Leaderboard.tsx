import { motion } from "framer-motion";
import { Trophy, Medal, Crown, Flame } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Player {
  rank: number;
  wallet: string;
  username: string;
  totalWinnings: number;
  nftsCollected: number;
  totalPlays: number;
}

const players: Player[] = [
  { rank: 1, wallet: "7xKp...3nRq", username: "CryptoKing", totalWinnings: 342.5, nftsCollected: 89, totalPlays: 412 },
  { rank: 2, wallet: "9mBz...1xLp", username: "NFTWhale", totalWinnings: 287.1, nftsCollected: 76, totalPlays: 356 },
  { rank: 3, wallet: "4kWn...8vTr", username: "ClawMaster", totalWinnings: 215.8, nftsCollected: 64, totalPlays: 298 },
  { rank: 4, wallet: "2jFx...6dNs", username: "SolHunter", totalWinnings: 178.3, nftsCollected: 52, totalPlays: 245 },
  { rank: 5, wallet: "8pCm...4hYz", username: "DiamondHands", totalWinnings: 156.9, nftsCollected: 47, totalPlays: 210 },
  { rank: 6, wallet: "5tRn...2bKq", username: "MoonShot", totalWinnings: 134.2, nftsCollected: 41, totalPlays: 189 },
  { rank: 7, wallet: "1vGx...9wMp", username: "GrabLord", totalWinnings: 112.7, nftsCollected: 35, totalPlays: 167 },
  { rank: 8, wallet: "6hDz...3cLr", username: "TokenTrader", totalWinnings: 98.4, nftsCollected: 30, totalPlays: 142 },
  { rank: 9, wallet: "3xNm...7jTs", username: "ApeCollector", totalWinnings: 76.1, nftsCollected: 24, totalPlays: 118 },
  { rank: 10, wallet: "8kPz...1fWn", username: "WebThreeMax", totalWinnings: 54.6, nftsCollected: 18, totalPlays: 95 },
];

const topColors = [
  "from-accent/20 to-accent/5 border-accent/40",
  "from-muted/40 to-muted/10 border-muted-foreground/30",
  "from-neon-pink/20 to-neon-pink/5 border-neon-pink/40",
];

const topIcons = [
  <Crown className="h-6 w-6 text-accent" />,
  <Medal className="h-6 w-6 text-muted-foreground" />,
  <Medal className="h-6 w-6 text-neon-pink" />,
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            <Trophy className="inline h-8 w-8 text-accent mr-2 -mt-1" />
            Leader<span className="text-primary text-glow-cyan">board</span>
          </h1>
          <p className="text-muted-foreground max-w-lg">Top players ranked by total winnings on ClawGrab.</p>
        </motion.div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {players.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.rank}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative card-game bg-gradient-to-b ${topColors[i]} p-6 text-center ${i === 0 ? "md:order-2 md:-mt-4" : i === 1 ? "md:order-1" : "md:order-3"}`}
            >
              <div className="flex justify-center mb-3">{topIcons[i]}</div>
              <p className="font-display text-3xl font-black text-foreground mb-1">#{p.rank}</p>
              <p className="font-display text-sm font-bold text-foreground">{p.username}</p>
              <p className="text-xs text-muted-foreground font-mono mb-4">{p.wallet}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Winnings</p>
                  <p className="text-sm font-display font-bold text-primary">{p.totalWinnings} SOL</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">NFTs</p>
                  <p className="text-sm font-display font-bold text-foreground">{p.nftsCollected}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Plays</p>
                  <p className="text-sm font-display font-bold text-foreground">{p.totalPlays}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-game overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-display text-xs uppercase tracking-wider text-muted-foreground">Rank</th>
                  <th className="text-left p-4 font-display text-xs uppercase tracking-wider text-muted-foreground">Player</th>
                  <th className="text-right p-4 font-display text-xs uppercase tracking-wider text-muted-foreground">Winnings</th>
                  <th className="text-right p-4 font-display text-xs uppercase tracking-wider text-muted-foreground hidden sm:table-cell">NFTs</th>
                  <th className="text-right p-4 font-display text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">Plays</th>
                </tr>
              </thead>
              <tbody>
                {players.map((p, i) => (
                  <motion.tr
                    key={p.rank}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.03 }}
                    className={`border-b border-border/50 transition-colors hover:bg-muted/30 ${p.rank <= 3 ? "bg-muted/10" : ""}`}
                  >
                    <td className="p-4">
                      <span className={`font-display font-bold ${p.rank === 1 ? "text-accent" : p.rank === 2 ? "text-muted-foreground" : p.rank === 3 ? "text-neon-pink" : "text-foreground"}`}>
                        {p.rank <= 3 && <Flame className="inline h-3 w-3 mr-1 -mt-0.5" />}
                        #{p.rank}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="font-display text-sm font-semibold text-foreground">{p.username}</p>
                      <p className="text-xs text-muted-foreground font-mono">{p.wallet}</p>
                    </td>
                    <td className="p-4 text-right font-display font-bold text-primary">{p.totalWinnings} SOL</td>
                    <td className="p-4 text-right text-foreground hidden sm:table-cell">{p.nftsCollected}</td>
                    <td className="p-4 text-right text-muted-foreground hidden md:table-cell">{p.totalPlays}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
