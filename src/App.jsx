import TwitterFollowCard from "./TwitterFollowCard"

const App = () => {
    return (
        <div className="App">
            <TwitterFollowCard Username="xsarcov" name="Ernesto Vargas" initialisFollowing = {false}/>
            <TwitterFollowCard Username="pepito" name="Pepito Pipito" initialisFollowing = {false} />
            <TwitterFollowCard Username="midudev" name="Midudev Sanchez" initialisFollowing = {false} />
        </div>
    )
}

export default App