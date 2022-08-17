import { useRef } from "react"

const AudioControl = () => {

    const audioElement: any = useRef()

    const play = () => {
        audioElement.current.play()
    }

  return (
    <div className="flex items-center justify-center space-x-6 py-10">

        <audio src={"https://firebasestorage.googleapis.com/v0/b/play-ba529.appspot.com/o/track%2F62fa68b43699fa7525a337ce%2Fsong?alt=media&token=0766e0d8-107f-4fb9-b833-dc4cd028cf44"} ref={audioElement} />

        <div className="h-10 w-10 rounded-lg bg-white"></div>

        <div className="text-xs">
            <p className="font-bold text-gray-50">Thunder</p>
            <p className="text-gray-300">Imagine Dragons</p>
        </div>

        <div onClick={play} className="h-7 w-7 bg-red-400 rounded-lg cursor-pointer">

        </div>
    </div>
  )
}

export default AudioControl