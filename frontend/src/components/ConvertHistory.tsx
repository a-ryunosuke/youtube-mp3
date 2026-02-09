import { useState } from "react"
import type { FormValue } from "../hooks/useFileTextHooks"
import { useConverterHistory } from "../hooks/useConverterHistory"

type Props = {
    formValue: FormValue
    converting: boolean
}

export const ConvertHistory = ({ formValue, converting }: Props) => {
    const [toggleConvertHistory, setToggleConvertHistory] = useState<boolean>(false)
    const { fileName, artist } = formValue
    const history = useConverterHistory({ fileName, artist, converting  })
    const sortHistory = [...history].sort((a, b) => b.t - a.t)

    const toggle = () => {
        setToggleConvertHistory(!toggleConvertHistory)
    }
    
    return (
        <div>
            <button onClick={toggle}>↓</button>
            {toggleConvertHistory && (
                <ul>
                    {sortHistory.map((i, index) =>
                    <li key={index}>{i.fileName}｜{i.artist}</li>
                    )}
                </ul>
            )}
        </div>
    )
}