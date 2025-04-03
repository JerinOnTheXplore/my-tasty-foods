import { use, useState } from "react";
import Category from "./Category/Category";
import './categories.css'

const Categories = ({categoriesPromise}) => {
    const categories = use(categoriesPromise);
    const [orderedCategories,setOrderedCategories]=useState([]);
    const handleOrderedCategories = (category)=>{
       console.log('clicked categories which are ordered',category)
    }
    console.log(categories)
    return (
        <div>
           <h2>Available Foods:{categories.categories.length}</h2>
           <h2>So far oredered:</h2>

           <div className="categories">
           {
            categories.categories.map(category => <Category 
            key={category.idCategory}
            handleOrderedCategories={handleOrderedCategories}
            category={category}></Category>)
           } 
           </div>
        </div>
    );
};

export default Categories;