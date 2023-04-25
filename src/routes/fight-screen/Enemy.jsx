export default function Enemy({enemy}){
    const {id, name, hp, damage, image} = enemy

    return(
        <div className="nes-container is-dark">
            <h1>{name}</h1>
            <h2>Health: {hp}</h2>
            <img style={{height: "50px"}} src={image} alt={name}/>
        </div>
    )
}