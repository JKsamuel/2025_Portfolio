"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiDatabase } from "react-icons/fi";
import { AnimatedRays } from "@/components/ui/AnimatedRays";
import { StaggerText } from "@/components/ui/StaggerText";
import styles from "./work.module.scss";

export type WorkItem = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  images: string[];
  category: string;
  technologies: string[];
};

function ScrollDissolveProject({ item, index }: { item: WorkItem; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const revealClip = useTransform(scrollYProgress, [0, 0.24, 0.76, 1], prefersReducedMotion ? ["inset(0% 0% 0% 0% round 22px)", "inset(0% 0% 0% 0% round 22px)", "inset(0% 0% 0% 0% round 22px)", "inset(0% 0% 0% 0% round 22px)"] : ["inset(20% 18% 20% 18% round 26px)", "inset(0% 0% 0% 0% round 22px)", "inset(0% 0% 0% 0% round 22px)", "inset(18% 14% 18% 14% round 26px)"]);
  const clarity = useTransform(scrollYProgress, [0, 0.2, 0.78, 1], prefersReducedMotion ? ["blur(0px) saturate(1)", "blur(0px) saturate(1)", "blur(0px) saturate(1)", "blur(0px) saturate(1)"] : ["blur(12px) saturate(.45)", "blur(0px) saturate(1)", "blur(0px) saturate(1)", "blur(10px) saturate(.5)"]);
  const dissolve = useTransform(scrollYProgress, [0, 0.18, 0.34, 0.66, 0.84, 1], prefersReducedMotion ? [0, 0, 0, 0, 0, 0] : [0.88, 0.58, 0.08, 0.08, 0.5, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [26, 0, -24]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.18, 0.8, 1], prefersReducedMotion ? [1, 1, 1, 1] : [0.38, 1, 1, 0.48]);
  const copyY = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], prefersReducedMotion ? [0, 0, 0, 0] : [30, 0, 0, -20]);
  const image = item.images[0];

  return (
    <article ref={sectionRef} className={`${styles.project} ${index % 2 ? styles.projectReverse : ""}`}>
      <div className={styles.projectIndex} aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
      <motion.div className={styles.visualFrame} style={{ clipPath: revealClip, filter: clarity, y }}>
        {image ? <Image src={image} alt={`${item.title} project preview`} fill sizes="(max-width: 760px) 100vw, 58vw" className={styles.projectImage} priority={index === 0} unoptimized /> : <div className={styles.imageFallback}><FiDatabase aria-hidden="true" /><span>DATA SYSTEMS / {String(index + 1).padStart(2, "0")}</span></div>}
        <div className={styles.imageShade} />
        <motion.div className={styles.dissolve} style={{ opacity: dissolve }} aria-hidden="true" />
        <span className={styles.visualLabel}>SCROLL / REVEAL</span>
        {item.images.length > 1 && <span className={styles.imageCount}>01 <i>/</i> {String(item.images.length).padStart(2, "0")}</span>}
      </motion.div>
      <motion.div className={styles.projectCopy} style={{ opacity: copyOpacity, y: copyY }}>
        <div className={styles.projectMeta}><span>{item.category}</span><span>{new Date(`${item.publishedAt}T00:00:00`).getFullYear()}</span></div>
        <h2>{item.title}</h2>
        <p>{item.summary}</p>
        <div className={styles.projectTags}>{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <Link className={styles.caseLink} href={`/work/${item.slug}/`}>Read case study <FiArrowUpRight aria-hidden="true" /></Link>
      </motion.div>
    </article>
  );
}

export function WorkIndex({ items }: { items: WorkItem[] }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className={styles.page}>
      <motion.div className={styles.progressTrack} style={{ scaleX: prefersReducedMotion ? 1 : progressScale }} aria-hidden="true" />
      <div className={styles.shell}>
        <header className={styles.hero}>
          <AnimatedRays className={styles.rays} />
          <div className={styles.heroCopy}><span className={styles.eyebrow}><i /> PROJECTS / DATA / DECISIONS</span><h1><StaggerText>Work in</StaggerText><br /><em><StaggerText delay={0.13}>motion.</StaggerText></em></h1><p>Systems, analytics, and automation that turn operational complexity into data people can use.</p><a href="#selected-work" className={styles.scrollLink}>FOLLOW THE SIGNAL <FiArrowDown aria-hidden="true" /></a></div>
          <div className={styles.heroIndex}><span>FIELD NOTES</span><strong>{String(items.length).padStart(2, "0")}</strong><i />SELECTED PROJECTS</div>
        </header>
        <section id="selected-work" className={styles.workSection} aria-labelledby="work-heading">
          <div className={styles.sectionHead}><div><span className={styles.sectionKicker}>A BODY OF WORK</span><h2 id="work-heading">From messy inputs<br /><em>to a clearer picture.</em></h2></div><p>Each project starts with a real question, follows the data, and ends with something useful to the people doing the work.</p></div>
          <div className={styles.projectList}>{items.map((item, index) => <ScrollDissolveProject key={item.slug} item={item} index={index} />)}</div>
        </section>
        <footer className={styles.footer}><span>GOOD DATA SHOULD MOVE SOMETHING FORWARD.</span><Link href="/about">Meet the person behind the work <FiArrowUpRight aria-hidden="true" /></Link></footer>
      </div>
    </main>
  );
}
