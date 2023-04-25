import { Link } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"

export default function GameOverScreen(){

    function handleSubmit(e){
        e.preventDefault()
        console.log("submitted!")
    }
    return(
        <div>
            <ReactAudioPlayer
                src="/src/assets/audio/music/you-win.mp3"
                autoPlay
            />
            <h1>GAME OVER</h1>
            <Link to="/"><button className="nes-btn is-dark">RESTART</button></Link>
            <form onSubmit={handleSubmit}>
                    <label>
                        <input type="radio" value="Bash" className="nes-radio"/>
                        <span>Testing</span>
                    </label>
                    <label>
                        <input type="radio" value="Items" className="nes-radio"/>
                        <span>TESTING</span>
                    </label>
                    <label>
                        <input type="radio" value="Pray" className="nes-radio"/>
                        <span>I'M TESTTINGGG</span>
                    </label>
                    <label>
                        <input type="radio" value="PSI" className="nes-radio"/>
                        <span>c:</span>
                    </label>
                    <input type="submit" style={{display: "none"}}/>
            </form>
        </div>
    )
}