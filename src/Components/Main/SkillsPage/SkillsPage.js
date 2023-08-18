import { useRef } from "react"
import { CircleShadow } from "./CircleShadow"
import { TextSkills } from "./Text"


function SkillsPage(props) {

    const pageList = [...props.refe]

    return (
        <main className="skillsPage md:h-screen pt-28 md:pt-20" ref={pageList[1]}>
            <div className=" w-4/5 mx-auto mb-8 md:w-2/5 ">
                <p className="">Choose a job you love and you won't have to work a single day of your life.</p>
                <p className="text-right mt-2">- Conficius</p>
            </div>
            <CircleShadow/>
            <div className="w-4/5 mx-auto mt-12 text-center">
                <p>Web development is a fascinating profession, learning and discovering new things is so pleasant.</p>
            </div>
        </main>
    )
}

export {SkillsPage}