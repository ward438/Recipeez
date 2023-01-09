import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchBreakfastRecipes } from "../../../store/slices/recipes/breakfastRecipes";

export const SearchBarFilter = ({searchValue, setFilteredInput}) => {
    // console.log(searchValue)
    const dispatch = useDispatch();
    const breakfastMealData = useSelector(state=>state?.breakfastRecipes)

    const handleCompare = (userInput,reduxData) => {
        let data = reduxData;        
        if(data.length !== undefined & data.length !== null) {
            data.filter(item => {       
                if(item?.name === userInput || item?.description === userInput) {
                    return setFilteredInput(item)
                }
            })    
        } return
    }

    useEffect(()=> {
        dispatch(fetchBreakfastRecipes())
        
    },[])

    
    handleCompare(searchValue,breakfastMealData.data)

    return 



}