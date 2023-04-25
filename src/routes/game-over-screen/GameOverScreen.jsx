import { Link } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"

export default function GameOverScreen(){
    return(
        <div>
            <ReactAudioPlayer
                src="/src/assets/audio/music/you-win.mp3"
                autoPlay
            />
            <h1>GAME OVER</h1>
            <Link to="/"><button className="nes-btn is-dark">RESTART</button></Link>
        </div>
    )
}