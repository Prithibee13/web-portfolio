import classes from './About.module.css'
const About = () =>
{
    return(
        <section className="mt-20 mb-10 px-16">
            <h2 className="text-2xl font-bold mb-10 text-center">About Me</h2>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <img className={`rounded-xl ${classes.sectionImg}`} src="https://i.postimg.cc/hjBT1W8S/pix18.jpg"/>
                </div>
                <div className="my-20">
                    
                    <p className={classes.item}>Educational Background : Bachelor in Science(Engineering)</p>
                    <p className={classes.item}>Instution : University of Chittagong</p>
                    <p className={classes.item}>Major : Computer Science and Engineering</p>
                    <p className={classes.item}>Expertise : Mern Stack development, Mobile App Develpoment, Artificial Intelligence.</p>
                    <p className={classes.item}>Language Proficiency : Bangla, English, Hindi(Verbal conversation) </p>
                    <p className={classes.item}>Hobby : Reading books and articles, Pet, Gardening. </p>
                </div>
            </article>
        </section>
    )
}

export default About