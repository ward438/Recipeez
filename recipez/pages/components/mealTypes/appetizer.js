import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { MealCard } from "./mealCard";
import { fetchAppetizerRecipes } from "../../../store/slices/recipes/appetizers";

export const Appetizer = ()=>{

    const dispatch = useDispatch();
    const selectorAppetizerRecipes = useSelector(state=>state?.appetizerRecipes);

    const handleAppetizerRecipe = (recipe) => { 
        return <div key={recipe?.name}>
                 <MealCard recipe={recipe}/>                
        </div>
    }

    useEffect(()=>{
        dispatch(fetchAppetizerRecipes());
    },  [])
    
    return <>                   
            <Box sx={{display:'grid', gridGap: "20px", gridTemplateColumns: "repeat(auto-fill, 220px)",justifyContent: "center"}}>
                {selectorAppetizerRecipes?.fulfilled && <>
                    {selectorAppetizerRecipes?.data.map(recipe=>{
                        return handleAppetizerRecipe(recipe)                
                    })}
                </>}
            </Box>
        {selectorAppetizerRecipes?.loading && <>Loading</>}
        {selectorAppetizerRecipes?.errored && <>Errored</>}
    </>
}