import { useReducer } from "react"

// 型を一括宣言、ここからインポートすることで型宣言間違えしなくなる
export type FormValue = {
    youtubeUrl: string
    fileName: string
    artist: string
    comment: string
}

// 引数actionの型定定義
// type名が大文字なのは文化であり慣習
type Action =
| { type: keyof FormValue; value: string }
| { type: "RESET" }
| { type: "YOUTUBE_URL_RESET" }
| { type: "FILE_NAME_RESET" }


// dispatch呼び出されたら state(formValue)コピーして action:typeにaction.valueの値を持たせる(発火源)
const reducer = ( state: FormValue, action: Action) => {
    switch (action.type) {
        case "RESET":
            return {
                youtubeUrl: "",
                fileName: "",
                artist: "",
                comment: ""
                }
        // 特定の値のみ更新したい場合は、スプレッド構文＋更新したい値を用いる
        case "YOUTUBE_URL_RESET":
            return {
                ...state,
                youtubeUrl: ""
            }
        case "FILE_NAME_RESET":
            return {
                ...state,
                fileName: ""
            }
        default:
            return{
                ...state,
                [action.type]: action.value
            }
    }
}

export const useFileTextHooks = () => {
    // reducerが初期化 reducer関数の呼び出し、及びstateの初期値定義
    const [formValue, dispatch] = useReducer(reducer, {
        youtubeUrl: "",
        fileName: "",
        artist: "",
        comment: ""
    } satisfies FormValue)
    
    // inputに渡す関数の定義
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 正しくは、reducer, {初期値}に基き、dispatch{値}で新しいstateが作成される
        dispatch({ 
            type: e.target.name as keyof FormValue, 
            value: e.target.value
        })
    }

    const reset = () => {
        dispatch({ type: "RESET" })
    }

    const youtubeUrlReset = () => {
        dispatch({ type: "YOUTUBE_URL_RESET" })
    }

    const fileNameReset = () => {
        dispatch({ type: "FILE_NAME_RESET"})
    }
    
    // 関数と現在値を返す formValue、その他関数
    return { formValue, handleChange, reset, youtubeUrlReset, fileNameReset }
}