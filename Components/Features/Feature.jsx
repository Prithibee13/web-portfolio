import classes from './Features.module.css'

const Featuer = (props) => {
    const { data } = props
    const { title, description, img } = data
    return (
        <div className={`${classes.featureContainer} p-5 rounded-md`}>
            <img className={`${classes.featureImg} mb-5 mx-auto`} src={img} />
            <div>

                <h2 className='text-2xl font-semibold mb-5'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Featuer