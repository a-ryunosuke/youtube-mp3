import type { Dispatch, SetStateAction } from "react"

type Props = {
    fileName: string
    artist: string
    convertHistory: string[]
    setConvertHistory: Dispatch<SetStateAction<string[]>>
}

export const arrayConvertHistory = ({ fileName, artist, convertHistory, setConvertHistory}: Props) =>  {
    const edit = `title:${fileName}\nartist:${artist}`;

    setConvertHistory([...convertHistory, edit]);
}