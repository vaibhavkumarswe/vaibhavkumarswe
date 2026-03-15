import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { personal } from "@/data/portfolio";

const ContactSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="sprint-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center"
      >
        <span className="meta-label mb-4 block">Get in Touch</span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-foreground">
          Let's Build Something
          <span className="text-primary"> Amazing</span> Together
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
          Whether you need a stunning landing page, a complex web app, or a complete design system — I'm here to help.
        </p>

        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3 flex-wrap">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <Mail className="w-4 h-4" /> Say Hello
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-secondary hover:bg-muted transition-colors text-sm font-medium text-foreground"
          >
            All Links <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
