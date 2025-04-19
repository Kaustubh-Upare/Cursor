import UserLayout from "../components/Layouts/UserLayout";
import { Box, Grid, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import {Send as SendIcon,DoubleArrow,KeyboardDoubleArrowUp} from '@mui/icons-material'
import { useState } from "react";

const Home=()=>{

  const [inputText,setinputText]=useState('');
  const [hasSubmitted,setHasSubmitted]=useState(true);

  const handleSubmit=()=>{
    console.log(inputText);
    if(hasSubmitted){
      setHasSubmitted(false);
    }
    console.log(import.meta.env.VITE_SERVER);
    

  }
    return(
      <UserLayout >
          { hasSubmitted ?<Box
            sx={{
              minHeight:'100vh',
              backgroundColor: "rgb(14, 12, 15)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems:'center',
              justifyContent:'center',
              px:2
            }}
          
          >
          <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
            fontSize: {
              xs: '1.2rem', 
              sm: '2rem',  
              md: '2.5rem',
              lg: '3rem',  
              xl: '3rem',  
            },
          }}
        >
          Always a Pleasure To Help You Out
        </Typography>

          {/* TextField */}

          <Paper
            elevation={2}
            sx={{
              backgroundColor: "#141415",
              borderRadius: 3,
              p: 2,
              width: "100%",
              maxWidth: 700,
              border:'1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Box
               sx={{
                maxHeight: 200, // Maximum height for input area
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#555',
                  borderRadius: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'transparent',
                },
              }}
            >
            <TextField 
              placeholder="Ask For a Code"
              variant="standard"
              fullWidth
              multiline
              value={inputText}
              onChange={(e)=>setinputText(e.target.value)}
              minRows={2}
              InputProps={{
                disableUnderline:true,
                sx:{
                  color:'rgb(214, 212, 212)',
                  fontSize:{
                    xs: '0.7rem',   
                    sm: '0.8rem',   
                    md: '1rem',   
                    lg: '1rem',   
                    xl: '1rem',   
                  }
                },
                
              }}
              
              sx={{
                color:'white'
              }}
            />

            </Box>
            <Stack direction={'row'} width={'100%'} justifyContent={"flex-end"}>
              <Box 
                sx={{
                  border:'1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius:2,
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  padding:0.5,
                  backgroundColor:'#1F1F22',
                  cursor:'pointer',
                  transition: 'background-color 0.3s, transform 0.2s',
                  '&:hover': {
                    backgroundColor: '#2a2a2e',
                    transform: 'scale(1.05)',
                  },

                }}
                onClick={handleSubmit}
                
              >
                <KeyboardDoubleArrowUp color="warning" sx={{
                  fontSize:{
                    xs:'medium',
                    sm:'large'
                  }
                }}/>
              </Box>
            </Stack>
            
          </Paper>
          
          </Box> 
// New ------------------ Layout---------------------------- ********************
          :(
            
    <Grid container direction="column" sx={{ height: '100vh' }}>
  {/* Header */}
  <Grid size={{xs:12}} sx={{ height: '40px', 
    backgroundColor: '#111', color: 'white', display: 'flex',
     alignItems: 'center' }}>
    <Typography variant="body2">Always a pleasure to help you out</Typography>
  </Grid>

  {/* Middle scrollable content */}
  <Grid size={{xs:12}} sx={{ flex: 1, overflowY: 'auto', backgroundColor: '#0F0F10', p: 2 }}>
    {/* Add your chat messages or content here */}
    <Typography sx={{ color: 'white' }}>Chat messages go here...</Typography>
  </Grid>

  {/* Bottom input section */}
  <Grid size={{xs:12}} sx={{
    //  height: '120px'
    backgroundColor: '#0F0F10', p: 2 }}>
    {/* TextField and Submit button */}
    <Paper
      elevation={2}
        sx={{
          backgroundColor: "#141415",
          borderRadius: 3,
          p: 1.5,
          width: "100%",
          border:'1px solid rgba(255, 255, 255, 0.2)',
        }}
    >
      <Box
        sx={{
          maxHeight: 100, // Maximum height for input area
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#555',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
      }}
      >
        <TextField 
          placeholder="Always There To help You Out 😇"
          variant="standard"
          fullWidth
          multiline
          value={inputText}
          onChange={(e)=>setinputText(e.target.value)}
          minRows={2}
          InputProps={{
            disableUnderline:true,
            sx:{
              color:'rgb(214, 212, 212)',
              fontSize:{
                xs: '0.7rem',   
                sm: '0.8rem',   
                md: '1rem',   
                lg: '1rem',   
                xl: '1rem',   
                }
              },
                
              }}
              
          sx={{
            color:'white'
          }}
        />

      </Box>
      
      <Stack direction={'row'} width={'100%'} justifyContent={"flex-end"}>
              <Box 
                sx={{
                  border:'1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius:2,
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  padding:0.5,
                  backgroundColor:'#1F1F22',
                  cursor:'pointer',
                  transition: 'background-color 0.3s, transform 0.2s',
                  '&:hover': {
                    backgroundColor: '#2a2a2e',
                    transform: 'scale(1.05)',
                  },

                }}
                onClick={handleSubmit}
                
              >
                <KeyboardDoubleArrowUp color="warning" sx={{
                  fontSize:{
                    xs:'medium',
                    sm:'large'
                  }
                }}/>
              </Box>
            </Stack>


    </Paper>
  </Grid>
</Grid>
            
          )}
      </UserLayout>
    )
}

export default Home;