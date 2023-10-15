import styles from "../styles/buttonsOperators.module.css";
import { operatorProps } from "../types/inputs";
const btns = ["÷", "x", "-", "+"];

export function Operators({ addOperator, removeNumber, solve }: operatorProps) {
  const handleClick = (event: string) => {
    const value = event;
    addOperator(value);
  };
  const handleRemove = () => {
    removeNumber();
  };
  const handleEqual = () => {
    solve();
  };
  return (
    <div className={styles.container}>
      <div style={{ flexWrap: "wrap" }}>
        <button className={styles.button} onClick={handleRemove}>
          <img
            src="../imgs\keyboard_backspace_FILL0_wght400_GRAD0_opsz24.svg"
          />
        </button>
        {btns.map(btn=><button
              className={styles.button}
              key={btn}
              onClick={() => {
                handleClick(btn);
              }}
            >
              {btn}
            </button>
            )}
        <button
          className={styles.borderBtn}
          onClick={() => {
            handleEqual();
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}
