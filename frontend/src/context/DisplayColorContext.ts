import { createContext } from "react";

// 型指定
type ContextType = {
    displayColor: boolean
    setDisplayColor: (value: boolean) => void
}

// context管理
export const DisplayColorContext = createContext<ContextType>({
    // 初期値false
    displayColor: true,
    // 変更対象の値、型指定
    setDisplayColor: () => {}
})
