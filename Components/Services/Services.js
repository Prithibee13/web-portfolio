import { Fade } from "react-awesome-reveal"
import Service from "./Service"

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Clean",
            description: "Professional and moduler system",
            img: "https://i.postimg.cc/BvsJ2bMS/por.png"
        },
        {
            id: 2,
            title: "Responsive",
            description: "Exciting Mobile Versions",
            img: "https://i.postimg.cc/xjv7NnXR/pix7.png"
        },
        {
            id: 3,
            title: "AI Support",
            description: "Introducing AI techniques",
            img: "https://i.postimg.cc/jdvFvcQn/pix8.png"
        }
    ]
    return (
        <div className=" mb-10 p-8 md:p-24">
            <Fade direction="up">

                <article className="grid grid-cols-1 md:grid-cols-3  gap-16">
                    {
                        services.map(service => <Service key={service.id} data={service}></Service>)
                    }
                </article>
            </Fade>
        </div>
    )
}


export default Services