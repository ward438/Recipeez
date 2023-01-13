import React, {useState, createContext,useContext, useEffect} from "react"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import CompleteRecipe from "./components/mealCards/completeMealCard";
import Link from 'next/link'
import { fetchSelectedRecipe } from "../store/slices/recipes/selectedRecipe";
import axios, {isCancel, AxiosError} from 'axios';

export const SearchRecipeContext = createContext()
export const ActiveTabContext = createContext()

export default function SelectedRecipe () {
    const router = useRouter();
    const dispatch = useDispatch();
    const selectedRecipe = useSelector(state=>state.selectedRecipe)

    useEffect(() => {
        if(!router.isReady) return;
        const query = router.query;        
        dispatch(fetchSelectedRecipe(query))       
      }, [router.isReady, router.query]);  

    
    return <>
         <Link            
            href={{
                pathname: "/",               
            }}
            as={`/`}           
            style={{textDecoration: 'none' }}
        >
            Home
        </Link>

        {selectedRecipe.fulfilled && <CompleteRecipe recipe={selectedRecipe.data}/>}
        {selectedRecipe.errored && <span>errored</span>}
        {selectedRecipe.loading && <span>loading</span>}
    </>
}