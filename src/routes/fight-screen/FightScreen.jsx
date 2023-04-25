import { Link, useLoaderData, Form } from "react-router-dom"
import Enemy from "./Enemy"
import { getEnemies } from "/src/util/api"

export default function FightScreen(){
    const enemies = useLoaderData()
    const enemyToDisplay = enemies.find(enemy => enemy.is_alive)
    
    
    return(
        <div id="fight-screen" className="flex items-center">
            <video id="fight-screen-background" src="/src/assets/backgrounds/frank.mp4" muted autoPlay loop/>
            <div>
                <Enemy enemy={enemyToDisplay}/>
                <Link to="/shop"><button className="nes-btn fixed bottom-0 left-0">GO TO SHOP</button></Link>
                <Link to="/game-over"><button className="nes-btn fixed bottom-0 left-[600px]">END GAME</button></Link>
            </div>
            <div className="nes-container is-dark fixed top-0">
                <Form method="PATCH" action="/fight" className="fixed top-20">
                    <label>
                        <input type="radio" value="Bash" className="nes-radio"/>
                        <span>Bash</span>
                    </label>
                    <label>
                        <input type="radio" value="Items" className="nes-radio"/>
                        <span>Items</span>
                    </label>
                    <label>
                        <input type="radio" value="Pray" className="nes-radio"/>
                        <span>Pray</span>
                    </label>
                    <label>
                        <input type="radio" value="PSI" className="nes-radio"/>
                        <span>PSI</span>
                    </label>
                </Form>
            </div>
        </div>
    )
}

export function loader(){
    return getEnemies()
}