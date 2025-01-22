import React, { useContext } from 'react'
import '../css/Favourite.css'
import { context } from '../context/ContextApi'
import {Link} from 'react-router-dom'
const Favourite = () => {
  const {favourite, setFavourite} = useContext(context)
  
  const handlingFavourite = (id) => {
    setFavourite(prevFavourite=> prevFavourite.filter(ele=> ele.id !== id))
  }
  return (
<>
    <div className="favourite">
      <h6 className='h6 sticky-top'>These are your favourite food</h6>
        {
          favourite.map((item,index) => 
          <div key={index} className='item'>
            <Link to={`/product/${item.id}`} >
             <img src={item.image} alt="" />
            </Link>
            <div className='content'>
              <p>{item.name}</p>
              <p>{item.mealType[0]}</p>
              <p>{item.rating} <i onClick={()=>handlingFavourite(item.id)} className="fa-solid fa-heart" style={{color:'red', cursor:'pointer'}}></i></p>
              
            </div>
          </div>

          )
        }
    </div>
</>
  )
}

export default Favourite