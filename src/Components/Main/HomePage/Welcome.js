const WelcomeRuban = () => {
    return (
        <div>
            <p className="text-center text-white text-4xl text-welcome">WELCOME</p>
            <div className="text-white text-4xl welcomeRuban absolute right-0 z-10 violet h-12 md:h-8">
            </div>
            <div className="welcomeRuban_green absolute right-0 z-0 h-12 md:h-8">

            </div>
        </div>
    )
}

const WorldRuban = () => {
    return (
        <div className="">
            <p className="text-center text-white text-4xl text-welcome">WORLD</p>
            <div className="text-white text-4xl text-right worldRuban absolute z-10 violet h-12 md:h-8">
                
            </div>
            <div className="worldRuban_green absolute z-0 h-12 md:h-8 ">

            </div>
        </div>
    )
}

function Welcome(params) {
    return (
        <div className=" h-1/3">
            <WelcomeRuban/>
            <div className="my-8 text-center text-xl mt-20">
                <p>TO</p>
                <p>MY</p>
            </div>
            <WorldRuban/>
        </div>
    )
}

export {Welcome}