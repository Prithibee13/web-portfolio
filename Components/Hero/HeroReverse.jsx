const HeroReverse = (props) => {
    const { img, text } = props
    return (
        <section className="container mt-20 mb-10 p-20">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <img className="rounded-xl" src={img} />
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </article>
        </section>

    )
}


export default HeroReverse