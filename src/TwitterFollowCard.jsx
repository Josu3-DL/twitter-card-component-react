import { useState } from "react"


const TwitterFollowCard = ({ Username, name, initialisFollowing}) => {
    const format = (Username) => `@${Username}`
    const [isFollowing,setIsfollowing] = useState(initialisFollowing)
   
    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassname = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    const handleBotton = () => {
        setIsfollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                alt="Frontend God Picture" 
                src={`https://unavatar.io/${Username}`}
                className="tw-followCard-avatar"
                />    
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{format(Username)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassname} onClick={handleBotton}
                >{text}</button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard