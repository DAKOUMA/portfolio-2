import { Icon } from "../../../../Assets/Icon"

function SocialLink(porps) {
    return (
        <ul className="socialContainer flex items-end justify-between">
            <li className="social-list"><a href="#" className="social-link"><Icon icon="linkedin"/></a></li>
            <li className="social-list"><a href="#" className="social-link"><Icon icon="whatsapp"/></a></li>
            <li className="social-list"><a href="#" className="social-link"><Icon icon="envelope"/></a></li>
            <li className="social-list"><a href="#" className="social-link"><Icon icon="instagram"/></a></li>
        </ul>
    )
}

export {SocialLink}