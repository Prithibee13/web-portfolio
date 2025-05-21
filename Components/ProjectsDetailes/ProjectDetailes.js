'use client'
import { useState } from "react"
import ProjectCat from "./ProjectCat"
import Project from "./Project"
import classes from './Project.module.css'

const ProjectDetailes = () => {

    const [active, setActive] = useState('ALL')

    const allProject = [
        {
            id: 1,
            name: "Builder App",
            detailes: "A landing page for construction hub",
            cat: ["Landing", "Construction"],
            catId: 8,
            img: "https://i.postimg.cc/C1Xqw3gn/pro1.png",
            link: "_https://github.com/Prithibee13/Builder"
        },
        {
            id: 2,
            name: "E-Learning",
            detailes: "A landing page for E-learn platform",
            cat: ["Landing", "E-learning"],
            catId: 2,
            img: "https://i.postimg.cc/hjzDH7z8/por9.png",
            link: "https://github.com/Prithibee13/e-learning"
        },
        {
            id: 3,
            name: "Burger Mania Review site",
            detailes: "A restaurant review site",
            cat: ["Landing", "Food"],
            catId: 7,
            img: "https://i.postimg.cc/J08hZz0b/por11.png",
            link: "https://github.com/Prithibee13/Burger-Mania"
        },
        {
            id: 4,
            name: "Food Man",
            detailes: "A restaurant Landing Page",
            cat: ["Landing", "Food"],
            catId: 7,
            img: "https://i.postimg.cc/VsFf215V/por10.png",
            link: "https://github.com/Prithibee13/foodman"
        },
        {
            id: 5,
            name: "Shutter Studio",
            detailes: "A photography influencer's service site",
            cat: ["E-commerce"],
            catId: 3,
            img: "https://i.postimg.cc/hv9R8L6j/por13.png",
            link: "https://github.com/Prithibee13/Shutter-Studio"
        },
        {
            id: 6,
            name: "Fruity",
            detailes: "A fruit inventory site",
            cat: ["Organic"],
            catId: 6,
            img: "https://i.postimg.cc/2jvYfYyD/por14.png",
            link: "https://github.com/Prithibee13/Fruity"
        },
        {
            id: 7,
            name: "Cell Monger",
            detailes: "A Mobile Phone Showcasing Web Application.",
            cat: ["Landing"],
            catId: 4,
            img: "https://i.postimg.cc/XvJ3MyGH/por15.png",
            link: "https://github.com/Prithibee13/Cell-Monger"
        },
        {
            id: 8,
            name: "E-Learn",
            detailes: "A Landing Mobile app for E-learning platform",
            cat: ["Landing", "Mobile", "E-learning"],
            catId: 5,
            img: "https://i.postimg.cc/K8Kvkk1Y/freepik-background-88815.png",
            link: "https://github.com/Prithibee13/E-learn"
        },
    ]

    const [projects, setProjects] = useState(allProject)

    const onHandleCategory = (cat, catId) => {
        console.log(cat);
        console.log(catId);
        let newProjects;

        if (cat === "ALL") {
            setProjects(allProject)
            setActive("ALL");
        }
        else if (cat !== "ALL") {
            newProjects = allProject.filter(project => project.cat.includes(cat))

            setProjects(newProjects)
            setActive(cat)
        }

        console.log(newProjects);


    }
    return (
        <section className="mt-20 mb-10 p-16">
            
            <h1 className="text-2xl font-bold text-center mb-5">Our Recent Projects</h1>
            <ProjectCat handleCategory={onHandleCategory} active={active}></ProjectCat>
            <article className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </article>
        </section>
    )
}

export default ProjectDetailes