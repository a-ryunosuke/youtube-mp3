import * as z from "zod"

const youtubeUrlTest = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|shorts\/)?([a-zA-Z0-9_-]{11})(\?.*)?$/;

export const schema = z.object({
    youtubeUrl: z
    .string()
    .min(1, { message: "YoutubeUrl未入力"})
    .regex(youtubeUrlTest, { message: "正しいYoutubeUrl入力"}),
    fileName: z
    .string()
    .min(1, { message: "ファイル未入力"}),
    artist: z
    .string(),
    // .min(1, { message: ""}),
    comment: z
    .string()
    // .min(1, { message: ""})
})

export type ContactFormValues = z.infer<typeof schema>

// min-最小文字数の指定
// 