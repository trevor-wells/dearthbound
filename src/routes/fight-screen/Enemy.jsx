import ReactAudioPlayer from "react-audio-player"

export default function Enemy({enemy}){
    const {id, name, hp, damage, image, music} = enemy

    return(
        <div className="fixed left-1/2 bottom-1/2">
            <ReactAudioPlayer src={music} autoplay/>
            <img
                className="enemy"
                src={image}
                alt={name}
            />
        </div>
    )
}