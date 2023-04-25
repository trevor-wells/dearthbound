import {Link, Form} from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"

export default function ShopScreen(){
    return(
        <div id="shop-screen">
            <ReactAudioPlayer src="/src/assets/audio/music/shop-screen.mp3" autoPlay loop />
            <Link to="/fight"><button className="nes-btn fixed bottom-0 left-0">Fight</button></Link>
            <div id="shop-dialogue" className="nes-container is-dark fixed">
                <p>Hello there!</p>
            </div>
            <div id="shop-options" className="nes-container is-dark fixed">
                <Form action="/shop">
                    <label>
                        <input type="radio" value="Bash" className="nes-radio"/>
                        <span>Buy</span>
                    </label>
                    <label>
                        <input type="radio" value="Items" className="nes-radio"/>
                        <span>Sell</span>
                    </label>
                    <label>
                        <input type="radio" value="Pray" className="nes-radio"/>
                        <span>Talk</span>
                    </label>
                    <label>
                        <input type="radio" value="PSI" className="nes-radio"/>
                        <span>Exit</span>
                    </label>
                    <input type="submit"/>
                </Form>
            </div>
        </div>
    )
}

export function action(){
    
}