import { StepComponents } from "./StepComponent";

function WorkPage(props) {
    const pageList = [...props.refe]
    return (
        <main className="md:h-screen pt-20 md:flex" ref={pageList[2]}>
            <div className="rubanStep h-6 absolute mt-7">
            </div>
            <StepComponents/>
        </main>
    )
}

export {WorkPage}