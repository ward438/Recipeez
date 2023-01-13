import { useContext, useEffect, useState } from "react";
import { SearchRecipeContext } from "../layouts/main";

export const SearchBarFilter = ({searchValue}) => {
    const {activeDataSet, searchRecipes, setSearchRecipes} = useContext(SearchRecipeContext)
    
    useEffect(()=>{
        if(!searchValue){
            setSearchRecipes(activeDataSet)
        } else {
            const recipes = activeDataSet.filter(recipe=>{
                if(recipe?.name.toLowerCase().includes(searchValue) ||
                   recipe?.description.toLowerCase().includes(searchValue)) {
                    return recipe
                }
            })     
            setSearchRecipes(recipes)
        }
        
    }, [searchValue, activeDataSet])
    
    
    return <></>
}