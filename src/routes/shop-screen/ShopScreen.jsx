import {useState} from "react"
import { useLoaderData, useRouteLoaderData, useNavigate} from "react-router-dom"
import { getShop } from "/src/util/gets"
import { patchCharacter } from "/src/util/patches"

export default function ShopScreen(){
    const navigate = useNavigate()
    const shop = useLoaderData()
    const character = useRouteLoaderData("root")
    const [index, setIndex] = useState(0)
    const [textContent, setTextContent] = useState(() => character.has_visited_shop ? `Welcome back, ${character.name}!` : shop.dialogue[index].text)
    const [formData, setFormData] = useState({
        shop_button: "buy"
    })

    patchCharacter({has_visited_shop: true})
    
    function handleChange(event){
        const {value, name} = event.target
        setFormData({[name]: value})
    }

    function handleSubmit(event){
        event.preventDefault()
        const action = formData.shop_button
        if (action === "buy"){
            setTextContent(`Looks like I'm fresh out of ${character.fav_food}.`)
        } else if (action ==="sell"){
            setTextContent("Trevor never gave me any money.")
        } else if (action ==="talk"){
            if (index < shop.dialogue.length - 1) {
                setIndex(prevIndex => ++prevIndex)
                setTextContent(shop.dialogue[index + 1].text)
            }
        } else if (action ==="leave"){
            navigate("/fight")
        } else
            setTextContent("How did you do that?")
    }

    return(
        <div id="shop-screen">
            <audio src="/src/assets/audio/music/shop-screen.mp3" autoPlay loop />
            
            <div id="shop-dialogue" className="nes-container is-dark fixed is-rounded">
                <p id="shop-text">{textContent}</p>
            </div>
            <div id="shop-options-div" className="nes-container is-dark fixed is-rounded">
                <form id="shop-options-form" onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="radio"
                            value="buy"
                            name="shop_button"
                            onChange={handleChange}
                            checked={formData.shop_button === "buy"}
                            className="nes-radio"
                        />
                        <span>Buy</span>
                    </label>
                    <label>
                        <input 
                            type="radio"
                            value="sell"
                            className="nes-radio"
                            name="shop_button"
                            onChange={handleChange}
                            checked={formData.shop_button === "buy"}/>
                        <span>Sell</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="talk"
                            className="nes-radio"
                            name="shop_button"
                            onChange={handleChange}
                            checked={formData.shop_button === "talk"}
                        />
                        <span>Talk</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="leave"
                            className="nes-radio"
                            name="shop_button"
                            onChange={handleChange}
                            checked={formData.shop_button === "leave"}
                        />
                        <span>Leave</span>
                    </label>
                    <input type="submit" style={{display: "none"}}/>
                </form>
            </div>
        </div>
    )
}

export function loader(){
    return getShop()
}
