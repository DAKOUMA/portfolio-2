import { BioCard } from "./Bio-Card"
import { IdCard } from "./ID-Card"


function ContactCard(props) {
    return (
        <div className="Contact-Card flex items-center md:w-11/12 mx-auto">
            <IdCard/>
            <BioCard/>
        </div>
    )
}

export {ContactCard}