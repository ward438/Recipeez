import React, {useEffect} from 'react'
import Box from '@mui/material/Box';

class Tabs {
    constructor(mealType, timeOfDay, type){        
        this.mealType = mealType
        this.timeOfDay = timeOfDay
        this.type = type
    }

    render() {
        return `${this.mealType} - ${this.timeOfDay} - ${this.type}`
    }


}

export default function TabMenu() {  
    const [tabMenu, setTabMenu] = React.useState([
        new Tabs('breakfast', 'morning', 'meal'),
        new Tabs('dinner', 'evening', 'meal'),
        new Tabs('lunch', 'noon', 'meal')
    ])

  return (
    <>     
        <Box sx={{display: 'inline-flex'}}>
            <Box sx={{border: '1px solid orange'}}>  
             {tabMenu.map((mapItem, index) => (
                <div key={index}>{mapItem.render()}<br/></div>
             )                
             )}                          
            </Box>
        </Box>
      
    </>
  )
}
