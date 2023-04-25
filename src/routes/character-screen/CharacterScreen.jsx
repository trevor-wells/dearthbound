import { Link, useLoaderData, Form } from "react-router-dom"
import { getCharacter, patchCharacter } from "/src/util/api"

import ReactAudioPlayer from "react-audio-player"

export default function CharacterScreen(){
    const character = useLoaderData()

    return(
        <div id="character-screen">
            <ReactAudioPlayer src="/src/assets/audio/music/character-screen.mp3" autoPlay loop />
            <Form method="patch" action="/character">
                <img id="character-sprite" src="/src/assets/sprites/character.png" alt="character"/>
                <div id="character-name" className="nes-container is-dark">
                    <input id="name-input" type="text" name="name" maxlength={6}/>
                </div>
                <div id="fav-food" className="nes-container is-dark">
                    <label>Favorite Food</label>
                    <input id="fav-food-input" type="text" name="fav_food"/>
                </div>
                <div id="coolest-thing" className="nes-container is-dark">
                    <label>Coolest Thing</label>
                    <input id="coolest-thing-input" type="text" name="coolest_thing"/>
                </div>
                <div id="are-you-sure" className="nes-container is-dark">
                    <h1>Are You Sure?</h1>
                    <label>
                        <input type="radio" value="Pray" className="nes-radio"/>
                        <span>Yep</span>
                    </label>
                    <label>
                        <input type="radio" value="Pray" className="nes-radio"/>
                        <span>Nope</span>
                    </label>
                </div>
                <input type="submit" style={{display: "none"}}/>
            </Form>
            <video id="character-screen-background" src="/src/assets/backgrounds/character-screen.mp4" muted autoPlay loop/>
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