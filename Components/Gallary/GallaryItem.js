import { Italiana } from "next/font/google"
import Hero from "./Hero"
import Gallary from "./Gallary"
import Technologies from "./Technology"

const GallaryItems = (props) => {

    const { item } = props

    return (
        <article className=" mt-20 mb-10">
            <Hero id={item?.slugId} img={item?.mainImg} title={item?.title} info={item?.detailes}></Hero>
            <h2 className="text-xl font-bold text-center mt-20 mb-10">Project Gallary</h2>
            <article className="grid grid-cols-1 md:grid-cols-3 mt-20 mb-10">

                {
                    item?.Gallary?.map(item => <Gallary img={item}></Gallary>)
                }
            </article>


            <h2 className="mt-20 text-xl font-bold text-center">Techonology</h2>

            <article className="grid grid-cols-1 md:grid-cols-4 gap-16 mt-10 mb-10 p-16">
                {
                    item?.technology?.map(item => <Technologies key={item?.id} item={item}></Technologies>)
                }
            </article>
        </article>
    )
}

export default GallaryItems