import ReactAudioPlayer from "react-audio-player"

export default function Enemy({enemy}){
    const {id, name, hp, damage, image, music} = enemy

    return(
        <div>
            <ReactAudioPlayer src={music} autoplay/>
            <img
                id="enemy-sprite"
                className="enemy"
                src={image}
                alt={name}
            />
        </div>
    )
}