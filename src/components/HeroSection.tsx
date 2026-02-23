import { motion } from "framer-motion";
import headshot from "@/assets/headshot.jpg";

const metrics = [
  { value: "3M+", label: "Customer Profiles Managed" },
  { value: "100K+", label: "Daily Transactions" },
  { value: "$1M+", label: "Funding Secured" },
  { value: "90%", label: "Sprint Completion Rate" },
  { value: "99%", label: "Platform Uptime" },
  { value: "25%", label: "Fraud Reduction" },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HeroSection = () => (
  <section className="min-h-screen flex items-center py-20 px-6 lg:px-16">
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-5 gap-16 items-center">
      <div className="lg:col-span-3 space-y-8">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fade}
          className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-metric"
        >
          Ochuko Anu Ejabena, MBA, CBAP
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fade}
          className="text-sm font-sans tracking-wide text-muted-foreground"
        >
          Enterprise Fintech Infrastructure Leader &nbsp;|&nbsp; Senior Product Owner
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fade}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-foreground"
        >
          Architecting Mission-Critical Fintech Backbone Systems
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fade}
          className="text-base md:text-lg font-sans text-muted-foreground max-w-2xl leading-relaxed"
        >
          Senior Product Owner specializing in customer lifecycle platforms, regulatory-compliant
          data infrastructure, fraud prevention integration, and enterprise fintech ecosystems
          powering millions of transactions.
        </motion.p>

        {/* Metrics */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fade}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4"
        >
          {metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <p className="text-2xl md:text-3xl font-sans font-semibold text-metric">{m.value}</p>
              <p className="text-xs font-sans text-muted-foreground leading-snug">{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={5}
          variants={fade}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a
            href="#case-studies"
            className="px-6 py-3 text-sm font-sans font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            View Case Studies
          </a>
          <a
            href="https://www.linkedin.com/in/ogheneochuko-ejabena/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-sans font-medium border border-divider text-foreground rounded-md hover:bg-accent transition-colors"
          >
            Connect on LinkedIn
          </a>
          <a
            href="#"
            className="px-6 py-3 text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Download Resume ↓
          </a>
        </motion.div>
      </div>

      {/* Headshot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="lg:col-span-2 flex justify-center"
      >
        <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-divider">
          <img
            src={headshot}
            alt="Ochuko Anu Ejabena — Executive headshot"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
