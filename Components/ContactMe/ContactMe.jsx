import classes from './Contact.module.css'

const Contact = () => {
    return (
        <section className='mt-20 md:px-36'>
            <h2 className="text-2xl font-bold text-center mb-10">Contact Me</h2>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className='px-10'>
                    <h3 className="text-xl font-bold my-5">Get In Touch</h3>
                    <form className=''>
                        <div>
                            <input className={classes.input} type="text" placeholder="Name" />
                            <input className={classes.input} type="email" placeholder="Email" />
                            <input className={classes.input} type="number" placeholder='Your phone' />
                            <textarea className={` ${classes.text}`} placeholder="your Messeage"></textarea>
                        </div>

                    </form>
                    <button>Send Message</button>
                </div>
                <div>
                    <h3 className="text-xl font-bold my-5">Contact Detailes</h3>
                    <div className="mb-10">
                        <h4 className='text-xl font-semibold mb-2'>Email</h4>
                        <p>azizulkarim97@gmail.com</p>
                    </div>
                    <div className='mb-10'>
                        <h4 className='text-xl font-semibold mb-2'>Phone</h4>
                        <p>01516775497</p>
                        <p>01612120121</p>
                    </div>
                    <div className='mb-10'>
                        <h4 className='text-xl font-semibold mb-2'>Social Platform</h4>
                        <div className='flex gap-6'>
                            <article>
                                <p>
                                    <a href='https://github.com/Prithibee13'><img className={classes.logo} src='https://i.postimg.cc/jSgBzgbF/github-sign.png' /></a>
                                </p>
                            </article>
                            <article><p><a href="azizulkarim97@gmail.com"><img className={classes.logo} src="https://i.postimg.cc/t4C3R0Xc/gmail.png" alt="" /></a></p></article>
                            <article><p><a href="https://www.linkedin.com/in/azizul-karim-9955811b9/"><img className={classes.logo} src="https://i.postimg.cc/W4rLTGBY/linkedin-1.png" alt="" /></a></p></article>
                            <article><p><a href="#"><img className={classes.logo} src="https://i.postimg.cc/Wp0RQwGd/upwork.png" alt="" /></a></p></article>
                        </div>
                    </div>
                    <div></div>
                </div>

            </article>
        </section>
    )
}

export default Contact