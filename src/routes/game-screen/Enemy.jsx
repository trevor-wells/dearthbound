export default function Enemy({enemy}){
    const {id, name, health, damage, image} = enemy

    return(
        <card>
            <h1>{name}</h1>
            <h2>Health: {health}</h2>
        </card>
    )
}