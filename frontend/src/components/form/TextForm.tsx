import type { UseFormRegister, FieldErrors, FieldValues, Path  } from "react-hook-form"
// 型だけを使う場合は import type を用いる

import { DisplayColorContext } from "../../context/DisplayColorContext"
import { useContext, useEffect } from "react"
import { textForm } from "../../tv/components/form/textForm"

type Props<T extends FieldValues> = {
    // <T> 型ジェネリクスー引数の型を参照し受け取った型に応じて型安全にする
    placeholder: string
    formType: Path<T>
    errors: FieldErrors<T>
    register: UseFormRegister<T>;
}

export const TextForm = <T extends FieldValues>({formType, errors, placeholder, register} : Props<T>) => {
    const { displayColor } = useContext(DisplayColorContext)
    const { base, label, input, error } = textForm({
        color: displayColor ? "light" : "dark"
    })
    
    useEffect(() => {
        console.log("a")
    },[])
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