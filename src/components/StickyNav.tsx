import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal, navLinks } from "@/data/portfolio";

const StickyNav = () => {
  const [time, setTime] = useState(new Date());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="px-4 sm:px-6 md:px-16 lg:px-24 h-14 flex items-center justify-between">
          {/* Left: Brand */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="meta-label text-foreground">{personal.firstName} {personal.lastName}</span>
            <span className="meta-label text-muted-foreground">/ {personal.year}</span>
          </Link>

          {/* Center: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 text-xs font-medium transition-colors rounded-lg ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-secondary rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right: Time + Status */}
          <div className="hidden md:flex items-center gap-4">
            <span className="mono text-xs tabular-nums text-muted-foreground">
              {formattedTime}
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-status-green/30 bg-status-green/5">
              <span className="w-1.5 h-1.5 rounded-full bg-status-green status-pulse" />
              <span className="meta-label text-status-green text-[9px]">Available</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14 z-50 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-3 pt-3 border-t border-border flex items-center justify-between px-4">
                <span className="mono text-xs tabular-nums text-muted-foreground">
                  {formattedTime}
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-status-green/30 bg-status-green/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-green status-pulse" />
                  <span className="meta-label text-status-green text-[9px]">Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyNav;
