import { patchEnemy } from "/src/util/patches"

export default function battleSequence(character, enemy, characterHP, enemyHP, setCharacterHP, setCharacterPP, setEnemyHP, setTextContent, navigate, action){
    const fieldset = document.querySelector("fieldset")
    const damageDone = (() => action === "PSI" ? 50 : calculateDamage(character))()
    const damageTaken = calculateDamage(enemy)
    const characterMessage = (() => action === "PSI" ? `${character.name} did 50 damage with PSI ${character.favorite_thing}!` : determineMessage(character, damageDone))()
    const enemyMessage = (() => enemy.name === "Ego Orb" ? () => enemyHP - damageDone <= 0 ? "Ego Orb frowned." : "Ego Orb smiled." : determineMessage(enemy,damageTaken))()

    function doesHitLand(attacker){
        const randNum = Math.random()
        return randNum < attacker.hit_rate 
    }

    function doesHitCrit(attacker){
        const randNum = Math.random()
        return randNum < attacker.crit_rate
    }

    function calculateDamage(attacker){
        if (doesHitLand(attacker)) {
            if (doesHitCrit(attacker)){
                return (attacker.dmg * 1.5)
            } else {
                return attacker.dmg
            }
        } else {
            return 0
        }
    }

    function determineMessage(attacker, damage){
        if (damage === 0)
            return `${attacker.name} missed!`
        else if (damage === attacker.dmg)
            return `${attacker.name} did ${damage} damage!`
        else if (damage === 100) 
            return `${attacker.name} gave you a big wet smooch, doing ${damage} damage!`
        else
            return `CRITICAL HIT! ${attacker.name} did ${damage} damage!`
    }

    fieldset.disabled = true
    setTimeout(() => {fieldset.disabled=false}, 1800)
    setEnemyHP(prevHP => prevHP - damageDone)
    if (action === "PSI")
        setCharacterPP(prevPP => prevPP - 50)
    setTextContent(characterMessage)
    setTimeout(() =>
        {setTextContent(enemyMessage)
        setCharacterHP(prevHP => prevHP - damageTaken)}, 600)
    if(characterHP - damageTaken <= 0){
        setTimeout(() => setTextContent('You Died a Horrible Death!'), 1200)
        setTimeout(() => navigate("/game-over"), 3000)
    } else if (enemyHP - damageDone <= 0) {
        patchEnemy(enemy.id)
        setTimeout(() => setTextContent(<p>{enemy.death_text}<br/><br/>You Win!</p>), 1200)
        setTimeout(() => navigate("/shop"), 4500)
    } else
        setTimeout(() => setTextContent(`${enemy.name} has ${enemyHP - damageDone} HP left.`), 1200)
}