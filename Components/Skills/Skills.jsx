import Skill from "./Skill"

const Skills = () =>
{
    const skills = [
        {
            id:1,
            name : "React Js & Next Js",
            details : "Creating several types front-end system using React and Next Js technologies."
        },
        {
            id:2,
            name : "node Js & Express Js",
            details : "Providing Backend functionalities for web and mobile application using node and express Js"
        },
        {
            id:3,
            name : "NoSQL",
            details : "Giving Database support to the applications through severalprovider like firebase, mongoDb"
        },
        {
            id:4,
            name : "Styling Libraries",
            details: "Using Vanila css and other kinds of styling libraries like Bootstrap, tailwind to make our application more attractive."
        },
        {
            id:5,
            name : "React-Native",
            details : "Creating excieting mobile app using React-Native and corresponding Frameworks."
        },
        {
            id:6,
            name : "Artificial Inteligence",
            details : "Integrating new trend of AI functionalities into mobile and web applications"
        }

    ]
    return(
        <section className="p-8 md:p-28">
            <h2 className="text-center text-2xl font-bold mb-5 ">My Skills</h2>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {
                    skills.map(skill=><Skill key={skill.id} data={skill}></Skill>)
                }
            </article>
        </section>
    )
}

export default Skills