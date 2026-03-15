import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => {
  // Show only first 2 on home page
  const preview = experiences.slice(0, 2);

  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="mb-10 md:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <span className="meta-label mb-4 block">Career</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Experience
          </h2>
        </div>
        <Link
          to="/experience"
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-4 md:space-y-6">
        {preview.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="sprint-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-foreground">{exp.role}</h3>
                <p className="text-primary mt-1 text-sm sm:text-base">{exp.company}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {exp.domain} • {exp.location}
                </p>
              </div>
              <div
                className={`self-start flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold shrink-0 ${
                  exp.isCurrent
                    ? "bg-status-green/10 text-status-green"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {exp.isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-status-green status-pulse" />
                )}
                {exp.period}
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              {exp.highlights.slice(0, 3).map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex gap-2 flex-wrap">
              {exp.techStack.map((tech) => (
                <span key={tech} className="meta-label px-2.5 py-1 rounded-md bg-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
