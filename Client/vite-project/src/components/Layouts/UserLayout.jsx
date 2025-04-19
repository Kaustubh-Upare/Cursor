import {Button,Grid, Stack, Typography} from '@mui/material'
import Sidebar from '../Shared/Sidebar';


const UserLayout=({children})=>{

  return(
    <>
      <Grid container sx={{height:'100vh'}}>
        {/* Grid One */}
        <Grid 
        sx={{display:{xs:'none',sm:'block'},minWidth:0}}
        size={{sm:2}}
        >
          
          <Sidebar />

        </Grid>
        {/* Grid Two */}
        <Grid  size={{xs:12,sm:10}} 
          sx={{
            height:'100vh',
            overflowY:'auto',
            '&::-webkit-scrollbar': {
                  width: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgb(211, 205, 211)',
                  borderRadius: '6px',
            },
            '&::-webkit-scrollbar-track': {
                  backgroundColor: '#0E0C0F',
            },
          }}
        >
          {children}
        </Grid>

      </Grid>
    </>
    )
}

export default UserLayout;