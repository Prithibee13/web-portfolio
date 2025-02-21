import Image from "next/image"
import classes from './Projects.module.css'

const Project = (props) => {

    const { data } = props
    const { img, detailes, name, link } = data
    
    return (
        <div className={` ${classes.projectContainer}`}>{/* 
            <Image src={img} width={100} height={100}></Image> */}
            <div className={`${classes.imgContainer} p-5`}>
                <img className="h-full w-full" src={img} />
                <div className={classes.imgOverlay}>

                    <h2 className="text-2xl font-bold text-white mb-5">{name}</h2>
                    <p className={`text-white mb-5 ${classes.des}`}>{detailes}</p>
                    <div className={`${classes.btn} `}>
                        <a className=""  href={link} >Learn More</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Project