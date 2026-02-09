import { useContext, type Dispatch, type SetStateAction } from "react"

import { callApi } from "../utils/convertButtonUtils/callApi.ts"
import { formValidate } from "../utils/convertButtonUtils/formValidate.ts"
import type { FormValue } from "../hooks/useFileTextHooks.ts"

import { DisplayColorContext } from "../context/DisplayColorContext.ts"
import { button } from "../tv/components/button.tv.ts"

type Props = {
    formValue: FormValue
    converting: boolean
    // なぜ？
    setError: Dispatch<SetStateAction<string[]>>
    setConverting: Dispatch<SetStateAction<boolean>>
    youtubeUrlReset: () => void
    fileNameReset: () => void
}
 

export const ConvertButton = ({ 
    formValue,
    converting,
    setError,
    setConverting,
    youtubeUrlReset,
    fileNameReset
 }: Props) => {

    const { displayColor } = useContext(DisplayColorContext)
    const { noConvert, convert } = button({
        color: displayColor ? "light" : "dark"
    })


    // 非同期処理
    const handleDownload = async () => {
        const result =  formValidate({ formValue })
        
        if (!result.isValid) {
            setError(result.error)
            if (result.resetType.includes("youtubeUrl")) {
                youtubeUrlReset()
            }
            return
        }

        setConverting(true)

        try {
            // callApi引数渡してrun発火
            await callApi({formValue})
            youtubeUrlReset()
            fileNameReset()
        } finally {
            setConverting(false)
        }
    }
    
    return(
        <div >
            {converting? (
            <button className={convert()}>変換中</button>
            ):(
            <button className={noConvert()} onClick={handleDownload}>CVT</button>
            )}
        </div>
    )
}