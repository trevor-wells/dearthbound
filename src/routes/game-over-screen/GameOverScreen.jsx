import { useEffect } from "react"
import { Link, useRouteLoaderData } from "react-router-dom"
import { reviveEnemies, patchCharacter } from "/src/util/patches"
import { addToGraveyard } from "/src/util/posts"

export default function GameOverScreen(){
    const character = useRouteLoaderData("root")
    const deadCharacterUrl = character.sprites[character.current_sprite].dead_url

    useEffect(() => {
        reviveEnemies()
        addToGraveyard(character)
        patchCharacter({has_visited_shop: false})
    }, [])

    return(
        <div id="game-over-screen">
            <audio src="/src/assets/audio/music/you-win.mp3" autoPlay loop/>
            <span id="try-again">Try Again?<Link to="/"><button className="nes-container is-dark is-rounded">Yes</button></Link></span>
            <img id="dead-character" src={deadCharacterUrl}/>  
        </div>
    )
} 