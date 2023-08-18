import { useState } from "react"
import { Bars } from "./Bars"
import { HomeIcon } from "./HomeIcon"
import { Menu } from "./Menu"
import { MenuDrop } from "./MenuDrop"

function Header(props) {

    const [open, setOpen] = useState(false)

    const toggleBars = () => {
        setOpen(!open)
    }

    return (
        <header className="fixed top-0 left-0 right-0 flex justify-between px-4 z-30 Header backdrop-blur-xl ">
            <HomeIcon scrollTo={props.scrollTo}/>
            <Menu refe={props.refe} scrollTo={props.scrollTo}/>
            <MenuDrop refe={props.refe} scrollTo={props.scrollTo} open={open}/>
            <Bars toggleBars={toggleBars}/>   
        </header>
    )
}

export {Header}