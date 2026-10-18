import Link from "next/link";
import Image from "next/image";
import { FiArrowDownRight, FiArrowUpRight, FiBarChart2, FiDatabase, FiGithub, FiGitBranch, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { baseURL } from "@/app/resources";
import { home, person } from "@/app/resources/content";
import { Meta } from "@/once-ui/modules";
import styles from "./portfolio.module.scss";

export async function generateMetadata() {
  return Meta.generate({ title: home.title, description: home.description, baseURL, path: home.path, image: home.image });
}

const focusAreas = [
  { number: "01", icon: FiDatabase, label: "Data engineering", detail: "Reliable pipelines & models" },
  { number: "02", icon: FiBarChart2, label: "Analytics", detail: "Decisions grounded in data" },
  { number: "03", icon: FiGitBranch, label: "Automation", detail: "Less repetition. More room to think." },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}><span className={styles.statusDot} /> DATA / ENGINEERING / INSIGHT <span className={styles.eyebrowIndex}>PORTFOLIO — 2026</span></div>
            <h1 id="hero-title">Make the data<br />make <span className={styles.accentWord}>sense.</span></h1>
            <p className={styles.intro}>I’m Samuel Kim — a data engineer and analyst who turns scattered information into systems people can trust and decisions they can act on.</p>
            <div className={styles.heroActions}><Link className={styles.primaryAction} href="/work">Explore selected work <FiArrowUpRight aria-hidden="true" /></Link><Link className={styles.secondaryAction} href="/about">My story <FiArrowDownRight aria-hidden="true" /></Link></div>
            <div className={styles.heroMeta}><span><FiMapPin aria-hidden="true" /> Ancaster, Ontario</span><span className={styles.metaRule} /><span>EN <span className={styles.mutedSlash}>/</span> 한국어</span></div>
          </div>

          <div className={styles.heroVisual}>
            <div className={`${styles.orbit} ${styles.orbitOuter}`} /><div className={`${styles.orbit} ${styles.orbitInner}`} /><div className={styles.portraitGlow} />
            <div className={styles.portraitCard}><Image src={person.avatar} alt="Samuel Kim" width={320} height={380} priority className={styles.portrait} /><div className={styles.portraitCaption}><span>JONGEUN “SAMUEL” KIM</span><span>DATA &amp; BUSINESS INTELLIGENCE</span></div></div>
            <div className={styles.floatingBadge}><span className={styles.badgeGlyph}>↳</span><span>From question<br />to useful answer.</span></div><div className={styles.visualIndex}>FIG. 01 <span>—</span> THE INTERPRETER</div>
          </div>
          <a className={styles.scrollCue} href="#approach"><span className={styles.scrollLine} /> SCROLL TO EXPLORE</a>
        </section>

        <section id="approach" className={styles.approach} aria-labelledby="approach-title">
          <div className={styles.sectionIntro}><span className={styles.sectionLabel}>WHAT I BRING</span><h2 id="approach-title">Good analysis is more than a chart.<br /><span>It’s confidence in what comes next.</span></h2></div>
          <div className={styles.focusGrid}>{focusAreas.map(({ number, icon: Icon, label, detail }) => <article className={styles.focusCard} key={number}><div className={styles.cardTop}><span>{number} / 03</span><Icon aria-hidden="true" /></div><h3>{label}</h3><p>{detail}</p><div className={styles.cardRule} /></article>)}</div>
          <div className={styles.principle}><span className={styles.principleMark}>“</span><p>Start with the people making the decision.<br />Work backward to the data they need.</p><span className={styles.principleByline}>A working principle</span></div>
        </section>

        <section className={styles.bottomCta} aria-label="Explore more"><div><span className={styles.sectionLabel}>A LITTLE MORE CONTEXT</span><h2>The work.<br /><span>The person behind it.</span></h2></div><div className={styles.ctaLinks}><Link href="/work">See selected projects <FiArrowUpRight aria-hidden="true" /></Link><Link href="/about">About me <FiArrowUpRight aria-hidden="true" /></Link></div></section>
        <footer className={styles.footer}><span>© 2021 Samuel Kim <span className={styles.mutedSlash}>/</span> Built with curiosity in Ontario</span><div className={styles.footerLinks}><a href="https://github.com/JKsamuel" aria-label="GitHub"><FiGithub /></a><a href="https://www.linkedin.com/in/samuelkim87/" aria-label="LinkedIn"><FiLinkedin /></a><a href={`mailto:${person.email}`} aria-label="Email"><FiMail /></a></div></footer>
      </div>
    </main>
  );
}
