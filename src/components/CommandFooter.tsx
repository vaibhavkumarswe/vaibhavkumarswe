import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Download, Mail, Github, Linkedin } from "lucide-react";
import { personal, commandActions } from "@/data/portfolio";

interface CommandFooterProps {
  isOpen: boolean;
  onToggle: () => void;
}

const iconMap: Record<string, typeof Mail> = { E: Mail, G: Github, L: Linkedin, D: Download };

const CommandFooter = ({ isOpen, onToggle }: CommandFooterProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "k" && !e.metaKey && !e.ctrlKey && !isOpen) {
        e.preventDefault();
        onToggle();
      }
      if (e.key === "Escape" && isOpen) onToggle();
      if (isOpen) {
        const action = commandActions.find((a) => a.shortcut.toLowerCase() === e.key.toLowerCase());
        if (action) window.open(action.href, "_blank");
      }
    },
    [isOpen, onToggle]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <footer className="px-4 sm:px-6 md:px-16 lg:px-24 py-10 sm:py-16 border-t border-muted">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="meta-label">© {personal.year} {personal.name} — All rights reserved</span>
          <button
            onClick={onToggle}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-muted transition-colors duration-200"
          >
            <Command className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="mono text-xs text-muted-foreground">
              Press <kbd className="px-1.5 py-0.5 rounded bg-background text-foreground text-[10px] ml-1">K</kbd> to connect
            </span>
          </button>
        </div>
      </footer>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={onToggle}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
              className="fixed top-1/2 left-5 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md z-50"
            >
              <div className="sprint-card rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-muted">
                  <span className="meta-label">Quick Actions</span>
                </div>
                <div className="p-2">
                  {commandActions.map((action) => {
                    const Icon = iconMap[action.shortcut] || Mail;
                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-secondary transition-colors duration-150 group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span className="text-sm text-foreground">{action.label}</span>
                        </div>
                        <kbd className="mono text-[10px] px-2 py-1 rounded bg-secondary text-muted-foreground">
                          {action.shortcut}
                        </kbd>
                      </a>
                    );
                  })}
                </div>
                <div className="p-4 border-t border-muted flex justify-end">
                  <span className="meta-label">ESC to close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandFooter;
