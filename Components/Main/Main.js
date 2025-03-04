import { Bounce, Fade, Flip, Slide } from "react-awesome-reveal"
import classes from "./Main.module.css"
const Main = () => {
    return (
        <div className="p-12 mt-20 ">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="my-auto md:p-16">
                    <Bounce>
                        <h2 className="text-2xl font-semibold ">Hey It's</h2>
                    </Bounce>
                    <Fade direction="up">
                        <h1 className={`text-4xl font-bold mb-3 ${classes.monicar}`}>Aziz Ul Karim</h1>
                    </Fade>
                    <Flip>
                        <p className={`mb-2 ${classes.texts}`}>B.SC in Computer Science and Engineering</p>
                    </Flip>
                    <div className="mb-5 flex align-items-center gap-2">
                        <Slide direction="left">
                            <p className={`${classes.texts}`}>Full Stack Web Development</p>
                        </Slide>
                        <p className={`${classes.texts}`}>|</p>
                        <Slide direction="right">
                            <p className={`${classes.texts}`}>Artificial inteligence</p>
                        </Slide>
                    </div>
                    <button className={`${classes.cvBtn}`}>Download CV</button>
                </div>
                <Slide direction="right">
                    <div>
                        <img className="w-full" src="https://i.postimg.cc/c1v9t2JC/sd1.png" />
                    </div>
                </Slide>

            </article>
        </div>
    )
}


export default Main