import { motion } from "framer-motion";
import { Users, GitPullRequest, Bug, TrendingUp } from "lucide-react";
import { leadership } from "@/data/portfolio";

const iconMap = [Users, GitPullRequest, Bug, TrendingUp];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const } },
};

const LeadershipSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="mb-10 md:mb-12">
        <span className="meta-label mb-4 block">Leadership</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
          Technical <span className="text-primary">Leadership</span>
        </h2>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">Leading teams and driving excellence</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {leadership.map((stat, i) => {
          const Icon = iconMap[i];
          return (
            <motion.div
              key={stat.label}
              variants={itemVariants}
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
      </motion.div>
    </section>
  );
};

export default LeadershipSection;
