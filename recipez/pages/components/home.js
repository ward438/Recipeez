import { SearchRecipeContext } from "./layouts/main"
import { MealCard } from "./mealTypes/mealCard"

export const Home = () =>{

    return <SearchRecipeContext.Consumer>
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
}