import { createContext,useState,useEffect} from "react";
import responseApi from '../api';

export const context = createContext(); //context will be imported by other components to access satate from ContextProvider

const ContextProvider = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [favourite, setFavourite] = useState([]);
    const [showFavourite, setShowFavourite] = useState(false)

   
    useEffect(()=>{  
      const recipes = async() => {
        const result = await responseApi()
        setRecipes(result.recipes)
      }
      recipes()
  },[]);


  const states = {
    recipes,
    favourite,
    setFavourite,
    showFavourite,
    setShowFavourite
  }

    return(
        <context.Provider value={states}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider