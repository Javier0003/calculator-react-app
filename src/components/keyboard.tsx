import styles from "../styles/buttonsNumbers.module.css";
import { btnPropsKeyboard } from "../types/inputs";

const btns = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function Keyboard({ addNumber }: btnPropsKeyboard) {
  const handleClick = (event: string) => {
    const value = event;
    addNumber(value);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        height: "78%",
        width: "70%",
        borderRadius: "0px 0px 0px 20px",
      }}
    >
      <div
        style={{
          flexWrap: "wrap",
        }}
      >
        {btns.map((btns) => {
          return (
            <button
              key={btns}
              className={styles.button}
              onClick={() => {
                handleClick(btns);
              }}
            >
              {btns}
            </button>
          );
        })}
        <button
          className={styles.button}
          style={{ borderRadius: "0px 0px 0px 20px" }}
          onClick={() => {
            handleClick("-");
          }}
        >
          -
        </button>
        <button
          className={styles.button}
          onClick={() => {
            handleClick("0");
          }}
        >
          0
        </button>
        <button
          className={styles.button}
          onClick={() => {
            {
              handleClick(",");
            }
          }}
        >
          ,
        </button>
      </div>
    </div>
  );
}
