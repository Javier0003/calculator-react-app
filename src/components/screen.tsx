import { inputsProps } from "../types/inputs"

export function Screen( { values }: inputsProps) {
    return(
        <div style={{
            border: "4px solid black",
            width: "100%",
            height: "20%",
            borderRadius: "20px 20px 0px 0px",
            backgroundColor: "black",
        }}>
            <div style={{
                display: "flex",
                color: "white",
                justifyContent: "flex-end",
                marginTop: "15px",
                marginRight: "20px",
                fontSize: "40px",
            }}>{values}</div>
        </div>
    )
}
