import { Link, useLoaderData, Form } from "react-router-dom"
import { getCharacter, patchCharacter } from "/src/util/api"

import ReactAudioPlayer from "react-audio-player"

export default function CharacterScreen(){
    const character = useLoaderData()

    return(
        <div id="character-screen">
            <ReactAudioPlayer src="/src/assets/audio/music/character-screen.mp3" autoPlay loop />
            <div className="nes-container is-dark with-title">
                <p className="title">Character Creation</p>
                <h1>Hi {character.name}</h1>
                <h1><br/>Your Favorite Food Is {character.fav_food}</h1>
            </div>
            <Form method="patch" action="/character">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    className="nes-input is-dark"
                />
                <label>Favorite Food</label>
                <input
                    type="text"
                    name="fav_food"
                    className="nes-input is-dark"
                />
                <button className="nes-btn">Submit</button>
            </Form>
            <Link to="/fight"><button className="nes-btn" id="pls">Fight</button></Link>
            <Link to="/shop"><button className="nes-btn">Go to Shop</button></Link>
        </div>
    )
}

export function loader() {
    return getCharacter()
}

export async function action({request, params}) {
    console.log(params)
    const formData = await request.formData()
    const attributes = {
        name: formData.get("name"),
        fav_food: formData.get("fav_food")
    }
    try {
        patchCharacter(attributes)
    } catch(err) {
        throw err
    }
    return null
}