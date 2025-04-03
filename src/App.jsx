
import { Suspense } from 'react'
import './App.css'
import Categories from './Components/Categories/Categories';
const fetchCategories = async ()=>{
  const res = await fetch ('https://www.themealdb.com/api/json/v1/1/categories.php');
  return res.json();
} 
function App() {
  const categoriesPromise = fetchCategories()

  return (
    <>
      
      <h1>Worldwide famous foods</h1>
      <Suspense fallback={<h2>Food are loading...</h2>}>
        <Categories categoriesPromise={categoriesPromise}></Categories>
      </Suspense>
      
    </>
  )
}

export default App
