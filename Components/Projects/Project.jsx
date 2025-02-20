import Image from "next/image"

const Project = (props) =>
{

    const { data } = props
    const { img, detailes , name} = data
    return(
        <div className=" p-5">{/* 
            <Image src={img} width={100} height={100}></Image> */}
            <img src={img}/>
            <h2>{name}</h2>
            <p>{detailes}</p>
            <div>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Project