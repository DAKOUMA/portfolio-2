import { ContactCard } from "./ContactCard/ContactCard"
import { RateMe } from "./RateMe/RateMe"

function ContactMe(props) {
    const pageList = [...props.refe]
    return (
        <>
            <main className="h-screen contactMe pt-40" ref={pageList[3]}>
            <ContactCard/>
            <RateMe/>
        </main>
        <footer className="foot text-sm flex flex-col md:flex-row text-center">
            <div className="md:w-2/5">
                <h1 className="">Mention legale</h1>
                <p>Copyright DaK0uma</p>
            </div>
            <div className="md:w-2/5">
                <h1 className="">Adresse</h1>
                <p>Cité Procoops, Toamasina 501, Madagascar</p>
            </div>
        </footer>
        </>
    )
}

export {ContactMe}