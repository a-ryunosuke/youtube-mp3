import type { FormValue } from"../hooks/useFileTextHooks"
import { inputForm } from "../tv/components/inputForm.tv"
import { DisplayColorContext } from "../context/DisplayColorContext"
import { useContext } from "react"

type Props = {
    formType: keyof FormValue
    formValue: FormValue
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputForm = ({ formType, formValue, handleChange }: Props) => {
    const { displayColor } = useContext(DisplayColorContext)
    const { base, label, input } = inputForm({
        color: displayColor ? "light" : "dark"
    })
    
    return(
        <div className={base()}>
            <label
            className={label()}
            htmlFor={formType}>
                {formType}
            </label>
            <input
            className={input()}
            id={formType}
            type="text"
            name={formType}
            placeholder={formType}
            value={formValue[formType] ?? ""} 
            onChange={handleChange} 
            />
        </div>
    )
}
