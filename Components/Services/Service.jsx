import classes from './service.module.css'
const Service = (props) => {
    const { data } = props
    const { img, title, description } = data
    return (
        <div className='p-10'>
            <img className={classes.iconImages} src={img} />
            <div className='text-center'>
                <h3 className='text-xl font-semibold mb-5'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Service