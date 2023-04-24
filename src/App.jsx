import {useState, useEffect} from "react"
import TitleScreen from './routes/title-screen/TitleScreen'

export default function App() {

  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    const handleFullScreenChange = () => {
      setFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullScreenChange)
  }, [])

  function toggleFullscreen(){
    if (fullscreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen()
    }

  }

  return (
    <>
      <TitleScreen />
      <button onClick={toggleFullscreen}>Fullscreen</button>
    </>
  )
}
