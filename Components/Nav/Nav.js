import Link from "next/link"

const Nav = () => {
    return (
        <section className="bg-white p-10 shadow-xl">
            <article className="flex justify-between items-center">
                
                <div>
                    <h1>Aziz Ul Karim</h1>
                </div>
                <div className="flex justify-between gap-10">
                    <div>
                        <Link href="/">Home</Link>
                        </div>
                    <div>
                        <Link href="/skills">Skills</Link>
                    </div>
                    <div>
                        <Link href="/projects">Projects</Link>
                    </div>
                    <div>
                        <Link href="/service">Services</Link>
                    </div>
                    <div>
                        <Link href="/">Contact</Link>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Nav