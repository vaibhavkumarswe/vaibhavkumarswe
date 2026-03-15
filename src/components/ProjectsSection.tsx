import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const } },
};

const ProjectsSection = () => {
  const preview = projects.slice(0, 3);

  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="mb-10 md:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <span className="meta-label mb-4 block">Work</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Featured Projects
          </h2>
        </div>
        <Link
          to="/projects"
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View all projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
      >
        {preview.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="sprint-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="meta-label px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                  {project.tag}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-secondary transition-colors opacity-50 group-hover:opacity-100"
                >
                  <Github className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="mt-4 sm:mt-6 pt-4 border-t border-muted flex gap-2 flex-wrap">
              {project.techStack.map((tech) => (
                <span key={tech} className="meta-label px-2 py-0.5 rounded bg-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
