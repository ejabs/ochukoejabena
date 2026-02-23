import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FinalCTASection = () => (
  <section id="contact" className="py-32 px-6 lg:px-16">
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-3xl md:text-4xl font-display font-semibold text-foreground"
      >
        Let's Build the Next Fintech Backbone
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-base font-sans text-muted-foreground leading-relaxed"
      >
        Open to senior product leadership roles, enterprise fintech strategy engagements, and
        platform transformation initiatives.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="flex flex-wrap justify-center gap-4 pt-4"
      >
        <a
          href="mailto:ejabenaochuko@gmail.com"
          className="px-6 py-3 text-sm font-sans font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
        >
          Schedule a Conversation
        </a>
        <a
          href="#"
          className="px-6 py-3 text-sm font-sans font-medium border border-divider text-foreground rounded-md hover:bg-accent transition-colors"
        >
          Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/ogheneochuko-ejabena/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Connect on LinkedIn →
        </a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
