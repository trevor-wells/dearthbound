

export default function Character(character){
    const {name, current_hp, current_pp} = character
    return(
        <div className="nes-container is-dark with-title is-centered">
            <h1>{name}</h1>
            <h1>HP {current_hp}</h1>
            <h1>PP {current_pp}</h1>
        </div>
    )
}