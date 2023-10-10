import { inputsProps } from "../types/inputs";
import styles from "../styles/screen.module.css"

export function Screen({ values }: inputsProps) {
  return (
    <div className={styles.screen}>
      <div className={styles.numbers}>
        {values}
      </div>
    </div>
  );
}
