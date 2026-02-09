import { useState } from "react"
import { useEffect } from "react"

type Props = {
    fileName: string
    artist: string
    converting: boolean
}

type HistoryItem = {
    fileName: string
    artist: string
    t: number
}

export const useConverterHistory = ({ fileName, artist, converting }: Props) => {
    const [converterHistory, setConverterHistory] = useState<HistoryItem[]>([])

    useEffect(() => {
        if (!converting) return

        setConverterHistory(prev => [
            ...prev,
            { fileName, artist, t: Date.now() }
        ])
    }, [converting])


    
    return converterHistory
}