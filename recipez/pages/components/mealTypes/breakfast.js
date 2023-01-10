import React, {useEffect} from "react"
import { fetchBreakfastRecipes } from "../../../store/slices/recipes/breakfastRecipes"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { MealCard } from "./mealCard";
import { SearchRecipeContext } from "../layouts/main";

export const Breakfast = ()=>{

    const breakfastRecipes = useSelector(state=>state.breakfastRecipes);

    return <>
        {breakfastRecipes.fulfilled && <>
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
        {breakfastRecipes.loading && <>Loading</>}
        {breakfastRecipes.errored && <>Errored</>}
    </>

}