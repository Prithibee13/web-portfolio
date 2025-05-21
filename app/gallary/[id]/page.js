'use client'

import GallaryItems from '@/Components/Gallary/GallaryItem';
import Loading1 from '@/Components/Loading/Loading1';
import useGallary from '@/Hooks/useGallary';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const Items = () => {

    const param = useParams();

    const id = param?.id

    const [gallary, setGallary] = useGallary(id)
    const [item, setItem] = useState({})

    useEffect(() => {
        
        const newGallary = gallary.find(gal => gal?.slugId.toString() === id);
        setItem(newGallary);
        }, [gallary,id])

    console.log(item);

    if  (!gallary)
    {
        return <Loading1></Loading1>
    }
    return (
        <div>
            <GallaryItems item={item}></GallaryItems>
        </div>
    )
}

export default Items