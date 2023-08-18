import image1 from "../../../Assets/Image/Step1.jpg"
import image2 from "../../../Assets/Image/Step2.jpg"
import image3 from "../../../Assets/Image/Step3.jpg"


function StepComponents() {
    const stepList = [
        {
            id: "step1",
            num: "1",
            title: "Exchange of ideas",
            image: image1,
            step: {
                one:"First contact with the clients",
                two: "Understand the needs/ideas of clients",
                three: "Coordinate the ideas with possibility",
                four: "Setting up a charter"
            } 
        },
        {
            id: "step2",
            num: "2",
            title: "UI/UX design",
            image: image2,
            step: {
                one: "With the charter define the identity",
                two: "Make a research about Users needs",
                three: "Journey Map",
                four: "Wireframe/Mockup/Prototype"
             }
        },
        {
            id: "step3",
            num: "3",
            title: "Code project",
            image: image3,
            step: {
                one:"Define devtools needed",
                two: "Structure the semantic HTML",
                three: "Coordinate Prototype to Final product",
                four: "Deploy"
            } 
        }
    ]

    return (
        <>
            {
                stepList.map((value, index) => (
                    <section key={index} className="my-20 w-4/5 md:w-1/4  text-center mx-auto shadow-xl rounded-3xl p-4 workCard">
                        <span className="absolute numero w-12 h-12 rounded-full text-2xl">{value.num}</span>
                        <h1 className="text-lg md:text-xl">{value.title}</h1>
                        <img className="w-1/3 mx-auto md:w-3/5 md:my-6" src={value.image}/>
                        <ul className="hidden mt-4 ml-6 md:block text-left">
                            {Object.keys(value.step).map((keys,index) => (
                                <li key={index} className="text-xs my-1"> - {value.step[keys]}</li>
                            ))}
                        </ul>
                    </section>
                ))
            }
        </>
    )
}

export {StepComponents}