import styles from "./animated-rays.module.scss";

/** Lightweight, CSS-only adaptation of Vengeance UI's Animated Rays background. */
export function AnimatedRays({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.rays} ${className}`} aria-hidden="true">
      <span className={styles.rayLayer} />
      <span className={styles.rayLayerSecondary} />
    </div>
  );
}
