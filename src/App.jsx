import {useState, useEffect} from "react"
import { Outlet } from "react-router-dom"

export default function App() {

  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    const handleFullScreenChange = () => {setFullscreen(!!document.fullscreenElement)}
    document.addEventListener('fullscreenchange', handleFullScreenChange)
  }, [])

  function toggleFullscreen(){
    if (fullscreen) {document.exitFullscreen()}
    else {document.documentElement.requestFullscreen()}
  }

  return (
    <>
      <div>
        <Outlet />
      </div>
      <button  className="fixed right-0 bottom-0 nes-btn"onClick={toggleFullscreen}>Fullscreen</button>
    </>
  )
}
