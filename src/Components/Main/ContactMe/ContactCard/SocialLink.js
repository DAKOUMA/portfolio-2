import { useState } from "react"
import { Icon } from "../../../../Assets/Icon"
import imageWhatsapp from "../../../../Assets/Image/whatsapp.jpg"


function SocialLink(porps) {
    const [open, setOpen] = useState(false)

    const openWhatsapp  = () => {
        setOpen(!open)
    }

    return (
        <ul className="socialContainer flex items-end justify-between">
            <div onClick={openWhatsapp} className={`${open? "fixed" : "hidden"} top-0 bottom-0 right-0 left-0 flex z-20 overlay`}>
                <img className="QrWhatsapp m-auto" src={imageWhatsapp}/>
            </div>
            <li className="social-list"><a href="https://www.linkedin.com/in/anselme-ramerison-066999186/" className="social-link"><Icon icon="linkedin"/></a></li>
            <li className="social-list"><a onClick={openWhatsapp} className="social-link cursor-pointer"><Icon icon="whatsapp"/></a></li>
            <li className="social-list"><a href="mailto:ramerison.anselme@gmail.com" className="social-link"><Icon icon="envelope"/></a></li>
            <li className="social-list"><a href="https://www.instagram.com/ramerisonanselme/" className="social-link"><Icon icon="instagram"/></a></li>
        </ul>
    )
}

export {SocialLink}