import HeroStraight from "@/Components/Hero/HeroStraight"
import Nav from "@/Components/Nav/Nav"

import ProjectDetailes from "@/Components/ProjectsDetailes/ProjectDetailes"

const Projects = () =>
{
    return(
        <section>
            
            <HeroStraight head="Our Featured Project" text = "The best way to learn a new technology is to build something with it." img="https://i.postimg.cc/j57fLtns/alvaro-reyes-q-Wwp-Hwip31-M-unsplash.jpg"></HeroStraight>
            <ProjectDetailes></ProjectDetailes>
        </section>
    )
}

export default Projects