import classes from './gallary.module.css'

const Technologies = (props) =>
{

    const { item } = props

    const { title, img } = item
    return(
        <article className="p-5 hover:shadow-xl">
            <div>
                <img className={`${classes.iconImg} mx-auto`} src={img}/>
            </div>
            <div>
                <h3 className="text-center text-xl font-semibold mt-5">{title}</h3>
            </div>
        </article>
    )
}

export default Technologies