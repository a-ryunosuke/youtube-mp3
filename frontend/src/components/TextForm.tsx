import type { FieldValues } from "react-hook-form"
import type { BaseFormProps } from "../types/form"

import { DisplayColorContext } from "../context/DisplayColorContext"
import { useContext } from "react"
import { textForm } from "../tv/components/textForm.tv"

export const TextForm = <T extends FieldValues>({ formType, errors, placeholder, register }: BaseFormProps<T>) => {
    const { displayColor } = useContext(DisplayColorContext)
    const { base, label, input, error } = textForm({
        color: displayColor ? "light" : "dark"
    })

    return (
        <div className={base()}>
            <label
                className={label()}
                htmlFor={`${formType}入力してください`}>
                {formType}
            </label>
            <input
                type="text"
                id={formType}
                {...register(formType)}
                // 通常はリンク入力例ーエラー時エラー表示
                placeholder={placeholder}
                className={input()}
            />
            <div className={error()}>
                {errors[formType] && <p>{errors[formType]?.message as string}</p>}
            </div>
        </div>
    )
}