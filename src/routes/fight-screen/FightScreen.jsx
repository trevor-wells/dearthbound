import { Link, useLoaderData } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"
import Enemy from "./Enemy"
import { getEnemies } from "/src/util/api"

export default function FightScreen(){
    const enemies = useLoaderData()
    const enemyList = enemies.map(enemy => <Enemy key={enemy.id} enemy={enemy} />)
    
    return(
        <div>
            <ReactAudioPlayer src="/src/assets/audio/music/UnsettlingOpponent.mp3" autoplay loop/>
            {enemyList}
            <h1>Fight</h1>
            <Link to="/shop"><button className="nes-btn">GO TO SHOP</button></Link>
            <Link to="/game-over"><button className="nes-btn">END GAME</button></Link>
        </div>
    )
}

export function loader(){
    return getEnemies()
}