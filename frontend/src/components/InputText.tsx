import type { FieldValues } from "react-hook-form"
import type { BaseFormProps } from "../types/form"

export const InputText = <T extends FieldValues>({formType, errors, register} : BaseFormProps<T>) => {
    return (
        <div>
            <label htmlFor={formType}>{formType}</label>
            <input type="text"
            id={formType}
            {...register(formType)}
            // 通常はリンク入力例ーエラー時エラー表示
            placeholder={errors[formType]?.message as string} />
            {/* {errors[formType] && <p>{errors[formType]?.message as string}</p>} */}
        </div>
    )
}