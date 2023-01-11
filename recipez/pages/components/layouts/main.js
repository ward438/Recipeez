import React, {useState, createContext,useContext, useEffect} from "react"
import {Home} from "../home";
import {Breakfast} from "../../components/mealTypes/breakfast";
import {Lunch} from "../../components/mealTypes/lunch";
import {Dinner} from "../../components/mealTypes/dinner";
import {Treats} from "../../components/mealTypes/treats";
import { TabHeader } from "../tabs/header";
import Profile from "../profile";
import { SubHeader } from "../tabs/subHeader/subHeader";
import { Appetizer } from "../mealTypes/appetizer";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreakfastRecipes } from "../../../store/slices/recipes/breakfastRecipes";
import { fetchLunchRecipes } from "../../../store/slices/recipes/lunch";
import { fetchDinnerRecipes } from "../../../store/slices/recipes/dinner";
import { fetchTreatsRecipes } from "../../../store/slices/recipes/treats";
import { fetchAppetizerRecipes } from "../../../store/slices/recipes/appetizers";

export const SearchRecipeContext = createContext()
export const ActiveTabContext = createContext()

export const MainLayout= () =>{    
    const [searchRecipes, setSearchRecipes] = useState([]);
    const dispatch = useDispatch();

    const breakfastMealData = useSelector(state=>state.breakfastRecipes.data)
    const lunchMealData = useSelector(state=>state.lunchRecipes.data)
    const dinnerMealData = useSelector(state=>state.dinnerRecipes.data)
    const treatsMealData = useSelector(state=>state.treatsRecipes.data)
    const appetizerRecipes = useSelector(state=>state.appetizerRecipes.data)

    const tabs = [
        {name: 'Home', component: <Home/>, dispatchEvents: [
            ()=>fetchBreakfastRecipes(),
            ()=>fetchLunchRecipes(),
            ()=>fetchDinnerRecipes(),
            ()=>fetchTreatsRecipes(),
            ()=>fetchAppetizerRecipes()
        ], retrieveDataStore: ()=>{            
            setActiveDataSet([].concat(breakfastMealData, lunchMealData, dinnerMealData, treatsMealData, appetizerRecipes))
        }},
        {name: 'Breakfast', component: <Breakfast/>, dispatchEvents: [
            ()=>fetchBreakfastRecipes(),
        ], retrieveDataStore: ()=>{            
            setActiveDataSet([].concat(breakfastMealData))
        }},
        {name: 'Lunch', component:<Lunch/>, dispatchEvents: [
            ()=>fetchLunchRecipes(),
        ], retrieveDataStore: ()=>{            
            setActiveDataSet([].concat(lunchMealData))
        }},
        {name: 'Dinner', component: <Dinner/>, dispatchEvents: [
            ()=>fetchDinnerRecipes(),
        ], retrieveDataStore: ()=>{            
            setActiveDataSet([].concat(dinnerMealData))
        }},
        {name: 'Treats', component: <Treats/>, dispatchEvents: [
            ()=>fetchTreatsRecipes(),
        ], retrieveDataStore: ()=>{           
            setActiveDataSet([].concat( treatsMealData))
        }},
        {name: 'Appetizers', component: <Appetizer/>, dispatchEvents: [
            ()=>fetchAppetizerRecipes(),
        ], retrieveDataStore: ()=>{            
            setActiveDataSet([].concat( appetizerRecipes))
        }}
    ];
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [activeDataSet, setActiveDataSet] = useState([]);

    useEffect(()=>{
        tabs[activeTabIndex].dispatchEvents.forEach(dispatchEvent=>{
            dispatch(dispatchEvent());
        })
    }, [activeTabIndex])

    useEffect(()=>{
        tabs[activeTabIndex].retrieveDataStore();
    }, [breakfastMealData, lunchMealData, dinnerMealData, treatsMealData, appetizerRecipes]);    

    return <>
        <ActiveTabContext.Provider value={{setActiveTabIndex}}>
            <TabHeader tabs={tabs}>  
                <Profile/>
            </TabHeader>
            <SearchRecipeContext.Provider value={{searchRecipes, setSearchRecipes, activeDataSet}}>
                <SubHeader/>
                <div style={{paddingTop: '20px'}}>{tabs[activeTabIndex].component}</div>
            </SearchRecipeContext.Provider>        
        </ActiveTabContext.Provider>
  </>
}