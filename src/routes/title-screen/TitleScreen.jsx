import { Link } from "react-router-dom"
import {useState, useEffect} from "react"
import ReactAudioPlayer from "react-audio-player"


export default function TitleScreen(){

    const [fullscreen, setFullscreen] = useState(false)

    useEffect(() => {
      const handleFullScreenChange = () => {setFullscreen(!!document.fullscreenElement)}
      document.addEventListener('fullscreenchange', handleFullScreenChange)
    }, [])
  
    function toggleFullscreen(){
      if (fullscreen) {document.exitFullscreen()}
      else {document.documentElement.requestFullscreen()}
    }
  
    return(
    <div className="title-screen">
        <ReactAudioPlayer src="/src/assets/audio/music/title-screen.mp3" autoPlay loop volume={0.3}/>
        <h1 className="game-title bounce-in-bck">DEARTHBOUND</h1>
        <Link to="/character"><button className="border-white">PLAY</button></Link>
        <button  className="fixed right-0 bottom-0 nes-btn" onClick={toggleFullscreen}>Fullscreen</button>
    </div>
    )
}