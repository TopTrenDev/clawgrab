import { Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display text-xs font-bold text-primary-foreground">CG</span>
            </div>
            <span className="font-display text-sm font-bold tracking-wider text-foreground">
              CLAW<span className="text-primary">GRAB</span>
            </span>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            © 2026 ClawGrab. Built on Solana. Play responsibly.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
