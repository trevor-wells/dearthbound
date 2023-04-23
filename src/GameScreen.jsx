import { useState, useEffect } from "react"
import Enemy from "./Enemy"

export default function GameScreen(){
    const [enemies, setEnemies] = useState([])

    useEffect(() => {
        fetch("http:/localhost:3000/enemies")
        .then(r => r.json())
        .then(data => setEnemies(data))
    })

    const enemyList = enemies.map(enemy => <Enemy key={enemy.id} enemy={enemy} />)
    
    return(
        <div>
            {enemyList}
        </div>
    )
}