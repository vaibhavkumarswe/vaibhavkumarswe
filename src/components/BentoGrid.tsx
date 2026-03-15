import { motion } from "framer-motion";
import { Code2, Gauge, Database, Layers } from "lucide-react";
import { capabilities } from "@/data/portfolio";

const iconMap = [Code2, Gauge, Database, Layers];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const } },
};

const BentoGrid = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <span className="meta-label mb-4 block">Expertise</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-10 md:mb-12">
        The Stack
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {capabilities.map((cap, i) => {
          const Icon = iconMap[i];
          return (
            <motion.div
              key={cap.title}
              variants={itemVariants}
              className="sprint-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] group"
            >
              <div>
                <Icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-base sm:text-lg font-medium text-foreground mb-2">{cap.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 border-t border-muted">
                <span className="mono text-xs text-primary font-bold">{cap.detail}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default BentoGrid;
