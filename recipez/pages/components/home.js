import { MealCard } from "./mealTypes/mealCard"
// import { RecipeModal } from "./recipeModal"

export const Home = ({recipeItem}) =>{

    const handleCard = (recipeName) => {
        if(recipeName?.name){
            return <>
                <MealCard recipe={recipeItem}/>
                {/* <RecipeModal recipe={recipeItem}/> */}
            </>
        }else return <>nothing</>
    }

    return <>
        {handleCard(recipeItem)}
    </>
}