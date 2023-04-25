import {Link} from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"

export default function ShopScreen(){
    return(
        <div>
            <ReactAudioPlayer src="/src/assets/audio/music/ShopMusic.mp3" autoPlay loop />
            <h1>Shop </h1>
            <Link to="/fight"><button className="nes-btn">FIGHT!</button></Link>
        </div>
    )
}