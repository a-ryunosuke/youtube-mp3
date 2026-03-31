import type { UseFormRegister, FieldErrors, FieldValues, Path } from "react-hook-form";

export type BaseFormProps<T extends FieldValues> = {
    // どの入力項目か（例: "youtubeUrl", "fileName" など）
    formType: Path<T>;
    // バリデーションエラーの情報
    errors: FieldErrors<T>;
    // React Hook Formのregister関数
    register: UseFormRegister<T>;
    // プレースホルダー（任意項目として持たせると様々なコンポーネントで使いやすいです）
    placeholder?: string;
};
