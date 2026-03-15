import { motion } from "framer-motion";
import { processSteps } from "@/data/portfolio";

const ProcessSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="mb-10 md:mb-12">
        <span className="meta-label mb-4 block">Workflow</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
          My Process
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="sprint-card rounded-2xl p-5 sm:p-6 relative overflow-hidden"
          >
            <span className="mono text-5xl sm:text-6xl font-bold text-primary/10 absolute top-3 sm:top-4 right-3 sm:right-4">
              {step.num}
            </span>
            <div className="relative z-10">
              <span className="mono text-xs sm:text-sm text-primary font-bold">{step.num}</span>
              <h3 className="text-base sm:text-lg font-medium text-foreground mt-2 sm:mt-3">{step.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
