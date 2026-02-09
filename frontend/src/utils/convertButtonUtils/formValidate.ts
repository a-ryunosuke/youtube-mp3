import type { FormValue } from "../../hooks/useFileTextHooks"

type Props = {
  formValue: FormValue
}

// siValid 成否を表す
// error エラーを配列で返す
// resetType 空白にする対象
// error,resetType何故配列？
type ValidationResult = {
  isValid: boolean
  error: string[]
  resetType: ("youtubeUrl" | "fileName")[]
}

// 引数の値によってresultの値が変化.それを返す関数
export const formValidate = ({ formValue }: Props) => {
  const { youtubeUrl, fileName } = formValue

  const result: ValidationResult = {
    isValid: true,
    error: [],
    resetType: []
  }

  const youtubeUrlTest = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|shorts\/)?([a-zA-Z0-9_-]{11})(\?.*)?$/;

  if (youtubeUrl.trim() === "") {
    result.isValid = false
    result.error.push("リンクを入力してください")
    result.resetType.push("youtubeUrl")
  } else if (!youtubeUrlTest.test(youtubeUrl.trim())) {
    result.isValid = false
    result.error.push("youtubeのリンクを入力してください")
    result.resetType.push("youtubeUrl")
  }
  if (fileName.trim() === "") {
    result.isValid = false
    result.error.push("ファイル名を入力してください")
    result.resetType.push("fileName")
  }
  
  return result
}

// 正規表現参考
// youtube右クリックコピー https://youtu.be/AJpEEOr3PKQ?list=RDAJpEEOr3PKQ
// 共有 https://youtu.be/AJpEEOr3PKQ?si=1Sy1H9vEtgGO_3rn
// alertではなく画面表示する
// 別リンクならば入力欄削除