const Skill = (props) =>
{
    const { data } = props
    const { name, details } = data
    return(
        <div className="p-12 shadow-xl">
            <h1 className="text-xl font-semibold text-center mb-5">{name}</h1>
            <p>{details}</p>
        </div>
    )
}

export default Skill