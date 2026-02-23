import { motion } from "framer-motion";

const steps = [
  "Vision",
  "Strategy",
  "Roadmap",
  "Backlog Prioritization",
  "Agile Delivery",
  "Measurement",
  "Compliance Governance",
];

const details = [
  "90% sprint completion rate with 85% delivery predictability",
  "Executive stakeholder reporting aligned to strategic OKRs",
  "Regulatory alignment across GDPR, Law 25, and FINTRAC",
  "Cross-border team leadership spanning four countries",
  "Platform reliability and infrastructure uptime focus",
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OperatingModelSection = () => (
  <section id="operating-model" className="py-24 px-6 lg:px-16">
    <div className="max-w-5xl mx-auto space-y-12">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-3xl md:text-4xl font-display font-semibold text-foreground"
      >
        How I Build & Scale Enterprise Fintech Products
      </motion.h2>

      {/* Flow */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="flex flex-wrap items-center gap-2"
      >
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="px-4 py-2 text-xs font-sans font-medium tracking-wide bg-secondary text-secondary-foreground rounded-md border border-divider">
              {step}
            </span>
            {i < steps.length - 1 && (
              <span className="text-dim text-lg">→</span>
            )}
          </div>
        ))}
      </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="space-y-3 max-w-2xl"
      >
        {details.map((d) => (
          <li key={d} className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-metric flex-shrink-0" />
            {d}
          </li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default OperatingModelSection;
