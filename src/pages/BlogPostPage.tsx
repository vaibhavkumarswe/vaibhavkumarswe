import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { blogPosts, personal } from "@/data/portfolio";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
        className="px-4 sm:px-6 md:px-16 lg:px-24 py-12 md:py-20 max-w-5xl mx-auto"
      >
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to Blog
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          {/* <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime} read
          </span> */}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-tight">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold bg-secondary text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Content */}
        <div className="space-y-5">
          {post.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="text-lg sm:text-xl font-medium text-foreground mt-8 mb-2"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "subheading") {
              return (
                <h3
                  key={i}
                  className="text-base sm:text-md font-medium text-foreground mt-6 mb-2"
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === "code") {
              return (
                <pre
                  key={i}
                  className="sprint-card rounded-xl p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm leading-relaxed font-mono text-muted-foreground"
                >
                  <code>{block.text}</code>
                </pre>
              );
            }
            if (block.type === "list") {
              return (
                <ul
                  key={i}
                  className="list-disc list-inside text-sm sm:text-base leading-relaxed text-muted-foreground"
                >
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p
                key={i}
                className="text-sm sm:text-base leading-relaxed text-muted-foreground"
              >
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Author footer */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="sprint-card rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary">
                {personal.firstName[0]}
                {personal.lastName[0]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                {personal.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {personal.role} · {personal.location}
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-secondary text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-secondary text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Navigation to next/prev */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(() => {
            const filteredPosts = blogPosts
              .filter((post) => !post.draft)
              .sort((a, b) => b.id - a.id);
            const idx = filteredPosts.findIndex((p) => p.slug === slug);
            const prev = idx > 0 ? filteredPosts[idx - 1] : null;
            const next =
              idx < filteredPosts.length - 1 ? filteredPosts[idx + 1] : null;
            return (
              <>
                {prev ? (
                  <Link
                    to={`/blog/${prev.slug}`}
                    className="sprint-card rounded-xl p-4 group hover:bg-secondary/30 transition-colors"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                      ← Previous
                    </span>
                    <p className="text-sm font-medium text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-1">
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    to={`/blog/${next.slug}`}
                    className="sprint-card rounded-xl p-4 text-right group hover:bg-secondary/30 transition-colors"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                      Next →
                    </span>
                    <p className="text-sm font-medium text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-1">
                      {next.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </>
            );
          })()}
        </div>
      </motion.article>
    </>
  );
};

export default BlogPostPage;
