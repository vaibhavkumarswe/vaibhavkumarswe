import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SprintCardProps {
  sprintNumber: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  techStack: string[];
  status: "live" | "in-progress";
  codeSnippet?: string;
}

const SprintCard = ({
  sprintNumber,
  title,
  description,
  metric,
  metricLabel,
  techStack,
  status,
  codeSnippet,
}: SprintCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="sprint-card rounded-3xl p-8 md:p-12 mb-8"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div className="flex items-center gap-4">
          <span className="mono text-sm text-primary font-bold">{sprintNumber}</span>
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${
              status === "live"
                ? "bg-status-green/10 text-status-green"
                : "bg-primary/10 text-primary"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                status === "live" ? "bg-status-green status-pulse" : "bg-primary"
              }`}
            />
            {status === "live" ? "Live" : "In Progress"}
          </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="meta-label px-2.5 py-1 rounded-md bg-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-8">
            {description}
          </p>
          <div>
            <span className="meta-label mb-1 block">{metricLabel}</span>
            <span className="mono text-4xl font-medium text-primary tabular-nums">
              {metric}
            </span>
          </div>
        </div>

        {/* Right: code snippet */}
        {codeSnippet && (
          <div className="bg-secondary/50 rounded-2xl p-6 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-status-green/60" />
              <span className="meta-label ml-3">snippet.tsx</span>
            </div>
            <pre className="mono text-xs leading-relaxed text-muted-foreground overflow-x-auto">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SprintCard;
