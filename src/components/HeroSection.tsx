import { motion } from "framer-motion";
import {
  AudioWaveform,
  Coffee,
  MapPin,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  Code2,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { personal, stats } from "@/data/portfolio";
import { Link } from "react-router-dom";

const codeLines = [
  "const engineer = {",
  `  name: "${personal.name}",`,
  `  role: "${personal.role}",`,
  '  stack: ["React", "TypeScript", "Redux"],',
  '  focus: "Performance & Scale",',
  '  users: "100,000+",',
  "};",
];

const floatingTags = [
  { label: "React.js", x: "75%", y: "15%", delay: 0.8 },
  { label: "TypeScript", x: "85%", y: "55%", delay: 1.2 },
  { label: "Redux", x: "70%", y: "80%", delay: 1.6 },
  { label: "Tailwind", x: "90%", y: "35%", delay: 2.0 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb glow-orb-primary top-[-10%] left-[20%]" />
      <div className="glow-orb glow-orb-accent bottom-[10%] right-[10%]" />

      {/* Hero radial glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Floating tech tags — desktop only */}
      <div className="hidden xl:block">
        {floatingTags.map((tag) => (
          <motion.div
            key={tag.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: tag.delay, duration: 0.6 }}
            className="absolute z-10"
            style={{ left: tag.x, top: tag.y }}
          >
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: tag.delay }}
              className="mono text-[10px] px-3 py-1.5 rounded-full border border-border bg-background/60 backdrop-blur-sm text-muted-foreground"
            >
              {tag.label}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        >
          {/* Eyebrow with sparkle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="meta-label">Hey, I'm</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-foreground">
            {personal.firstName}
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter gradient-text">
            {personal.lastName}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 sm:mt-6"
          >
            <p className="text-lg sm:text-xl font-medium text-foreground/90 typing-cursor">
              {personal.tagline}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-lg"
          >
            {personal.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 sm:mt-6 flex items-center gap-4 text-xs sm:text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> {personal.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" /> {personal.yearsExp} years
              exp
            </span>
          </motion.div>

          {/* Stats with dividers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 sm:mt-8 flex items-center gap-6 sm:gap-10"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-6 sm:gap-10">
                <div className="flex flex-col">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + i * 0.1,
                      type: "spring",
                    }}
                    className="mono text-2xl sm:text-3xl font-medium text-foreground tabular-nums"
                  >
                    {s.value}
                  </motion.span>
                  <span className="meta-label mt-1">{s.label}</span>
                </div>
                {i < stats.length - 1 && <div className="w-px h-8 bg-border" />}
              </div>
            ))}
          </motion.div>

          {/* CTA buttons + social */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <Link
                to="/projects"
                className="px-5 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 text-sm font-medium hover-scale"
              >
                View Projects
              </Link>
              <a
                href={`mailto:${personal.email}`}
                className="px-6 py-3 rounded-md border border-border bg-background/50 hover:bg-secondary transition-all duration-200 text-sm font-medium text-foreground hover-scale"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-1 ml-0 sm:ml-4">
              <span className="meta-label text-muted-foreground mr-1 hidden sm:inline">
                Connect
              </span>
              {[
                { href: personal.github, Icon: Github, label: "GitHub" },
                { href: personal.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: personal.leetcode, Icon: Code2, label: "LeetCode" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg hover:bg-secondary transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Code card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="sprint-card rounded-2xl p-4 relative overflow-hidden">
            {/* Card inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-status-green/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-status-green/60" />
                  <span className="meta-label ml-3">developer.ts</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-status-green/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-green status-pulse" />
                  <span className="meta-label text-status-green">live</span>
                </div>
              </div>
              <pre className="mono text-sm leading-relaxed">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="text-muted-foreground hover:bg-primary/5 rounded px-1 -mx-1 transition-colors"
                  >
                    <span className="text-text-tertiary select-none mr-4">
                      {String(i + 1).padStart(2)}
                    </span>
                    {line.includes('"') ? (
                      <span>
                        {line.split('"').map((part, j) =>
                          j % 2 === 0 ? (
                            <span key={j} className="text-muted-foreground">
                              {part}
                            </span>
                          ) : (
                            <span key={j} className="text-primary">
                              "{part}"
                            </span>
                          ),
                        )}
                      </span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </motion.div>
                ))}
              </pre>
            </div>
          </div>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-4 flex justify-end gap-3"
          >
            <div className="sprint-card rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-2xl font-bold text-primary mono">
                <AudioWaveform />
              </span>
              <span className="meta-label">NIALL HORAN</span>
            </div>
            <div className="sprint-card rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-2xl font-bold text-status-green mono">
                <Coffee />
              </span>
              <span className="meta-label">THE BEANS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — animated bounce */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="meta-label text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
