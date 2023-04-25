export async function getEnemies() {
    const response = await fetch('http://localhost:1337/enemies')
    if (!response.ok) {
        throw new Error('Failed to fetch enemies!')
    }
    return response.json()
}

export async function getCharacter() {
    const response = await fetch('http://localhost:1337/character')
    if (!response.ok) {
        throw new Error('Failed to fetch character!')
    }
    return response.json()
}

export async function patchCharacter(attributes) {
    const response = await fetch('http://localhost:1337/character', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(attributes)
    })
    if (!response.ok) {
        throw new Error('Could not update character!')
    }
}

export async function getShop() {
    const response = await fetch('http://localhost:1337/shop')
    if (!response.ok) {
        throw new Error('Failed to fetch shop!')
    }
    return response.json()
}