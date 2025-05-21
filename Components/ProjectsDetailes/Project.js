import Classes from './Project.module.css'
import { useRouter } from 'next/navigation'

const Project = (props) => {
    const { project } = props

    const router = useRouter()

    const { name, img, detailes,link, id } = project


    const github = () =>
    {
        window.open(link, "_blank")
    }

    const gallary = () =>
    {
        router.push(`/gallary/${id}`)
    }

    return (
        <div className={`p-5 rounded-xl  hover:shadow-xl`}>
            <div className='flex justify-center'>

                <img className={Classes.cardImg} src={img} />
            </div>
            <div className="text-center">
                <h2 className="text-xl font-bold mb-5">{name}</h2>
                <p>{detailes}</p>
                <div className="flex justify-evenly mt-5">
                    <button onClick={github} className={Classes.git}>Learn More</button>
                    <button onClick={gallary} className={Classes.live}>Gallary</button>
                </div>
            </div>
        </div>
    )
}

export default Project