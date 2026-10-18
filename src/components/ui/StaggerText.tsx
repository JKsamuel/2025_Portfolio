"use client";

import { motion } from "framer-motion";
import styles from "./stagger-text.module.scss";

type StaggerTextProps = {
  children: string;
  className?: string;
  delay?: number;
  divideBy?: "word" | "letter";
};

const EASE = [0.22, 1, 0.36, 1] as const;

/** Adapted from Vengeance UI's Stagger Text registry component. */
export function StaggerText({
  children,
  className,
  delay = 0,
  divideBy = "word",
}: StaggerTextProps) {
  const parts = divideBy === "letter" ? Array.from(children) : children.split(" ");
  const stagger = divideBy === "letter" ? 0.02 : 0.06;

  return (
    <motion.span
      className={`${styles.root} ${className ?? ""}`}
      aria-label={children}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {parts.map((part, index) => (
        <span className={styles.clip} key={`${part}-${index}`} aria-hidden="true">
          <motion.span
            className={styles.word}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.62, ease: EASE } },
            }}
          >
            {part}{divideBy === "word" ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
