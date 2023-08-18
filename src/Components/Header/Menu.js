function Menu(props) {

    const pageList = [...props.refe]
    const scrollFunction = [...props.scrollTo]

    return (
        <nav className="hidden md:flex w-1/3">
            <ul className="flex justify-between w-full items-end">
                <li className="link" onClick={scrollFunction[1]}>Skills</li>
                <li className="link" onClick={scrollFunction[2]}>Work</li>
                <li className="link" onClick={scrollFunction[3]}>Contact</li>
            </ul>
        </nav>
    )
}

export {Menu}