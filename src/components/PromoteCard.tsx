'use client'
import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { Rating } from "@mui/material"
import { useWindowListener } from "@/hooks/useWindowListener"

export default function PromoteCard() {

    const [playing, setPlaying] = useState(true)
    const [rating, setRating] = useState(0)

    useWindowListener('contextmenu',(e)=>{
        e.preventDefault()
    })

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200
        flex flex-row">
            <VideoPlayer vdoSrc="/vdo/dentist.mp4" isPlaying={playing}></VideoPlayer>
            <div className="m-5 text-black">Get your teeth clean today.
            <button className="block rounded-md bg-lime-400 hover:bg-lime-600 px-3 py-2 shadow-sm
            text-white"
             onClick={()=>{setPlaying(!playing)}}>
                {playing? 'Pause' : 'Play'}
            </button>
            <Rating className="w-full h-[10%]" value={ (rating==undefined)? 0:rating}
            onChange={(e,newValue)=> { if(newValue!=null) setRating(newValue)}}/>
            </div>
        </div>
    )
}