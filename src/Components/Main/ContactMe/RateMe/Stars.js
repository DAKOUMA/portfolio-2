import { useEffect, useState } from "react"

function Stars(props) {
const StarIcon = (props) => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }


    

    return (
        <svg onClick={handleClick} width={click ? "60px" : "40px"} height={click ? "60px" : "40px"} viewBox="0 0 25 25" fill={ click ? "#6c5a75" : "none"} xmlns="http://www.w3.org/2000/svg">
<path d="M13 4L15.2747 9.8691L21.5595 10.2188L16.6806 14.1959L18.2901 20.2812L13 16.87L7.70993 20.2812L9.31941 14.1959L4.44049 10.2188L10.7253 9.8691L13 4Z" stroke="#1CFFA0" strokeWidth="1"/>
</svg>
    )
}

const starArray = [
    StarIcon(),StarIcon(),StarIcon(),StarIcon(),StarIcon()
]

    return (
        <div className="flex mx-auto justify-center Stars-container items-end mt-20">
            {starArray.map((value,index) => (
                <div className="Stars" key={index}>
                    {value}
                </div>
            ))}
        </div>
    )
}

export {Stars}