import React,{useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';


const SortFilter = () => {
    const [searchPhrams,setSearchParams]=useSearchParams();
    const urlcat=searchPhrams.get("category");
    const urlsort=searchPhrams.get("sortBy");
    const [category, setcategory]=useState(urlcat||[]);
    const [sortBy, setsortBy] = useState(urlsort||'');
    
   
    const handleBox=(e)=>
    {
        const option=e.target.value;
        let newCategory=[...category];
        if(category.includes(option))
        {
            newCategory.splice(newCategory.indexOf(option,1))
        }
        else{
            newCategory.push(option);
        }
        setcategory(newCategory);
    }
    const handleSort=(e)=>
    {
        setsortBy(e.target.value);
    }
    useEffect(()=>
    {
        if(category||sortBy)
        {
            let params={};
            category&&(params.category=category);
            sortBy&&(params.sortBy=sortBy);
            setSearchParams(params);
        }
    },[category,setSearchParams,sortBy])
    
  return (
    <div>
        <h3>Filter</h3>
        <div>
            <div>
                <input type="checkbox" value={"Novel"} defaultChecked={category.includes('Novel')} onChange={handleBox}  />
                <label>Novel</label>
            </div>
            <div>
                <input type="checkbox" value={"Science_Fiction"} defaultChecked={category.includes('Science_Fiction')} onChange={handleBox} />
                <label>Science-Fiction</label>
            </div>
            <div>
                <input type="checkbox" value={"Motivational"} defaultChecked={category.includes('Motivational')} onChange={handleBox} />
                <label>Motivational</label>
            </div>
            <div>
                <input type="checkbox" value={"Thriller"} defaultChecked={category.includes('Thriller')} onChange={handleBox} />
                <label>Thriller</label>
            </div>
        </div>
        <h3>Sort
            <div onChange={handleSort}>
                <input type="radio" value="asc"  name='sortBy' defaultChecked={sortBy==='asc'}/>Asceding
                <input type="radio" value='desc' name='sortBy' defaultChecked={sortBy==='asc'} />Descending
            </div>
        </h3>
    </div>
  )
}

export default SortFilter