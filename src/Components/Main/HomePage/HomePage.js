import { DiscoverText } from "./DiscoverText"
import { ScrollButton } from "./ScrollButton"
import { Welcome } from "./Welcome"

function HomePage() {
    return (
        <main className="homePage h-screen pt-36">
            <Welcome/>
            <DiscoverText/>
            <ScrollButton/>
        </main>
    )
}

export {HomePage}