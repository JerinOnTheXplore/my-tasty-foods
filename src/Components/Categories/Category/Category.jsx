import React, { useState } from 'react';
import './category.css'
const Category = ({category,handleOrderedCategories}) => {
    // console.log(handleOrderedCategories);
    const [ordered,setOrdered] = useState(false);
    

    const handleOrdered=()=>{
        // console.log('order clicked')
        // if (ordered === true){
        //     setOrdered(false)
        // }
        // else{
        //     setOrdered(true)
        // }
        setOrdered(!ordered);
        handleOrderedCategories(category);
    }
    
    return (
        <div className={`category ${ordered && 'category-ordered' }`}>
          <h2>Avilable Item: {category.
strCategory}</h2>
          <img src={category.strCategoryThumb
} alt="" />
          <p>Description: {
category.
strCategoryDescription

}</p>
          <button onClick={handleOrdered}>{
           ordered ? 'Ordered':'Order Now'
            }</button>
        </div>
    );
};

export default Category;