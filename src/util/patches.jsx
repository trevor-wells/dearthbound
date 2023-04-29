
export async function patchCharacter(attributes) {
    const response = await fetch('http://localhost:1337/character', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(attributes)
    })
    if (!response.ok) {
        throw new Error('Could not update character!')
    }
    return response
}

export async function patchEnemy(enemy_id) {
    const response = await fetch(`http://localhost:1337/enemies/${enemy_id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({is_alive: false})
    })
    if (!response.ok) {
        throw new Error('Could not patch enemy\'s death!')
    }
    return response
}

export async function reviveEnemies() {
    for (let i = 1 ; i < 11 ; i++){
        const response = await fetch(`http://localhost:1337/enemies/${i}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({is_alive: true})
        })
        if (!response.ok) {
            throw new Error('Could not revive enemy??')
        }
    }
}