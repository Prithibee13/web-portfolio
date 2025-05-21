import { useEffect, useState } from "react"

import classes from './gallary.module.css'

const Hero = (props) =>
{
    const { id, img , title, info} = props

    const [align , setAlign] = useState("")

    useEffect(()=>
        {
            if(id%2!==0)
            {
                setAlign("direction-rtl")
            }
        },[id])
    return(
        <article className={`grid grid-cols-1 ${align} md:grid-cols-2 gap-20 mt-20 mb-10`}>
            <div className="my-auto md:mx-0 sm:mx-auto md:px-20">
                <h2 className="text-3xl font-bold mb-5">{title}</h2>
                <p className=" mb-5 mt-5 text-xl">{info}</p>
                <button className={`${classes.linkBtn} rounded-xl`}>See Code</button>
            </div>

            <div>
                <img className={classes.heroImg} src={img}/>
            </div>
            
        </article>
    )
}

export default Hero