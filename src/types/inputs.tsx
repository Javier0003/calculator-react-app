export type inputsProps = {
    values: string,
}

export type operatorProps = {
    addNumber: (value:string) => void,
    removeNumber: () => void
    solve: () => void
}

export type btnPropsKeyboard = {
    addNumber: (value:string) => void
}