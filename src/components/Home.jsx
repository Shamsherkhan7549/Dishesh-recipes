import React, {useContext} from 'react'
import responseApi from '../api'
import Navbar from './Navbar';
import { Link } from 'react-router';
import { context } from '../context/ContextApi';
import Favourite from './Favourite';
import '../css/Home.css'
const Home = () => {
  const {recipes, favourite, setFavourite,showFavourite} = useContext(context)
  const handlingFavourite = (id) => {
    const food = recipes.find(ele=> ele.id==id);
    if(favourite.includes(food)){
      setFavourite(prevFavourite=> prevFavourite= prevFavourite.filter(ele => ele.id !== id))
      return
    }

    setFavourite(prevFavoutite=> [...prevFavoutite, food])

  }

  return (
    <>
    <Navbar />
    {showFavourite && <Favourite/>}
    <div className='container '>
    <div className='row mt-3'>
      {recipes.map(item=>(
            <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 col-8 offset-2 offset-sm-0 lh-1 food-box '>
               <Link to={`/product/${item.id}`} className='text-decoration-none text-muted  '>
                <img src={item.image} className='rounded' />
               </Link>

                <p className='lh-1 mt-2  d-flex justify-content-between'><b>{item.name}</b> <span onClick={()=>handlingFavourite(item.id)} className='mx-2'> {favourite.includes(item)? <i className="fa-solid fa-heart" style={{color:' #ff0000', cursor:'pointer'}}></i>: <i className="fa-regular fa-heart" style={{cursor:'pointer'}}></i>}</span></p>
                <p className='lh-1'>Prepration Time : {item.prepTimeMinutes} mins</p>
                <p className='lh-1'>Rating : {item.rating}</p>
                <p>Review Count :{item.reviewCount}</p>
            </div>        
       ))}
    </div>
    </div>
    </>
  )
}

export default Home