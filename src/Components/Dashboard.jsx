import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import NoteAltTwoToneIcon from '@mui/icons-material/NoteAltTwoTone';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import CodeIcon from '@mui/icons-material/Code';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import Link from '@mui/material/Link';



const drawerWidth = 240;
export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Bluethink Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {/* {['Dashboard', 'Attendance', 'Project Management', 'Report Management' , 'Leave Management','Technology Stack','Generate Salary Slip','Break','Fun At Bluethink'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ?  : null}
                    {index === 1 ? <NoteAltTwoToneIcon /> :  null}
                    {index === 2 ? <WorkRoundedIcon /> :  null}
                    {index === 3 ? <AssessmentRoundedIcon /> :  null}
                    {index === 4 ? <DirectionsRunIcon /> :  null}
                    {index === 5 ? <CodeIcon /> :  null}
                    {index === 6 ? <CurrencyRupeeIcon /> :  null}
                    {index === 7 ? <RestaurantIcon /> :  null}
                    {index === 8 ? <CelebrationRoundedIcon /> :  null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}
            <List>
              <ListItem button component={Link} href="/LandingPage">
                <ListItemIcon>
                <GridViewRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </List>

          </List>


        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
  );
}