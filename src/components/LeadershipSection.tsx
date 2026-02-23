import { motion } from "framer-motion";

const highlights = [
  "Act To Impact Award recipient",
  "Founding member of QWIN (Questrade Women's Inclusion Network)",
  "Contributor to Women in Cloud initiatives",
  "Mentored interns and business analysts into Product Owners",
  "Served as interim SME during leadership transitions",
  "Supported QuestMoney Alpha and FinCrime integrations",
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const LeadershipSection = () => (
  <section id="leadership" className="py-24 px-6 lg:px-16 bg-elevated">
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-3xl md:text-4xl font-display font-semibold text-foreground"
      >
        Leadership & Impact
      </motion.h2>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="space-y-3"
      >
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-metric flex-shrink-0" />
            {h}
          </li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default LeadershipSection;
