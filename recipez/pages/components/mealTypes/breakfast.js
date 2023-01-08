import React, {useState, createContext,useContext, useEffect} from "react"
import { fetchBreakfastRecipes } from "../../../store/slices/recipes/breakfastRecipes"
import { useDispatch, useSelector } from "react-redux"

export const Breakfast = ()=>{

    const dispatch = useDispatch();
    const breakfastRecipes = useSelector(state=>state.breakfastRecipes);

    useEffect(()=>{
        dispatch(fetchBreakfastRecipes());
    },  [])
    
    return <>
        {breakfastRecipes.fulfilled && <>
            {breakfastRecipes.data.map(recipe=>{
                return <div key={recipe.name}>
                    <p>{recipe.name}</p>
                    <p>{recipe.description}</p>
                    <p>{recipe.ingredients.map((ingredient, index)=>{
                        return <span key={index}>{ingredient}<br/></span>
                    })}</p>
                </div>
                
            })}
        </>}
        {breakfastRecipes.loading && <>Loading</>}
        {breakfastRecipes.errored && <>Errored</>}
    </>
}