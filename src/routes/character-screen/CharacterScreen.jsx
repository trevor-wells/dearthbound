import { Link, useLoaderData, Form, redirect} from "react-router-dom"
import { getCharacter, patchCharacter } from "/src/util/api"

import ReactAudioPlayer from "react-audio-player"

export default function CharacterScreen(){
    const character = useLoaderData()

    return(
        <div>
            <ReactAudioPlayer src="/src/assets/audio/music/CharacterMusic.mp3" autoPlay loop />
            <div className="nes-container is-dark with-title">
                <p className="title">Character Creation</p>
                <h1>Hi {character.name}</h1>
                <h1>Your Favorite Food Is {character.fav_food}</h1>
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
            <Link to="/fight"><button className="nes-btn" id="pls">FIGHT!</button></Link>
            <Link to="/shop"><button className="nes-btn">GO TO SHOP</button></Link>
        </div>
    )
}

export function loader() {
    return getCharacter()
}

export async function action({request}) {
    const formData = await request.formData()
    const attributes = {
        name: formData.name,
        fav_food: formData.fav_food
    }
    try {
        await patchCharacter(attributes)
    } catch(err) {
        throw err
    }

    return null
}