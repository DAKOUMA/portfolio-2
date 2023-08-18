import { Icon } from "../../../Assets/Icon"

function ScrollButton(props) {

    return (
        <div className=" text-lg absolute w-2/3 m-auto scroll-button flex flex-col items-center scroll-button bottom-0">
            <span onClick={props.scrollTo[1]} className="cursor-pointer">Go discover this new world</span>
            <Icon icon={"arrow"}/>
        </div>
    )
}

export {ScrollButton}