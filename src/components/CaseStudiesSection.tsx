import { motion } from "framer-motion";

interface CaseStudy {
  title: string;
  org: string;
  context: string;
  challenge: string;
  decisions: string;
  execution: string;
  impact: string[];
}

const studies: CaseStudy[] = [
  {
    title: "Customer Lifecycle Platform",
    org: "Questrade Enterprises",
    context:
      "Enterprise-wide customer lifecycle and data infrastructure transformation for one of Canada's leading online brokerages.",
    challenge:
      "Fragmented customer data across legacy systems, escalating fraud incidents, and a pending FSC migration threatening platform stability.",
    decisions:
      "Prioritized infrastructure reliability over feature velocity. Led Ataccama v13.9 upgrade for master data management and designed a phased FSC migration with zero-downtime targets.",
    execution:
      "Managed four global Agile teams across Toronto and Ukraine. Implemented GDPR and Law 25 consent management. Built reconciliation dashboards and integrated fraud prevention systems.",
    impact: [
      "3M+ customer profiles managed",
      "100K+ daily transactions processed",
      "25% fraud reduction",
      "99% platform uptime post-FSC migration",
      "90% processing time reduction (Ataccama upgrade)",
      "$1M infrastructure funding secured",
      "50 hours/month saved via reconciliation dashboards",
      "90% sprint completion, 85% delivery predictability",
    ],
  },
  {
    title: "Chat Banking Bot Revamp",
    org: "United Bank for Africa",
    context:
      "Revamping the mobile chat banking platform for one of Africa's largest financial institutions to drive digital adoption at scale.",
    challenge:
      "Low digital engagement, high dispute volumes, and quality issues impacting customer trust across multiple African markets.",
    decisions:
      "Focused on dispute resolution automation, UAT process optimization, and growth-oriented feature development to increase account openings and deposit mobilization.",
    execution:
      "Led product delivery across cross-functional teams, optimizing UAT workflows and implementing feature enhancements targeting acquisition and retention.",
    impact: [
      "1M+ app downloads",
      "10M transactions processed",
      "100,000+ disputes resolved",
      "73% increase in new account openings",
      "74.6% deposit mobilization growth",
      "20% defect reduction via UAT optimization",
    ],
  },
  {
    title: "Bank-Agnostic Payment Platform",
    org: "Heritage Bank",
    context:
      "Designing and launching Nigeria's first bank-agnostic payment platform — enabling transactions across financial institutions from a single app.",
    challenge:
      "Building a greenfield payment product in a fragmented banking ecosystem with no precedent for multi-bank interoperability.",
    decisions:
      "Adopted a platform-first approach with open API architecture. Established an innovation lab to foster rapid prototyping and mentor emerging developers.",
    execution:
      "Led cross-functional delivery from ideation through launch, coordinating product, engineering, and compliance teams. Launched developer incubation program.",
    impact: [
      "500,000 downloads in 6 months",
      "34% cross-selling increase",
      "Nigeria's first bank-agnostic payment platform",
      "Innovation lab launched for young developers",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CaseStudiesSection = () => (
  <section id="case-studies" className="py-24 px-6 lg:px-16 bg-elevated">
    <div className="max-w-5xl mx-auto space-y-20">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-3xl md:text-4xl font-display font-semibold text-foreground"
      >
        Core Case Studies
      </motion.h2>

      {studies.map((s, idx) => (
        <motion.article
          key={s.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-metric">
              Case Study {idx + 1}
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              {s.title}
            </h3>
            <p className="text-sm font-sans text-muted-foreground">{s.org}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: "Context", text: s.context },
              { label: "Challenge", text: s.challenge },
              { label: "Strategic Decisions", text: s.decisions },
              { label: "Execution Model", text: s.execution },
            ].map((block) => (
              <div key={block.label} className="space-y-2">
                <p className="text-xs font-sans font-semibold tracking-wide uppercase text-dim">
                  {block.label}
                </p>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-xs font-sans font-semibold tracking-wide uppercase text-dim">
              Measurable Impact
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {s.impact.map((item) => (
                <p key={item} className="text-sm font-sans text-foreground flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-metric flex-shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          {idx < studies.length - 1 && (
            <div className="border-t border-divider pt-0" />
          )}
        </motion.article>
      ))}
    </div>
  </section>
);

export default CaseStudiesSection;
