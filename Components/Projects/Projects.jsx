import Project from "./Project"
import classes from './Projects.module.css'

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Builder App",
            detailes: "A landing page for construction hub",
            cat: "Landing Page",
            img: "https://i.postimg.cc/C1Xqw3gn/pro1.png",
            link: "https://github.com/Prithibee13/Builder"
        },
        {
            id: 2,
            name: "E-Learning",
            detailes: "A landing page for E-learn platform",
            cat: "Landing Page",
            img: "https://i.postimg.cc/hjzDH7z8/por9.png",
            link: "https://github.com/Prithibee13/e-learning"
        },
        {
            id: 3,
            name: "Burger Mania Review site",
            detailes: "A restaurant review site",
            cat: "Landing Page",
            img: "https://i.postimg.cc/J08hZz0b/por11.png",
            link: "https://github.com/Prithibee13/Burger-Mania"
        },
        {
            id: 4,
            name: "Food Man",
            detailes: "A restaurant Landing Page",
            cat: "Landing Page",
            img: "https://i.postimg.cc/VsFf215V/por10.png",
            link: "https://github.com/Prithibee13/foodman"
        },
        {
            id: 5,
            name: "Shutter Studio",
            detailes: "A photography influencer's service site",
            cat: "Landing Page",
            img: "https://i.postimg.cc/hv9R8L6j/por13.png",
            link : "https://github.com/Prithibee13/Shutter-Studio"
        },
        {
            id: 6,
            name: "Fruity",
            detailes: "A fruit inventory site",
            cat: "Landing Page",
            img: "https://i.postimg.cc/2jvYfYyD/por14.png",
            link : "https://github.com/Prithibee13/Fruity"
        }
    ]

    const pressHandle = (link) => {
        window.location.href = link
    }

    return (
        <div className={`mt-20 mb-10   `}>
            <h1 className="text-3xl font-bold text-center mb-10">Featured Projects</h1>
            <article className={`grid grid-cols-1 md:grid-cols-3 `}>
                {
                    projects.map(project => <Project key={project.id} data={project} ></Project>)
                }
            </article>
            <div className="text-center">
                <button>See all</button>
            </div>

        </div>
    )
}


export default Projects