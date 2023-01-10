




import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { MealCard } from "./mealCard";
import { fetchLunchRecipes } from "../../../store/slices/recipes/lunch";
import { SearchRecipeContext } from "../layouts/main";

export const Lunch = ()=>{

    const lunchRecipes = useSelector(state=>state?.lunchRecipes);
    
    return <>                   
    {lunchRecipes.fulfilled && <>
    <SearchRecipeContext.Consumer>
        {({searchRecipes, setSearchRecipes}) => (
                <>
                    { searchRecipes && 
                        <div style={{display:'grid', gridGap: "20px", gridTemplateColumns: "repeat(auto-fill, 220px)",justifyContent: "center"}}>
                            {searchRecipes.map((searchRecipe, index) =><MealCard key={index} recipe={searchRecipe}/>)}
                        </div>
                    }
                    { !searchRecipes && <>Nothing</>}
                </>
            )}
            
        </SearchRecipeContext.Consumer>
    </>
}
{lunchRecipes.loading && <>Loading</>}
{lunchRecipes.errored && <>Errored</>}
</>
}