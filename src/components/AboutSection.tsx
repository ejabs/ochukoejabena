import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const philosophy = [
  "Customer-first architecture",
  "Data as a strategic asset",
  "Compliance by design",
  "Predictable execution (90% sprint completion, 85% predictability)",
  "Cross-functional empowerment",
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6 lg:px-16">
    <div className="max-w-4xl mx-auto space-y-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
          From Concept Decks to Enterprise Infrastructure
        </h2>
        <div className="space-y-5 text-base font-sans text-muted-foreground leading-relaxed">
          <p>
            Over 9 years of fintech product leadership, I've progressed from business analysis to
            architecting enterprise-scale platforms that power millions of customer interactions
            daily. My career spans end-to-end product delivery for customer lifecycle platforms,
            managing systems supporting 3M+ profiles and processing 100K+ daily transactions.
          </p>
          <p>
            I stabilized a critical FSC migration achieving 99% uptime, reduced master data
            processing time by 90% through a strategic Ataccama upgrade, and secured $1M in funding
            for infrastructure modernization. My work includes implementing GDPR, Law 25, and
            FINTRAC-compliant consent management frameworks across regulated financial environments.
          </p>
          <p>
            I've led global cross-functional teams across Toronto, Ukraine, Brazil, and Nigeria —
            transitioning from analyst to enterprise-scale platform leader through disciplined
            execution and strategic clarity.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="space-y-6"
      >
        <h3 className="text-xl font-display font-semibold text-foreground">
          Product Leadership Philosophy
        </h3>
        <ul className="space-y-3">
          {philosophy.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-metric flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
