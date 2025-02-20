import Service from "./Service"

const Services = () =>
{
    const services = [
        {
            id : 1,
            title : "Full-Stack Web Development",
            description : "Develop responsive and exciting websites with care, touch and recent technologies.",
            img : "https://i.postimg.cc/vZNSwmKQ/pix1.png"
        },
        {
            id : 2,
            title : "Mobile App Development",
            description : "Develop exciting Mobile Apps recent technologies using React-native.",
            img : "https://i.postimg.cc/xjv7NnXR/pix7.png"
        },
        {
            id : 3,
            title : "Integrating Artificial intelligence",
            description : "Integrating different kinds of intelligence system in websites and apps.",
            img : "https://i.postimg.cc/jdvFvcQn/pix8.png"
        }
    ]
    return (
        <div className="mt-20 mb-10 p-8 md:p-24">
            <h2 className="text-2xl font-bold text-center">Our Offered Services</h2>
            <article className="grid grid-cols-1 md:grid-cols-3  gap-16">
                {
                    services.map(service=><Service key={service.id} data={service}></Service>)
                }
            </article>
        </div>
    )
}


export default Services