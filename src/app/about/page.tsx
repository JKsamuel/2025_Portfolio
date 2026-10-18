import Image from "next/image";
import Link from "next/link";
import { FiArrowDown, FiArrowUpRight, FiCheck, FiDatabase, FiMapPin } from "react-icons/fi";
import { about, baseURL, person } from "@/app/resources";
import { Meta } from "@/once-ui/modules";
import { AnimatedRays } from "@/components/ui/AnimatedRays";
import { GlowBorderCard } from "@/components/ui/GlowBorderCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerText } from "@/components/ui/StaggerText";
import { DiagonalCarousel } from "@/components/ui/DiagonalCarousel";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: `About Me – ${person.name}`,
    description: "Career, data engineering work, and analytics experience for Samuel Kim.",
    baseURL,
    path: about.path,
  });
}

const skillGroups = [
  { name: "Data platforms & ETL", skills: ["Python ETL", "SQL ETL", "Medallion architecture", "REST API integration", "Data quality & reconciliation", "Pipeline monitoring & audit trails", "Docker"] },
  { name: "Database engineering", skills: ["SQL Server 2019 / 2022", "Azure SQL Database", "Azure Synapse Analytics", "T-SQL", "Stored procedures", "Execution plan analysis", "Index tuning"] },
  { name: "Analytics & reporting", skills: ["Power BI", "SSRS / Paginated Reports", "SSAS Tabular", "DAX", "MDX", "KPI frameworks", "Executive dashboards"] },
  { name: "Azure & operations", skills: ["ADLS Gen2", "Azure Container Apps Jobs", "Azure Container Registry", "Azure Automation", "Azure Key Vault", "UAT", "Production troubleshooting"] },
];

const principles = [
  { number: "01", title: "Trust starts upstream", text: "Data quality belongs in the pipeline, not as a cleanup task left for the people reading the report." },
  { number: "02", title: "Make the work understandable", text: "Clear models, checks, and documentation help the next person follow what a number means and where it came from." },
  { number: "03", title: "Build for the decision", text: "Start with what operations and leadership need to decide, then shape the data and reporting around that need." },
];

const dataFlowSlides = [
  { step: "01 / INGEST", title: "Operational data, connected.", signal: "Many systems → one foundation", description: "Bring together the business signals teams depend on, from supplier pricing and POS journals to fuel sales, inventory, APIs, and location data.", tools: ["Supplier feeds", "POS & fuel sales", "Inventory", "APIs · Esri"] },
  { step: "02 / ENGINEER", title: "A pipeline built to travel.", signal: "Cloud data engineering", description: "Move and shape data through reliable ingestion and medallion layers, using Azure services and code suited to scheduled operational work.", tools: ["Azure Synapse", "ADLS Gen2", "Python · SQL", "Container Apps Jobs"] },
  { step: "03 / GOVERN", title: "Quality you can follow.", signal: "Monitoring · audit · trust", description: "Reconcile incoming data, check quality, retain execution context, and monitor ETL and reporting refresh health so issues are visible and actionable.", tools: ["Data quality", "Reconciliation", "Run audits", "Refresh monitoring"] },
  { step: "04 / SHARE", title: "Data in the hands of teams.", signal: "Gen7 DataCentre", description: "Publish trusted operational views through the employee-facing DataCentre and analytics experiences that help teams understand performance and decide what to do next.", tools: ["Power BI", "SSRS · SSAS", "Station analytics", "Business analysis"] },
];

export default function About() {
  return (
    <main className={styles.resumePage}>
      <div className={styles.resumeShell}>
        <header className={styles.resumeHero}>
          <AnimatedRays className={styles.resumeRays} />
          <div className={styles.resumeIdentity}><span className={styles.resumeEyebrow}><FiMapPin aria-hidden="true" /> ANCASTER, ONTARIO <span>·</span> ENGLISH / KOREAN</span><h1>Engineer the trust.<br /><em>Reveal the signal.</em></h1><p>Data Engineer &amp; Analyst building reliable data systems and clear reporting for real operational decisions.</p><div className={styles.resumePills}><span><i /> GPMC HOLDINGS / GEN7FUEL</span><span>SEPT 2025 — PRESENT</span></div></div>
          <div className={styles.resumePortrait}><Image src={person.avatar} alt="Samuel Kim" width={220} height={260} priority /><span>JONGEUN “SAMUEL” KIM</span></div>
          <a href="#career" className={styles.jumpLink}>SCROLL THROUGH MY STORY <FiArrowDown aria-hidden="true" /></a>
        </header>

        <section className={styles.summaryBlock} aria-labelledby="profile-title"><div className={styles.resumeSectionLabel}><span>01</span> DATA, THROUGH AND THROUGH</div><div><span className={styles.glassEyebrow}><FiDatabase aria-hidden="true" /> MY WORK STARTS WITH THE DATA</span><h2 id="profile-title">Build the data foundation.<br /><em>Make it useful to people.</em></h2><p>I work with data end to end: connecting operational sources, building dependable pipelines and models, and shaping the result into analytics people can use. The goal is not another dashboard. It is shared confidence in what is happening and a better basis for what to do next.</p><p>That means partnering with the people closest to the work, making data quality part of the system, and keeping the path from source to decision understandable. Before data, I spent ten years as a Republic of Korea Army officer; preparation, accountability, and clear communication still guide how I work.</p></div></section>

        <section className={styles.dataFlow} aria-labelledby="data-flow-title"><div className={styles.resumeSectionLabel}><span>02</span> FROM SOURCE TO DECISION</div><div className={styles.dataFlowBody}><div className={styles.dataFlowHeading}><span className={styles.resumeEyebrow}>THE DATA ENGINEERING LIFECYCLE</span><h2 id="data-flow-title">Connected systems.<br /><em>Useful data for everyone.</em></h2><p>Explore how data moves from operational sources into monitored pipelines, trusted reporting, and the Gen7 DataCentre.</p></div><DiagonalCarousel slides={dataFlowSlides} /></div></section>

        <section className={styles.principles} aria-labelledby="principles-title"><div className={styles.resumeSectionLabel}><span>03</span> HOW I WORK</div><div className={styles.principleBody}><h2 id="principles-title">A few things I believe.</h2><div className={styles.principleGrid}>{principles.map((item) => <article className={styles.principleCard} key={item.number}><span>{item.number}</span><FiCheck aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

        <section id="career" className={styles.career} aria-labelledby="career-title"><div className={styles.resumeSectionLabel}><span>04</span> THE CAREER ARC</div><div className={styles.careerBody}><div className={styles.careerHeading}><div><span className={styles.resumeEyebrow}>2010 — NOW</span><h2 id="career-title"><StaggerText>Responsibility first.</StaggerText><br /><em><StaggerText delay={0.15}>Then better systems.</StaggerText></em></h2></div><span className={styles.careerHint}><FiDatabase aria-hidden="true" /> DATA THAT MOVES WORK FORWARD</span></div><GlowBorderCard className={styles.dataCentreGlow} duration={12}><div className={styles.dataCentreCard}><div className={styles.dataCentreIcon}><FiDatabase aria-hidden="true" /></div><div><span>COMPANY DATA PLATFORM</span><h3>Gen7 DataCentre</h3><p>Built and supported the company’s employee-facing DataCentre: a shared place for teams to access business and operational data and put it to work.</p></div><span className={styles.dataCentreSignal}><i /> SHARED DATA</span></div></GlowBorderCard><ol className={styles.timeline}>{about.work.experiences.map((experience, index) => <li className={styles.timelineItem} key={`${experience.company}-${experience.role}-${index}`}><div className={styles.timelineMarker}><span>{String(about.work.experiences.length - index).padStart(2, "0")}</span><i /></div><ScrollReveal delay={Math.min(index * 0.07, 0.28)}><article className={styles.experienceCard}><div className={styles.experienceTop}><div><span className={styles.experienceDate}>{experience.timeframe}</span><h3>{experience.company}</h3><p>{experience.role}</p></div>{index === 0 && <span className={styles.currentBadge}><i /> CURRENT</span>}</div><ul>{experience.achievements.map((achievement, achievementIndex) => <li key={achievementIndex}>{achievement}</li>)}</ul></article></ScrollReveal></li>)}</ol></div></section>

        <section className={styles.skills} aria-labelledby="skills-title"><div className={styles.resumeSectionLabel}><span>04</span> THE TOOLKIT</div><div className={styles.skillsBody}><span className={styles.resumeEyebrow}>PRACTICAL EXPERIENCE</span><h2 id="skills-title">Tools I use to make<br />data dependable.</h2><div className={styles.skillsGrid}>{skillGroups.map((group) => <article className={styles.skillGroup} key={group.name}><h3>{group.name}</h3><div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></div></section>

        <section className={styles.education} aria-label="Education"><div className={styles.resumeSectionLabel}><span>05</span> EDUCATION</div><div className={styles.educationList}>{about.studies.institutions.map((school) => <article key={school.name}><span>EDUCATION</span><h3>{school.name}</h3><p>{school.description}</p></article>)}</div></section>

        <footer className={styles.resumeFooter}><span>THE NEXT GOOD QUESTION IS ALWAYS WORTH ASKING.</span><a href={`mailto:${person.email}`}>Get in touch <FiArrowUpRight aria-hidden="true" /></a><Link href="/">Back to the beginning ↑</Link></footer>
      </div>
    </main>
  );
}
