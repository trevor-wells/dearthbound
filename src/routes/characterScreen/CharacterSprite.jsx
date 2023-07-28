export default function CharacterSprite({sprite, handleClick}){
    return(
        <img onClick={handleClick} id="character-sprite" src={sprite} alt="character"/>
    )
}