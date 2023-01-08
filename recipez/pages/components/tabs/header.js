import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Tab } from "./tab"

export const TabHeader = ({tabs, children}) => {
    return <>
        <Box>
        <Grid container spacing={2}>
            <Grid item xs={10}>
            <Box sx={{display: 'inline-flex'}}>                
                <Box sx={{width: '100%', backgroundColor: '#ff080187', height: '15px'}}/>
                    {tabs.map((tab, index)=><Tab  key={tab.name} index={index} tab={tab}/>)}                
                </Box>
            </Grid>
            <Grid item xs={2}>
            <Box>
                {children}
            </Box>
            </Grid>       
        </Grid>        
    </Box>

    
  </>
}
