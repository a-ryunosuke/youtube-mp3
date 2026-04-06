import * as z from "zod"

const youtubeUrlTest = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|shorts\/)?([a-zA-Z0-9_-]{11})(\?.*)?$/;
const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const schema = z.object({
    youtubeUrl: z
        .string()
        .min(1, { message: "YoutubeUrl未入力" })
        .regex(youtubeUrlTest, { message: "正しいYoutubeUrl入力" }),
    fileName: z
        .string()
        .min(1, { message: "ファイル未入力" }),
    artist: z
        .string(),
    // .min(1, { message: ""}),
    comment: z
        .string()
    // .min(1, { message: ""})
})

export const signupLoginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "メールアドレス未入力" })
        .regex(emailTest, { message: "正しいメールアドレス入力" }),
    password: z
        .string()
        .min(1, { message: "パスワード未入力" })
        .regex(passwordTest, { message: "正しいパスワード入力" })
})

export type ContactFormValues = z.infer<typeof schema>
export type SignupFormValues = z.infer<typeof signupLoginSchema>

// min-最小文字数の指定