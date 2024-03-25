'use client'
import { useWindowListener } from "@/hooks/useWindowListener"
import { useRef , useEffect, useState} from "react"

export default function VideoPlayer({vdoSrc, isPlaying} : {vdoSrc:string, isPlaying:boolean}) {

    const vdoRef = useRef<HTMLVideoElement>(null)
    useEffect(()=>{
        if(isPlaying){
           //alert('Play VoD')
           vdoRef.current?.play()
        }
        else{
           //alert('Pause')
           vdoRef.current?.pause()
        }
    }, [isPlaying])

    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted/>
    )
}