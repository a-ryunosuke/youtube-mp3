import type { FieldErrors, FieldValues } from "react-hook-form"
import { errorList } from "../../tv/components/form/errorList"
import { useContext } from "react"
import { DisplayColorContext } from "../../context/DisplayColorContext"

type Props<T extends FieldValues> = {
    errors: FieldErrors<T>
}

export const ErrorList = <T extends FieldValues>({ errors }: Props<T>) => {
    const errorEntries = Object.entries(errors) as [keyof T, any][]
    const { displayColor } = useContext(DisplayColorContext)
    const { base, text, flame } = errorList({
        color: displayColor ? "light" : "dark"
    })

    if (errorEntries.length === 0) return null
    
    return (
    <div className={base()}>
         <ul className={flame()}>
            <div>入力エラー</div>
            {errorEntries.map(([a, error]) => (
                <li className={text()} key={String(a)}>
                    {error?.message as string}
                </li>
            ))}
         </ul>
    </div>
    )
}