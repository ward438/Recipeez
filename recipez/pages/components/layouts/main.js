import React, {useState, createContext,useContext, useEffect} from "react"
import {Home} from "../home";
import {Breakfast} from "../../components/mealTypes/breakfast";
import {Lunch} from "../../components/mealTypes/lunch";
import {Dinner} from "../../components/mealTypes/dinner";
import {Treats} from "../../components/mealTypes/treats";
import { TabHeader } from "../tabs/header";
import Profile from "../profile";
import { SubHeader } from "../tabs/subHeader/subHeader";


export const ActiveTabContext = createContext()

export const MainLayout= () =>{
    const tabs = [
        {name: 'Home', component: <Home/>},
        {name: 'Breakfast', component: <Breakfast/>},
        {name: 'Lunch', component:<Lunch/>},
        {name: 'Dinner', component: <Dinner/>},
        {name: 'Treats', component: <Treats/>},
    ];
    const [activeTabIndex, setActiveTabIndex] = useState(0);


    return <>
    <ActiveTabContext.Provider value={{setActiveTabIndex}}>
        <TabHeader tabs={tabs}>  
            <Profile/>
        </TabHeader>
        <SubHeader/>
        <div style={{paddingTop: '20px'}}>{tabs[activeTabIndex].component}</div>
    </ActiveTabContext.Provider>
  </>
}