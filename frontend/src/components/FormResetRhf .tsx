type Props = {
    reset: () => void
}

export const FormResetRhf = ({ reset }: Props) => {
    return (
        <button onClick={() => reset()}>RESET</button>
    )
}