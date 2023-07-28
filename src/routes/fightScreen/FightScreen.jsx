import { useState } from "react"
import { useLoaderData, useRouteLoaderData, useNavigate} from "react-router-dom"
import Enemy from "./Enemy"
import { getEnemies } from "/src/util/gets"
import battleSequence from "../../util/battleSequence"

export default function FightScreen(){
    const navigate = useNavigate()
    const [formData, setFormData] = useState({fight_button: "bash"})
    const [character, setCharacter] = useState(useRouteLoaderData("root"))
    const [enemy, setEnemy] = useState(useLoaderData().find(enemy => enemy.is_alive))
    const [textContent, setTextContent] = useState(`${enemy.name} appears!`)
    const [characterHP, setCharacterHP] = useState(character.current_hp)
    const [characterPP, setCharacterPP] = useState(character.current_pp)
    const [enemyHP, setEnemyHP] = useState(enemy.hp)

    function handleChange(event){
        const {value, name} = event.target
        setFormData({[name]: value})
    }

    function handleSubmit(event){
        event.preventDefault()
        const action = formData.fight_button
        if (action === "bash")
            battleSequence(character, enemy, characterHP, enemyHP, setCharacterHP, setCharacterPP, setEnemyHP, setTextContent, navigate, "bash")
        else if (action === "PSI")
            if (characterPP > 0)
                battleSequence(character, enemy, characterHP, enemyHP, setCharacterHP, setCharacterPP, setEnemyHP, setTextContent, navigate, "PSI")
            else
                setTextContent("You don't have enough PP.")
        else if (action === "goods")
            setTextContent(`${character.name} has no ${character.fav_food} to eat.`)
        else if (action === "check")
            setTextContent(enemy.description)
        else
            throw new Error("Somehow you didn't pick one of the options")
    }

    return(
        <div id="fight-screen" className="flex items-center">

            <audio src={enemy.music} autoPlay loop muted />

            <video id="fight-screen-background" src={enemy.background} muted autoPlay loop/>

            <div id="text-content" className="nes-container is-dark is-rounded">
                <div id="announcer">{textContent}</div>
            </div>

            <div id="fight-options" className="nes-container is-dark is-rounded">
                <form className="flex flex-col justify-between items-center" onSubmit={handleSubmit}>
                    <fieldset>
                        <label>
                            <input
                                type="radio" 
                                value="bash"
                                name="fight_button"
                                className="nes-radio"
                                checked={formData.fight_button === "bash"}
                                onChange={handleChange}
                            />
                            <span>Bash</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="PSI"
                                name="fight_button"
                                className="nes-radio"
                                checked={formData.fight_button === "PSI"}
                                onChange={handleChange}
                            />
                            <span>PSI</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="goods"
                                name="fight_button"
                                className="nes-radio"
                                checked={formData.fight_button === "goods"}
                                onChange={handleChange}
                            />
                            <span>Goods</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="check"
                                name="fight_button"
                                className="nes-radio"
                                checked={formData.fight_button === "check"}
                                onChange={handleChange}
                            />
                            <span>Check</span>
                        </label>
                        <input type="submit" style={{display: "none"}}/>
                    </fieldset>
                </form>
            </div>

            <div>
                <Enemy enemy={enemy}/>
            </div>

            <p id="character-card-name" className="nes-container is-dark is-rounded">{character.name}</p>
            <div id="character-card" className="nes-container is-dark is-rounded">
                <p className="character-stat">{characterHP} HP</p>
                <p className="character-stat">{characterPP} PP</p>
            </div>

        </div>
    )
}

export function loader(){
    return getEnemies()
} 