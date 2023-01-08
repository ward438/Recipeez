import React, {useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// add prop types to support tab info


class Tabs {
    constructor(mealType, timeOfDay, type){        
        this.mealType = mealType
        this.timeOfDay = timeOfDay
        this.type = type
    }

    render() {
        // return `${this.mealType} - ${this.timeOfDay} - ${this.type}`
        return <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{background: "linear-gradient(to bottom, #b30905, #ff080187)", padding: '15px', cursor: 'pointer', borderRadius: '5px 5px 0px 0px', gap: '10px', color: '#f7f0ded6',fontSize: '20px'}} 
                             onClick={()=> {console.log(this.mealType)}}>
                            {this.mealType}
                        </Box>
                    </Grid>                 
                </Grid>




    }


}

export default function TabMenu() {  
    const [tabMenu, setTabMenu] = React.useState([
        new Tabs('breakfast', 'morning', 'meal'),
        new Tabs('dinner', 'evening', 'meal'),
        new Tabs('lunch', 'noon', 'meal'),
        new Tabs('treats')
    ])

  return (
    <>     
        <Box sx={{display: 'inline-flex'}}>
            <Box>  
             {tabMenu.map((mapItem, index) => (
                <Box key={index} sx={{display: 'inline-flex', paddingRight: '10px'}}>{mapItem.render()}</Box>
                )                
             )}                          
            </Box>
        </Box>
        <Box sx={{width: '100%', backgroundColor: '#ff080187', height: '15px'}}/>
      
    </>
  )
}
