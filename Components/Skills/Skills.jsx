import Skill from "./Skill"

const Skills = () =>
{
    const skills = [
        {
            id:1,
            img : "https://i.postimg.cc/25SSL5Y0/pix12.png",
            name : "React Js & Next Js",
            details : "Creating several types front-end system using React and Next Js technologies."
        },
        {
            id:2,
            img : "https://i.postimg.cc/6p0QQvk7/pix13.png",
            name : "Node Js & Express Js",
            details : "Providing Backend functionalities for web and mobile application using node and express Js as well as accomodate different types of frameworks."
        },
        {
            id:3,
            img : "https://i.postimg.cc/9FyMvS1Y/pix14.png",
            name : "NoSQL",
            details : "Giving Database support to the applications through several provider like firebase, mongoDb"
        },
        {
            id:4,
            img:"https://i.postimg.cc/kg949cp3/pix15.png",
            name : "Styling Libraries",
            details: "Using Vanila css and other kinds of styling libraries like Bootstrap, tailwind to make our application responsive and attractive."
        },
        {
            id:5,
            img: "https://i.postimg.cc/1t07xynZ/pix16.png",
            name : "React-Native",
            details : "Creating excieting mobile app using React-Native and corresponding Frameworks. More moduler system as well as interactive navigation screens"
        },
        {
            id:6,
            img:"https://i.postimg.cc/3wsz5Lt2/pix17.png",
            name : "Artificial Inteligence",
            details : "Integrating new trend of AI functionalities into mobile and web applications using both apis as well as machine learning model deployments"
        }

    ]
    return(
        <section className="p-12">
            <h2 className="text-center text-2xl font-bold mb-10">My Skills</h2>
            <article className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {
                    skills.map(skill=><Skill key={skill.id} data={skill}></Skill>)
                }
            </article>
        </section>
    )
}

export default Skills