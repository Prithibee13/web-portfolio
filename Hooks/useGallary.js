import { useEffect, useState } from "react"

const useGallary = (id) =>
{
    const[gallary,setGallary]= useState([])

    useEffect(()=>
        {
            fetch('/gallary.json').then(res=>res.json()).then(data=>setGallary(data))
        },[id])


        return[gallary,setGallary]
}

export default useGallary