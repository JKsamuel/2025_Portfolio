import type { CSSProperties, ReactNode } from "react";
import styles from "./glow-border-card.module.scss";

type GlowBorderCardProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
};

/** Adapted from Vengeance UI's CSS-only Glow Border Card registry component. */
export function GlowBorderCard({ children, className, duration = 10 }: GlowBorderCardProps) {
  return (
    <div
      className={`${styles.frame} ${className ?? ""}`}
      style={{ "--glow-duration": `${duration}s` } as CSSProperties}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}
