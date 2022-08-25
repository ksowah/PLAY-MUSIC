/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react"
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


interface Props {
  song: string,
  title: string,
  artist: string,
  image: string
}


const AudioControl = ({song, title, artist, image}: Props) => {

    const audioElement: any = useRef()
    const clickRef: any = useRef()

    const [isPlaying, setIsPlaying] = useState(false)
    const [timePlayed, setTimePlayed] = useState(0)
    const [totalDuration, setTotalDuration] = useState(0)


    const onPlaying = () => {
        const duration = audioElement.current.duration
        setTotalDuration(duration)
        const durationPlayed = audioElement.current.currentTime

        setTimePlayed(((durationPlayed / duration) * 100))

        if(durationPlayed === duration) setIsPlaying(false)
        
    }

    const checkWidth = (e: any) => {
        let width =clickRef.current.clientWidth
        const offSet = e.nativeEvent.offsetX

        const divProgress = offSet / width * 100
        audioElement.current.currentTime = divProgress / 100 * totalDuration
    }

    useEffect(() => {
      if(isPlaying){
        audioElement.current.play()
      }else{
        audioElement.current.pause()
      }
    }, [isPlaying])
    

  return (
    <div className="flex items-center justify-center space-x-4 py-6">

        <audio onTimeUpdate={onPlaying} src={song} ref={audioElement} />

        <div className="h-10 w-10 rounded-lg overflow-hidden">
          <img src={image} alt="song image" className="h-full w-full object-cover"/>
        </div>

        <div className="text-xs w-20">
            <p className="font-bold text-gray-50 truncate">{title}</p>
            <p className="text-gray-300 truncate">{artist}</p>
        </div>

        <div onClick={() => setIsPlaying(!isPlaying)} className="h-7 w-7 z-10 flex items-center justify-center cursor-pointer bg-gray-700 rounded-lg">
              {isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
        </div>

        <div className="w-[45%] h-[2px] bg-gray-700 cursor-pointer z-10" onClick={checkWidth} ref={clickRef}>
          <div className={`relative h-full bg-gray-50`} style={{width: `${timePlayed}%`}}>
              <div className="h-2 w-2 rounded-full bg-gray-50 absolute right-0 -bottom-[3px]"></div>
          </div>
        </div>
    </div>
  )
}

export default AudioControl