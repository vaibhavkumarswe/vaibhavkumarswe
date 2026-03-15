import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { projects } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const } },
};

const ProjectsPage = () => {
  return (
    <>
      <SEOHead
        title="Projects"
        description="Personal projects, SaaS platforms, browser extensions, and NPM packages built by Vaibhav Kumar."
        path="/projects"
      />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-foreground">
            Projects
          </h1>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base max-w-2xl">
            A selection of production applications, open-source tools, and engineering experiments shipped across fintech, healthcare, and developer tooling.
          </p>
        </motion.div>

        {/* Timeline list — nadh.in inspired */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-10 md:mt-14"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group grid grid-cols-1 sm:grid-cols-[120px_180px_1fr] md:grid-cols-[140px_200px_1fr] gap-1 sm:gap-4 py-5 sm:py-6 border-b border-border hover:bg-secondary/30 -mx-4 px-4 sm:-mx-6 sm:px-6 transition-colors duration-200 cursor-pointer"
            >
              {/* Date / Tag */}
              <div className="flex items-center sm:items-start gap-2 sm:gap-0 sm:flex-col">
                <span className="text-xs text-muted-foreground font-mono">
                  {project.tag.toUpperCase()}
                </span>
                {project.featured && (
                  <span className="text-[9px] uppercase tracking-widest font-bold text-status-green sm:mt-1">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base font-medium text-primary group-hover:underline underline-offset-4 decoration-primary/40 transition-all">
                  {project.title}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5" />
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mt-1 sm:mt-0">
                {project.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Tech summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <h2 className="text-lg sm:text-xl font-medium text-foreground mb-4">
            Tech Stack Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(projects.flatMap((p) => p.techStack))).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-secondary text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ProjectsPage;
