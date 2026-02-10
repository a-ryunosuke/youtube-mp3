type Props = {
    submitStates: string
}

export const InputFormButon = ({ submitStates }: Props) => {
    return (
        <button disabled={submitStates === "submitting"}>
            {submitStates === "submitting" ? "送信中" : "送信する"}
        </button>
    )
}