import { use, useState } from "react";
import Category from "./Category/Category";
import './categories.css'

const Categories = ({categoriesPromise}) => {
    const [orderedCategories,setOrderedCategories]=useState([]);
    const categories = use(categoriesPromise);
    
    const handleOrderedCategories = (category)=>{
       console.log('clicked categories which are ordered',category);
       const newOrderedCategories=[...orderedCategories,category];
       setOrderedCategories(newOrderedCategories);
    }
    console.log(categories)
    return (
        <div>
           <h2>Available Foods:{categories.categories.length}</h2>
           <h2>So far oredered:{orderedCategories.length}</h2>
            <ol>
             {
                orderedCategories.map(category=><li>{category.strCategory}</li>)
             }   
            </ol> 
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