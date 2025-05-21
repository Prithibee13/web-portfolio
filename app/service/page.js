import Features from "@/Components/Features/Features"
import HeroReverse from "@/Components/Hero/HeroReverse"
import Nav from "@/Components/Nav/Nav"
import Services from "@/Components/Services/Services"

const Service = () =>
{
    return(
        <section>
            
            <HeroReverse head="Our Featured Services" text="Quality is never an accident; it is always the result of intelligent effort." img="https://i.postimg.cc/28mWSpkD/chris-liverani-9cd8q-Oge-NIY-unsplash.jpg"></HeroReverse>
            <Services></Services>
            <Features> </Features>
        </section>
    )
}

export default Service