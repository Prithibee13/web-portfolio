import { AttentionSeeker } from "react-awesome-reveal"

import classes from './Skills.module.css'
const Skill = (props) => {
    const { data } = props
    const { name, details, img } = data
    return (
        <div className="p-12 shadow-xl rounded-xl">
            <div className='mb-5'>
                <AttentionSeeker effect="tada">
                    <img className={classes.skillImg} src={img} />
                </AttentionSeeker>
            </div>
            <div className='text-center'>
                <h1 className="text-xl font-semibold  mb-5">{name}</h1>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default Skill