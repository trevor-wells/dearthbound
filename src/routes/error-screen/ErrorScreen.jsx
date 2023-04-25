import { useRouteError, Link } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

return (
  <div id="error-page">
    <ReactAudioPlayer src="/src/assets/audio/music/Error.mp3" autoPlay loop/>
    <h1>UH OH</h1>
    <Link to="/"><button>GO BACK HOME</button></Link>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>
)
}
