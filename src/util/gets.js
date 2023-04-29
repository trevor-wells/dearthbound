export async function getCharacter(){
    const response = await fetch('http://localhost:1337/character')
    if (!response.ok) {
        throw new Error('Failed to fetch character')
    }
    return response
}

export async function getShop(){
    const response = await fetch('http://localhost:1337/shop')
    if (!response.ok) {
        throw new Error('Failed to fetch shop')
    }
    return response
}

export async function getEnemies(){
    const response = await fetch('http://localhost:1337/enemies')
    if (!response.ok) {
        throw new Error('Failed to fetch enemies')
    }
    return response
}
