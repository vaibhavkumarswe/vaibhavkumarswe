import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { blogPosts, personal } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const } },
};

const filteredPosts = blogPosts.filter((post) => !post.draft).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const BlogPage = () => {
  return (
    <>
      <SEOHead
        title="Blog"
        description="Technical articles on React, TypeScript, performance optimization, system design, and frontend engineering by Vaibhav Kumar."
        path="/blog"
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
          className="mb-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-foreground">
            Blog
          </h1>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base max-w-2xl">
            Writing about frontend engineering, performance, architecture, and lessons learned building products at scale.
          </p>
        </motion.div>

        {/* Blog list — nadh.in/blog inspired */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-10 md:mt-14"
        >
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block py-6 sm:py-8 border-b border-border -mx-4 px-4 sm:-mx-6 sm:px-6 hover:bg-secondary/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-muted-foreground">
                  {post.date}
                </span>
                {/* <span className="text-[10px] text-muted-foreground/60">•</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">
                  {post.readTime} read
                </span> */}
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-medium text-primary group-hover:underline underline-offset-4 decoration-primary/40 transition-all flex items-center gap-1.5">
                {post.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-3xl">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16 sprint-card rounded-2xl p-6 sm:p-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            More articles coming soon. Follow me on{" "}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>{" "}
            for updates.
          </p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default BlogPage;
