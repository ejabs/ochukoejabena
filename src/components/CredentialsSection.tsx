import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const education = [
  { degree: "Master in Business Administration (MBA)", school: "University of Gloucestershire, United Kingdom" },
  { degree: "Bachelor of Science (Economics & Statistics)", school: "University of Benin, Nigeria" },
];

const certifications = [
  { name: "Certified Business Analysis Professional (CBAP)", year: "2021" },
  { name: "Certified Scrum Product Owner (CSPO)", year: "2023" },
  { name: "Certified Advanced Scrum Product Owner (A-CSPO)", year: "2024" },
];

const skills = [
  "SQL", "Power BI", "Tableau", "Jira", "Confluence", "Postman", "Figma", "MS Visio",
];

const CredentialsSection = () => (
  <section id="credentials" className="py-24 px-6 lg:px-16">
    <div className="max-w-5xl mx-auto space-y-16">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-3xl md:text-4xl font-display font-semibold text-foreground"
      >
        Education, Certifications & Tools
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-5"
        >
          <p className="text-xs font-sans font-semibold tracking-wide uppercase text-dim">Education</p>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="space-y-1">
                <p className="text-sm font-sans font-medium text-foreground">{e.degree}</p>
                <p className="text-xs font-sans text-muted-foreground">{e.school}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-5"
        >
          <p className="text-xs font-sans font-semibold tracking-wide uppercase text-dim">Certifications</p>
          <div className="space-y-4">
            {certifications.map((c) => (
              <div key={c.name} className="space-y-1">
                <p className="text-sm font-sans font-medium text-foreground">{c.name}</p>
                <p className="text-xs font-sans text-metric">{c.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-5"
        >
          <p className="text-xs font-sans font-semibold tracking-wide uppercase text-dim">Technical Tools</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-xs font-sans font-medium bg-secondary text-secondary-foreground rounded-md border border-divider"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CredentialsSection;
