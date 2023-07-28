export async function addToGraveyard(character){
    const graveyardEntry = {
        name: character.name,
        sprite: character.current_sprite,  
    }
    const response = await fetch(`http://localhost:1337/graveyard`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(graveyardEntry)
    })
    if (!response.ok) {
        throw new Error('Could not add character to graveyard!')
    }
}