import * as z from "zod"

export const schema = z.object({
    youtubeUrl: z
    .string()
    .min(1, { message: "youtubeLinkを入力してください"}),
    fileName: z
    .string()
    .min(1, { message: "ファイル名を入力してください"}),
    artist: z
    .string(),
    // .min(1, { message: ""}),
    comment: z
    .string()
    // .min(1, { message: ""})
})

export type ContactFormValues = z.infer<typeof schema>