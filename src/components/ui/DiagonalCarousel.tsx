"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./diagonal-carousel.module.scss";

export type DataFlowSlide = {
  step: string;
  title: string;
  description: string;
  tools: string[];
  signal: string;
};

export function DiagonalCarousel({ slides }: { slides: DataFlowSlide[] }) {
  const [active, setActive] = useState(0);
  const move = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);
  const slide = slides[active];

  return (
    <div className={styles.carousel} aria-label="Data engineering lifecycle carousel">
      <div className={styles.stage} aria-live="polite">
        {slides.map((item, index) => {
          const offset = (index - active + slides.length) % slides.length;
          const visible = offset < 3;
          return (
            <motion.article
              key={item.step}
              className={styles.card}
              aria-hidden={offset !== 0}
              animate={{
                x: visible ? offset * 24 : 390,
                y: visible ? offset * 17 : 110,
                rotate: visible ? -5 + offset * 4 : 14,
                scale: visible ? 1 - offset * 0.055 : 0.72,
                opacity: visible ? 1 - offset * 0.22 : 0,
                zIndex: slides.length - offset,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
              style={{ pointerEvents: offset === 0 ? "auto" : "none" }}
            >
              <div className={styles.cardTop}><span>{item.step}</span><span className={styles.live}><i /> DATA FLOW</span></div>
              <div className={styles.cardContent}>
                <span className={styles.kicker}>{item.signal}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.tags}>{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </div>
              <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
            </motion.article>
          );
        })}
        <div className={styles.axis} aria-hidden="true"><span>SOURCE</span><i /><span>DECISION</span></div>
      </div>
      <div className={styles.controls}>
        <div className={styles.progress} aria-label={`Slide ${active + 1} of ${slides.length}`}>
          {slides.map((item, index) => <button key={item.step} type="button" aria-label={`Show ${item.title}`} aria-current={index === active ? "step" : undefined} onClick={() => setActive(index)}><span style={{ transform: `scaleX(${index === active ? 1 : 0.45})` }} /></button>)}
        </div>
        <span className={styles.counter}>{String(active + 1).padStart(2, "0")} <i>/</i> {String(slides.length).padStart(2, "0")}</span>
        <div className={styles.arrows}><button type="button" onClick={() => move(-1)} aria-label="Previous data flow"><FiArrowLeft /></button><button type="button" onClick={() => move(1)} aria-label="Next data flow"><FiArrowRight /></button></div>
      </div>
      <p className={styles.note}>A representative view of the data flow; production volumes vary by source.</p>
    </div>
  );
}
