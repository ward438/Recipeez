import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import { MealCard } from "./mealCard";
import { fetchAppetizerRecipes } from "../../../store/slices/recipes/appetizers";
import { SearchRecipeContext } from "../layouts/main";

export const Appetizer = ()=>{

    const appetizerRecipes = useSelector(state=>state.appetizerRecipes);

    return <>
        {appetizerRecipes.fulfilled && <>
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
        {appetizerRecipes.loading && <>Loading</>}
        {appetizerRecipes.errored && <>Errored</>}
    </>
    
}