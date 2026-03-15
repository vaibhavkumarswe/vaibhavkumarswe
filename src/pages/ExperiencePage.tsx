import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { experiences, leadership, education } from "@/data/portfolio";
import { GitPullRequestCreate, GitPullRequest, Bug, TrendingUp } from "lucide-react";

const iconMap = [GitPullRequestCreate, GitPullRequest, Bug, TrendingUp];

const ExperiencePage = () => {
  return (
    <>
      <SEOHead
        title="Experience"
        description="Professional experience across fintech, AI SaaS, healthcare, and enterprise software development."
        path="/experience"
      />

      <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="meta-label mb-4 block">Career</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-foreground">
            Professional <span className="text-primary">Experience</span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-4 md:space-y-6 mb-20 md:mb-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
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
                {exp.highlights.map((h, i) => (
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

        {/* Leadership stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <span className="meta-label mb-4 block">Leadership</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Impact <span className="text-primary">Metrics</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {leadership.map((stat, i) => {
            const Icon = iconMap[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="sprint-card rounded-2xl p-4 sm:p-6 flex flex-col min-h-[160px] sm:min-h-[200px]"
              >
                <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary mb-3 sm:mb-4" strokeWidth={1.5} />
                <span className="mono text-2xl sm:text-3xl font-medium text-primary tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground mt-2">
                  {stat.label}
                </span>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 leading-relaxed hidden sm:block">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
