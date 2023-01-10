import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { MealCard } from "./mealCard";
import { fetchDinnerRecipes } from "../../../store/slices/recipes/dinner";
import { SearchRecipeContext } from "../layouts/main";

export const Dinner = ()=>{

    const dinnerRecipes = useSelector(state=>state.dinnerRecipes);
    
    return <>                   
            {dinnerRecipes.fulfilled && <>
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
        {dinnerRecipes.loading && <>Loading</>}
        {dinnerRecipes.errored && <>Errored</>}
    </>
}