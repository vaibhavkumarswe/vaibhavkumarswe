import { motion } from "framer-motion";
import { Code2, Gauge, Database, Layers, Wrench, Cloud } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { skills, capabilities, processSteps } from "@/data/portfolio";

const capIcons = [Code2, Gauge, Database, Layers];

const skillSections = [
  { title: "Languages", icon: Code2, items: skills.languages },
  { title: "Frameworks & Libraries", icon: Layers, items: skills.frameworks },
  { title: "Tools & Platforms", icon: Wrench, items: skills.tools },
  { title: "Best Practices", icon: Gauge, items: skills.practices },
  { title: "Databases", icon: Database, items: skills.databases },
  { title: "Cloud & Deployment", icon: Cloud, items: skills.cloud },
];

const SkillsPage = () => {
  return (
    <>
      <SEOHead
        title="Skills"
        description="Technical skills, expertise areas, and development workflow used to build scalable web applications."
        path="/skills"
      />

      <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="meta-label mb-4 block">Expertise</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-foreground">
            Skills & <span className="text-primary">Stack</span>
          </h1>
        </motion.div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-20 md:mb-24">
          {capabilities.map((cap, i) => {
            const Icon = capIcons[i];
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="sprint-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[200px] sm:min-h-[240px]"
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
        </div>

        {/* Skill tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <span className="meta-label mb-4 block">Technologies</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Tech <span className="text-primary">Inventory</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-20 md:mb-24">
          {skillSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
              className="sprint-card rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <section.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-foreground">{section.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <span className="meta-label mb-4 block">Workflow</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            My <span className="text-primary">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
              className="sprint-card rounded-2xl p-5 sm:p-6 relative overflow-hidden"
            >
              <span className="mono text-5xl sm:text-6xl font-bold text-primary/10 absolute top-3 sm:top-4 right-3 sm:right-4">
                {step.num}
              </span>
              <div className="relative z-10">
                <span className="mono text-xs sm:text-sm text-primary font-bold">{step.num}</span>
                <h3 className="text-base sm:text-lg font-medium text-foreground mt-2 sm:mt-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
