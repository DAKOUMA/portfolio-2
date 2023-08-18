function MenuDrop(props) {

    const pageList = [...props.refe]
    const scrollFunction = [...props.scrollTo]

    return (
        <nav className={`md:hidden w-1/4 dropDown absolute mr-6 ${props.open? "open" : ""}`}>
            <ul className="flex flex-col justify-between w-full text-right">
                <li className="linkDrop" onClick={scrollFunction[1]}>Skills</li>
                <li className="linkDrop" onClick={scrollFunction[2]}>Work</li>
                <li className="linkDrop" onClick={scrollFunction[3]}>Contact</li>
            </ul>
        </nav>
    )
}

export {MenuDrop}