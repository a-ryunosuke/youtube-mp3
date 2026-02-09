import { useState } from "react"

export const useErrorText = () => {
    const [ error, setError ] = useState<string[]>([])

    return { error, setError }
}