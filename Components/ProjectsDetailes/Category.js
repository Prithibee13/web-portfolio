import { useEffect, useState } from 'react';
import classes from './Project.module.css'

import { Fade, Bounce } from 'react-awesome-reveal';
const Category = (props) =>
{

    const [style, setStyle] =  useState({
        backGroundColor : "transparent", textColor: "#000"
    })
    
    
    const {catId, name, swapCategory, active, id } = props;

    
    useEffect(()=>
        {
            console.log(name);
            
            let newStyle = {...style}
            if(active===name)
            {
                newStyle = {backGroundColor : "#60B5FF", textColor : "#F7F9F2"}
                setStyle(newStyle)
            }
            else
            {
                setStyle({backGroundColor : "transparent", textColor: "#000"})
            }

            
        },[name,active])

    return(
        
        <button onClick={()=>swapCategory( name, catId)} style={{background:style.backGroundColor, color:style.textColor}} className={`${classes.pill}  rounded-xl text-center font-semibold  hover:border-0 hover:shadow-xl`}>
            {name}
        </button>
    )
}

export default Category
