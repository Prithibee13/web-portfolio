import classes from './Hero.module.css'
const HeroReverse = (props) => {
    const { img, text, head } = props
    return (
        <section className="container mt-20 mb-10 p-20">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <img className="rounded-xl" src={img} />
                </div>
                <div className="my-auto">
                    <h2 className="text-2xl font-bold mb-5">{head}</h2>
                    <p className={classes.HeroText}>{text}</p>
                </div>
            </article>
        </section>

    )
}


export default HeroReverse