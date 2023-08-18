import { SocialLink } from "./SocialLink"
import photo from "../../../../Assets/Image/1684472510576.jpeg"

function IdCard(props) {
    return (
        <div className="Id-Card w-11/12 md:w-1/2 mx-auto p-6 rounded-xl">
            <div className="presentation flex mb-5 items-center">
                <img src={photo} className="rounded-full w-1/3"></img>
                <div className="name ml-6">
                    <h1 className="text-2xl mb-2">RAMERISON ANSELME</h1>
                    <h2 className="text-xs">Front-end Devloper</h2>
                    <h2 className="text-xs">UX/UI Designer</h2>
                </div>
            </div>
            <SocialLink/>
        </div>
    )
}

export {IdCard}