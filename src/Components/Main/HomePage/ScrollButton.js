import { Icon } from "../../../Assets/Icon"

function ScrollButton() {
    return (
        <div className=" text-lg absolute w-screen scroll-button flex flex-col items-center scroll-button bottom-0">
            <span className="cursor-pointer">Go discover this new world</span>
            <Icon icon={"arrow"}/>
        </div>
    )
}

export {ScrollButton}