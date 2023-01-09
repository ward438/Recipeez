import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { MealCard } from "./mealCard";
import { fetchDinnerRecipes } from "../../../store/slices/recipes/dinner";

export const Dinner = ()=>{

    const dispatch = useDispatch();
    const dinnerRecipes = useSelector(state=>state?.dinnerRecipes);
console.log(dinnerRecipes)
    const handleDinnerRecipe = (recipe) => { 
        return <div key={recipe?.name}>
                 <MealCard recipe={recipe}/>                
        </div>
    }

    useEffect(()=>{
        dispatch(fetchDinnerRecipes());
    },  [])
    
    return <>                   
            <Box sx={{display:'grid', gridGap: "20px", gridTemplateColumns: "repeat(auto-fill, 220px)",justifyContent: "center"}}>
                {dinnerRecipes?.fulfilled && <>
                    {dinnerRecipes?.data.map(recipe=>{
                        return handleDinnerRecipe(recipe)                
                    })}
                </>}
            </Box>
        {dinnerRecipes?.loading && <>Loading</>}
        {dinnerRecipes?.errored && <>Errored</>}
    </>
}