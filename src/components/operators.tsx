
import styles from "../styles/buttonsOperators.module.css"
import { operatorProps } from "../types/inputs";
const btns = ["÷", "x", "-", "+"];

export function Operators({addNumber, removeNumber, solve}: operatorProps) {
    const handleClick = (event: string) => {
        const value = event
        addNumber(value)
    }
    const handleRemove = () => {
        removeNumber()
    }
    const handleEqual = () => {
        solve()
    }
    return(
        <div style={{
            border: '1px solid black',
            height: "78%",
            width: "28.65%",
            borderRadius: "0px 0px 20px 0px"
        }}>
            <div style={{
                flexWrap: "wrap"
            }}>
                <button
                className={styles.button}
                onClick={handleRemove}
                >
                    <img src="../imgs\keyboard_backspace_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                </button>
                {btns.map(btns =>{
                    return(
                        <button className={styles.button}
                            key={btns}
                            onClick={() => {handleClick(btns)}}
                            >
                            {btns}
                        </button>
                    )})}
                <button style={{
                    border: 'none',
                    width: '100%',
                    height: '58px',
                    borderRadius: "0px 0px 20px 0px"
                }}
                onClick={() => {handleEqual()}}
                >=</button>
            </div>
            
        </div>
    )
}