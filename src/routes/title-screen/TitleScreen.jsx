import { Link } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"


export default function TitleScreen(){
    return(
    <div className="title-screen">
        <ReactAudioPlayer src="/src/assets/audio/music/title-screen.mp3" autoPlay loop volume={0.3}/>
        <h1 className="game-title">DEARTHBOUND</h1>
        <Link to="/character"><button className="border-white">PLAY</button></Link>
    </div>
    )
}