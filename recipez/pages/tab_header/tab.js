import React, {useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// add prop types to support tab info




export default function TabMenu({}) {  

    const [mealTypeLabel, setMealTypeLabel] = React.useState()
    const [tabMenuMealTypeCompare, setTabMenuMealTypeCompare] = React.useState()
        class Tabs {
        constructor(mealType, type){        
            this.mealType = mealType        
            this.type = type
        }
    
        render() {
            // return `${this.mealType} - ${this.type}`
            return <Grid container>
                        <Grid item xs={12}>
                            <Box sx={{background: "linear-gradient(to bottom, #b30905, #ff080187)", padding: '15px', cursor: 'pointer', borderRadius: '5px 5px 0px 0px', gap: '10px', color: '#f7f0ded6',fontSize: '20px'}} 
                                 onClick={()=> {setMealTypeLabel(this.mealType)}}
                                 >
                                {this.mealType}
                            </Box>
                        </Grid>                 
                    </Grid>    
        }    
    }

    const [tabMenu, setTabMenu] = React.useState([
        new Tabs('breakfast'),
        new Tabs('lunch'),
        new Tabs('dinner'),        
        new Tabs('treats')
    ])
    

    useEffect(()=>{
  
    }, [])
    console.log('mealTypeLabel:',mealTypeLabel)
    console.log('tabMenuMealTypeCompare: ',tabMenuMealTypeCompare)
  return (
    <>     
        <Box sx={{display: 'inline-flex'}}>
            <Box>  
             {tabMenu.map((mapItem, index) => (
                <Box 
                    key={index}
                    onClick={()=> {setTabMenuMealTypeCompare(mapItem?.mealType)}}
                    sx={{display: 'inline-flex', paddingRight: '10px'}}
                  >                    
                    {mapItem.render()}
                </Box>
            ))}                          
            </Box>
        </Box>
        <Box sx={{width: '100%', backgroundColor: '#ff080187', height: '15px'}}/>
      
    </>
  )
}
