

import Category from "./Category"

const ProjectCat = (props) =>
{
    const { handleCategory, active } = props      
        const cat = [
            {id:1,category:"ALL"},
            {id:2,category:"E-learning"},
            {id:3,category:"E-commerce"},
            {id:4,category:"Landing"},
            {id:5,category:"Mobile"},
            {id:6,category:"Organic"},
            {id:7,category:"Food"},
            {id:8,category:"Construction"},
            {id:9,category:"Finance"},
            {id:10,category:"Miscellenious"},
        ]
    return(
        <article className="mt-10 mb-10 p-16">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-10 gap-10">
                {
                    cat.map(cat=><Category key={cat.id} swapCategory={handleCategory} active={active} catId={cat.id} name={cat.category}></Category>)
                }
            </div>
        </article>
    )
}

export default ProjectCat