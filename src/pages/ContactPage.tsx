import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Code2, MapPin, Briefcase } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { personal } from "@/data/portfolio";

const ContactPage = () => {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Get in touch for collaboration, freelance projects, or full-time opportunities."
        path="/contact"
      />

      <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24 min-h-[80vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl mx-auto"
        >
          <div className="sprint-card rounded-3xl p-8 sm:p-12 md:p-16 text-center">
            <span className="meta-label mb-4 block">Get in Touch</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              Let's Build Something
              <span className="text-primary"> Amazing</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
              Whether you need a stunning landing page, a complex web app, or a
              complete design system — I'm here to help.
            </p>

            {/* Info */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> {personal.yearsExp} years exp
              </span>
            </div>

            {/* Links */}
            <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" /> Say Hello
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-secondary hover:bg-muted transition-colors text-sm font-medium text-foreground"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-secondary hover:bg-muted transition-colors text-sm font-medium text-foreground"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-secondary hover:bg-muted transition-colors text-sm font-medium text-foreground"
              >
                <Code2 className="w-4 h-4" /> LeetCode
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ContactPage;
