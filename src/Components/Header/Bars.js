import { Icon } from "../../Assets/Icon"



function Bars(props) {
    return (
        <div className="w-12 md:hidden" onClick={props.toggleBars}>
            <Icon icon={'bar'}/>
        </div>
    )
}

export {Bars}