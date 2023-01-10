import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { MealCard } from "./mealCard";
import { fetchTreatsRecipes } from "../../../store/slices/recipes/treats";
import { SearchRecipeContext } from "../layouts/main";

export const Treats = ()=>{

    const treatRecipes = useSelector(state=>state.treatsRecipes);
    return <>                   
    {treatRecipes.fulfilled && <>
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
{treatRecipes.loading && <>Loading</>}
{treatRecipes.errored && <>Errored</>}
</>
}