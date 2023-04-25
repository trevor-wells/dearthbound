import {Link, Form, useLoaderData} from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"
import {getShop} from "/src/util/api"

export default function ShopScreen(){
    const shop = useLoaderData()
    return(
        <div id="shop-screen">
            <ReactAudioPlayer src="/src/assets/audio/music/shop-screen.mp3" autoPlay loop />
            
            <div id="shop-dialogue" className="nes-container is-dark fixed">
                <p>{shop.dialogue[2].text}</p>
            </div>
            <Link to="/fight"><button>Exit</button></Link>
            <div id="shop-options" className="nes-container is-dark fixed">
                <Form method="get" action="/shop">
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
                    </label>
                    <button>Submit</button>
                </Form>
            </div>
        </div>
    )
}

export function loader(){
    return getShop()
}

export function action(){
    console.log("submitted!")
}