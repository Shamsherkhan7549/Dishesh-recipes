import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { context } from '../context/ContextApi';
import Favourite from './Favourite';
import Navbar from './Navbar';
import '../css/Product.css'
const Product = () => {
     const [food, setFood] = useState();
    const{id} = useParams();
    const {recipes,showFavourite, favourite, setFavourite} = useContext(context);

    useEffect(()=>{
      const item = recipes.find(ele=> ele.id == id);
      setFood(item); 
    },[recipes]);

    const handlingFavourite = (id) => {
       if(favourite.includes(food)){
         setFavourite(prevFavourite=> prevFavourite = prevFavourite.filter((ele)=>ele.id !== id))
         return
       }
       setFavourite(prevFavourite=>[...prevFavourite, food])
       
    }
    
  return (
    <>
    <Navbar/>
    {showFavourite && <Favourite/>}
    <div className='container'>
      <div className='row'>
        {food &&
        <div className='col-10 col-sm-8 col-lg-7 my-5'>
           <img src={food.image} className='food-image my-2 rounded'/>
           <h5>{food.name} <span onClick={()=>handlingFavourite(food.id)} className='mx-2'> {favourite.includes(food)? <i className="fa-solid fa-heart" style={{color:' #ff0000', cursor:'pointer'}}></i>: <i className="fa-regular fa-heart" style={{cursor:'pointer'}}></i>}</span></h5>
           <p><b>Cooking time:</b> {food.cookTimeMinutes} mins</p>
           <p> <b>Ingredients:</b> {food.ingredients}</p>
           <p><b>Food type: </b>  {food.tags.map((tag,index)=> <span key={index}> &nbsp;{tag},  </span>)}</p>

           <div>
              <b>Instructions:</b>
              {
                food.instructions.map((instruction,index)=>
                  <p key={index}><b>steps{index+1}: </b> {instruction}</p>
                )
              }

              <p><i>*Now you can have  your {food.mealType[0]}.</i></p>
           </div>
        </div>
        
        
        }

      </div>
        
    </div>
    </>
  )
}

export default Product