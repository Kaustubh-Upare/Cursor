import { Avatar, Button, Typography, Stack, Box, Divider, Paper } from "@mui/material";

const Sidebar = () => {
  const sampleRecent = [
    "React Music Player",
    "Somethings",
    "Very long recent project name that needs to be truncated properly",
    "React Music Player",
    // "Somethings",
    // "Very long recent project name that needs to be truncated properly",
    // "React Music Player",
    // "Somethings",
    // "Very long recent project name that needs to be truncated properly",
    // "React Music Player",
    // "Somethings",
    
    
  ];

  return (
    <Paper
  elevation={3}
  sx={{
    height: '100vh',
    width:"100%",
    display: 'flex',
    flexDirection: 'column',
    p: 2,
    minWidth:0,
    backgroundColor:'#0F0F10',
    color:'white'
  }}
>
  {/* HEADER (Top Section) */}
  <Box sx={{ mb: 'auto' }}>
    <Typography variant="h6" fontWeight={600} mb={2}>
      My Cursor
    </Typography>
    <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
      New Chat
    </Button>
    <Divider sx={{ mb: 1 }} />
    <Typography variant="caption" color="Grey" sx={{ mb: 1 }}>
      Recent
    </Typography>
  </Box>

  {/* SCROLLABLE CONTENT (Middle Section) */}
  <Box
    sx={{
      overflowY: 'auto',  
      pr: 1,
      flex: 1,
      minWidth:0,
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
    <Stack spacing={1}>
      {sampleRecent.map((item, i) => (
        <Box
          key={i}
          sx={{
            p: 1,
            borderRadius: 1,
            cursor: 'pointer',
            '&:hover': { bgcolor: 'grey.800' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            minWidth:0,
            width:"100%"
          }}
          title={item}
        >
          <Typography variant="body2">{item}</Typography>
        </Box>
      ))}
    </Stack>
  </Box>

  {/* FOOTER (Bottom Section) */}
  <Box sx={{ mt: 'auto' }}>
    <Divider sx={{ my: 1 }} />
    <Stack direction="row" spacing={1} alignItems="center">
      <Avatar alt="Kaustubh Upare" />
      <Box>
        <Typography variant="body2" fontWeight={500}>
          Kaustubh Upare
        </Typography>
        <Typography variant="caption" color="Gray">
          Free Plan
        </Typography>
      </Box>
    </Stack>
  </Box>
</Paper>
  );
};

export default Sidebar;
