import { Icon } from "../../Assets/Icon"

function HomeIcon(props) {
    const scrollFunction = [...props.scrollTo]
    return (
        <div className="w-12 md:w-10 cursor-pointer " onClick={scrollFunction[0]}>
            <Icon icon={"home"}/>
        </div>
    )
}

export {HomeIcon}