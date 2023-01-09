import { MealCard } from "./mealTypes/mealCard"

export const Home = ({recipeItem}) =>{

    const handleCard = (recipeName) => {
        if(recipeName?.name){
            return <>
                <MealCard recipe={recipeItem}/>
            </>
        }else return <>nothing</>
    }

    return <>
        {handleCard(recipeItem)}
    </>
}