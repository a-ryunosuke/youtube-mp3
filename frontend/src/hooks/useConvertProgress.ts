import { useEffect, type Dispatch, type SetStateAction } from "react"
import io from "socket.io-client"

type Props = {
  setConvert: Dispatch<SetStateAction<boolean>>
}

export const useConvertProgress = ({ setConvert }:Props) => {
  useEffect(() => {
    const socket = io("http://localhost:5001", {
      transports: ["websocket"],
      reconnection: false,
    })

    socket.on("progress", (data: { status: string }) => {
      if (data.status === "finished") {
        // 終わったらローディング具終了
        setConvert(false)
      }
    })

    return () => {
      socket.disconnect()
    }
  }, [setConvert])
}