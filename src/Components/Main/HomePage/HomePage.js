import { DiscoverText } from "./DiscoverText"
import { ScrollButton } from "./ScrollButton"
import { Welcome } from "./Welcome"

function HomePage(props) {
    const pageList = [...props.refe]
    return (
        <main className="homePage h-screen pt-36 DarkMode" ref={pageList[0]} >
            <Welcome/>
            <DiscoverText/>
            <ScrollButton scroll={props.scroll}/>
        </main>
    )
}

export {HomePage}