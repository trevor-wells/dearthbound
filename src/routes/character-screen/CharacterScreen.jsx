import {useState } from "react"
import { useRouteLoaderData, Form, redirect } from "react-router-dom"
import { getCharacter } from "/src/util/gets"
import { patchCharacter } from "/src/util/patches"
import CharacterSprite from "./CharacterSprite"

export default function CharacterScreen(){
    const character = useRouteLoaderData("root")
    const [index, setIndex] = useState(0)

    function changeSprite(){
        if (index < character.sprites.length - 1)
            setIndex(prevIndex => ++prevIndex)
        else
            setIndex(0)
    }

    return(
        <div id="character-screen">
            <video id="character-screen-background" src="/src/assets/backgrounds/character-screen.mp4" muted autoPlay loop/>
            <audio src="/src/assets/audio/music/character-screen.mp3" autoPlay loop />
            <Form method="patch" action="/character">
                <input readOnly type="text" value={index} style={{display: "none"}} name="current_sprite"/>
                <CharacterSprite handleClick={changeSprite} sprite={character.sprites[index].url}/>
                <div id="character-name" className="nes-container is-dark is-rounded">
                    <input id="name-input" type="text" name="name" maxLength={7}/>
                </div>
                <div id="fav-food" className="nes-container is-dark is-rounded">
                    <label>Favorite Food</label>
                    <input id="fav-food-input" type="text" name="fav_food" maxLength={10}/>
                </div>
                <div id="favorite-thing" className="nes-container is-dark is-rounded">
                    <label>Favorite Thing</label>
                    <input id="favorite-thing-input" type="text" name="favorite_thing" maxLength={10}/>
                </div>
                <div id="are-you-sure" className="nes-container is-dark is-rounded">
                    <h1>Are You Sure?</h1>
                    <button className="nes-btn">Yep</button>
                </div>
            </Form>
        </div>
    )
}

export async function action({request}) {
    const formData = await request.formData()
    const attributes = {
        current_sprite: formData.get("current_sprite"),
        name: formData.get("name"),
        fav_food: formData.get("fav_food"),
        favorite_thing: formData.get("favorite_thing")
    }
    try {
        const response = await patchCharacter(attributes)
        if (response.ok)
            return redirect("/fight")
    } catch(err) {
        throw err
    }
    return null
}

export function loader() {
    return getCharacter()
}
 