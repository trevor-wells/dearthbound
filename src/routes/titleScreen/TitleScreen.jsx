import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
  <div id="title-screen">
      {/* FIXME */}
      <audio src="/src/assets/audio/music/titleScreen.mp3" autoPlay loop volume={0.3} muted/>
      <h1 id="game-title" className="bounce-in-bck">DEARTHBOUND</h1>
      <Link to="/character"><button className="nes-container is-dark is-rounded">Play</button></Link>
      <button  id="fullscreen" className="nes-container is-dark is-rounded" onClick={toggleFullscreen}>Fullscreen</button>
  </div>
  )
} 