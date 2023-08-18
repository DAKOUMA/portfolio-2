import html from '../../../Assets/Icons/png/html.png'
import css from '../../../Assets/Icons/png/css.png'
import javascript from '../../../Assets/Icons/png/javascript.png'
import figma from '../../../Assets/Icons/png/figma.png'
import tailwind from '../../../Assets/Icons/png/tailwind.png'
import react from '../../../Assets/Icons/png/react.png'
import { useState } from 'react'
import { RubanSkills } from './RubanSkills'


const skillList = [
    {
        id: "react",
        src: react,
        text: "Components, state and modernity",
        percent: 90,
    },
    {
        id: "tailwind",
        src: tailwind,
        text: "Responsive for different device",
    percent: 90,
    },
    {
        id: "figma",
        src: figma,
        text: "UX and UI Design",
        percent: 90,
    },
    {
        id: "css",
        src: css,
        src2: tailwind,
        text: "Color, Font, Layout...",
        text2: "Responsive for different device",
        percent: 90,
    },
    {
        id: "html",
        src: html,
        src2: figma,
        text: "The skeleton of each structure",
        text2: "UX and UI Design",
        percent: 90,
    },
    {
        id: "javascript",
        src: javascript,
        src2: react,
        text: "Interactivity and functionality",
        text2: "Components, state and modernity",
        percent: 90,
    }
]

function CircleShadow(props) {
    const Techno = (props) => {
        
    
        let techno = {
        }
    
        for (let i = 0; i < skillList.length; i++) {
            if (skillList[i].id === props.techno) {
                techno = {...skillList[i]}
            }    
        }

        let out = techno.id == "css" && "react"? 
            <div className={`items-center flex ${props.circle} my-8 md:my-0`}>
            <RubanSkills center='center'/>
            <div className={`flex  items-center circle-container my-10 relative z-10 ${props.margin}`}>
                <p className='text-xs mx-2'>{techno.text}</p>
                <div className='bg-white rounded-full h-24 w-24 flex circle-white'>
                    <div className=' bg-slate-700 rounded-full h-20 w-20 flex circle-shadow m-auto'>
                        <div className='bg-black rounded-full h-16 w-16 p-3 m-auto circle-image'>
                            <img src={techno.src}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            :
            <div className={`items-center flex ${props.circle}`}>
                <RubanSkills center=""/>
                <div className={`flex items-center circle-container z-10 ${props.margin}`}>
                    <div className='bg-white rounded-full h-24 w-24 flex circle-white'>
                        <div className=' bg-slate-700 rounded-full h-20 w-20 flex circle-shadow m-auto'>
                            <div className='bg-black rounded-full h-16 w-16 p-3 m-auto circle-image'>
                                <img className='relative z-10' src={techno.src}/>
                            </div>
                        </div>
                    </div>
                    <p className='text-xs mx-2 text-white'>{techno.text}</p>
                </div>
            </div>



        return (
            out
        )
    }

    return (
        <>
            <Techno techno="html" margin="ml-6" circle="circle-1"/>
            <Techno techno="css" margin="ml-72 md:ml-80" circle="circle-2" />
            <Techno techno="javascript" margin="ml-10" circle="circle-3" />
        </>
    )
}

export {CircleShadow}