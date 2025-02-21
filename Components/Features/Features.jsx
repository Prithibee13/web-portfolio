import Featuer from "./Feature"

const Features = () => {

    const features = [
        {
            id: 1,
            img: "https://i.postimg.cc/vZNSwmKQ/pix1.png",
            title: "Front-End development",
            description: "Develop different kinds of responsive websites/landing pages using React Js, Next Js, Tailwind, Bootstrap and more types styling and JavaScript libraries and frameworks"
        },
        {
            id: 2,
            img: "https://i.postimg.cc/s2GHjrF5/pix2.png",
            title: "MERN Stack development",
            description: "Develop different kinds of responsive web applications using React Js, Next Js, Node js, Express Js, MongoDB, Firebase and more types of full-stack libraries and frameworks"
        },
        {
            id: 3,
            img: "https://i.postimg.cc/nrGwyYy5/pix5.png",
            title: "Mobile App development",
            description: "Develop different kinds of full-stack Mobile applications using React-Native, Node js, Express Js, MongoDB, Firebase and other types of libraries and frameworks"
        },
        {
            id: 4,
            img: "https://i.postimg.cc/NFdGpcCy/por20.png",
            title: "AI Integration",
            description: "Integration of AI services inside the Web and mobile application. Different Kinds of AI system like detections, classifications, regression can be integrated as features."
        },
        {
            id: 5,
            img: "https://i.postimg.cc/sfkTghTN/por18.png",
            title: "Manipulating Codes",
            description: "Changeing codes for reqisites as well as design purposes with professional and resonsible steps. Manipulation of libraires for expecting and outstaning work also ca be done by us. "
        },
        {
            id: 6,
            img: "https://i.postimg.cc/c4fXgLj4/por17.png",
            title: "Customization",
            description: "Customization of different design, functionalities and technniques are commitment of us. We try to provide our best efforts to do work on our hands."
        },
        {
            id: 7,
            img: "https://i.postimg.cc/mZjrbYZb/por19.png",
            title: "Exploration",
            description: "We are commited to explore more for each job to get best outcomes of our projects. Different kinds of new technologies, libraries and project give us oppurtunity to learn more. "
        },
        {
            id: 8,
            img: "https://i.postimg.cc/vHGKWk9d/pix4.png",
            title: "Deployment",
            description: "We can deploy our projects on github, firebase, neltlify, vercel, expo and other hosting sites to share our work with clients and public. Price and techniques of deployment can be a concern, however our egarness will prevail us"
        },
        

    ]
    return (
        <div className="p-20 mt-20 mb-10">
            <h2 className="text-2xl font-bold text-center mb-10">Featuers</h2>

            <article className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16">
                {
                    features.map(feature => <Featuer key={feature.id} data={feature}></Featuer>)
                }
            </article>
        </div>
    )
}

export default Features