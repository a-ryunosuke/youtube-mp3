type Props = {
    error: string[]
}

export const ErrorList = ({ error }: Props) => {
    
    if (error.length === 0) {
        return null
    }

    return (
        <div>
            <ul style={{ color: "red" }}>
                {error.map((text, index) => (
                    <li key={index}>{text}</li>
                ))}
            </ul>
        </div>
    )
}