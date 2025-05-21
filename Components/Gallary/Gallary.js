const Gallary = (props) =>
{

    const { img } =  props 
    return(
        <div>
            <img src={img}/>
        </div>
    )
}

export default Gallary