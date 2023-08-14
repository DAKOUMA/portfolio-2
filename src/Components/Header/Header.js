import { Bars } from "./Bars"
import { HomeIcon } from "./HomeIcon"

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 flex justify-between ">
            <HomeIcon/>
            <Bars/>
        </header>
    )
}

export {Header}