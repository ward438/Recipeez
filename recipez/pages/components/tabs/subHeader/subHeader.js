import React, {useEffect} from "react"
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { SearchBarFilter } from '../../searchBarFilter/searchBar';
import { useDispatch, useSelector } from "react-redux"
import { fetchAppetizerRecipes } from "../../../../store/slices/recipes/appetizers";
import { fetchBreakfastRecipes } from "../../../../store/slices/recipes/breakfastRecipes";
import { fetchLunchRecipes } from "../../../../store/slices/recipes/lunch";
import { fetchDinnerRecipes } from "../../../../store/slices/recipes/dinner";
import { fetchTreatsRecipes } from "../../../../store/slices/recipes/treats";

const mainHeaderTheme = createTheme({  
    typography: {
        height: '75px',
        background: "linear-gradient(to bottom, #f2e0d0, #f3e2d200)",
        padding: '10px 0px 0px 10px',
        marginBottom: '-10px',
        '& > :not(style)': { width: '320px' },
        boxShadow: 1
    },
  });
  const border = createTheme({  
    typography: {
        height: '3px',
        backgroundColor: '#f0f0f0',   
        width: '50%',
        margin: '0 auto',
        minWidth: '98.5%'                
    },
  });

export const SubHeader = ({recipe, setRecipe,filteredInput, setFilteredInput}) => {
    const dispatch = useDispatch();

    const [textState, setTextState] = React.useState('')   
    const breakfastMealData = useSelector(state=>state?.breakfastRecipes.data)
    const lunchMealData = useSelector(state=>state?.lunchRecipes.data)
    const dinnerMealData = useSelector(state=>state.dinnerRecipes.data)
    const treatsMealData = useSelector(state=>state.treatsRecipes.data)
    const appetizerRecipes = useSelector(state=>state.appetizerRecipes.data)

    useEffect(()=> {
        dispatch(fetchBreakfastRecipes())
        dispatch(fetchLunchRecipes());
        dispatch(fetchDinnerRecipes());
        dispatch(fetchTreatsRecipes());
        dispatch(fetchAppetizerRecipes());        
    },[])

    return <>   
        <Box>
            <Box sx={mainHeaderTheme?.typography} 
                component="form"      
                noValidate
                // autoComplete="off"
            >          
                <TextField id="filled-basic"  onInput={(e)=> {setTextState(e.target.value.toLowerCase())}}/> 
                <SearchBarFilter searchValue={textState} filteredInput={filteredInput} setFilteredInput={setFilteredInput} recipe={recipe} breakfastMealData={breakfastMealData} lunchMealData={lunchMealData} dinnerMealData={dinnerMealData} treatsMealData={treatsMealData} appetizerRecipes={appetizerRecipes}/>
            </Box>       
            <Box sx={border?.typography}/>           
        </Box>     
    </>
}