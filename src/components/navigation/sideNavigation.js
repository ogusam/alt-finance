import {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';


import Box from '@mui/material/Box'
import Drawer  from '@mui/material/Drawer';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

import DehazeIcon from '@mui/icons-material/Dehaze';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VpnkeyIcon from '@mui/icons-material/VpnKey';

const SideDrawer=() =>{
    const [state, setState]= useState(false);
    return(
        <>            
        <DehazeIcon className='drawer_btn' onClick={()=>setState(true)}/>
        <Drawer anchor={"right"} open={state} onClose={()=> setState(false)}>
        <Box sx={{width:200,}}>
            <List style={{display:'flex', flexDirection: 'column'}}>
            <ListItem
                            button
                            component={RouterLink}
                            to="/"
                            onClick={()=> setState(false)}
                        >
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>

                        <ListItem
                            button
                            component={RouterLink}
                            to="/contact"
                            onClick={()=> setState(false)}
                        >
                            <ListItemIcon>
                                <MailIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Contact"/>
                        </ListItem>

                        <ListItem
                            button
                            component={RouterLink}
                            to="/signIn"
                            onClick={()=> setState(false)}
                        ><ListItemIcon>
                        <VpnkeyIcon/>
                        </ListItemIcon>
                
                            <ListItemText primary="Sign In"/>
                        </ListItem>

                        <>
                        <Divider/>
                        </>
                        <ListItem
                            button
                            component={RouterLink}
                            to="/personal"
                            onClick={()=> setState(false)}
                        >
                
                            <ListItemText primary="Personal"/>
                        </ListItem>

                        <ListItem
                            button
                            component={RouterLink}
                            to="/bussiness"
                            onClick={()=> setState(false)}
                        >
                        
                            <ListItemText primary="Bussiness"/>
                        </ListItem>

                        <ListItem
                            button
                            component={RouterLink}
                            to="/failed transaction"
                            onClick={()=> setState(false)}
                        >
                            
                            <ListItemText primary="Failed Transaction Form"/>
                        </ListItem>

                        <ListItem
                            button
                            component={RouterLink}
                            to="/open account"
                            onClick={()=> setState(false)}
                        >
                            
                            <ListItemText primary="Open Account"/>
                        </ListItem>

                        <ListItem
                            button
                            component={RouterLink}
                            to="/internet banking"
                            onClick={()=> setState(false)}
                        >
                            
                            <ListItemText primary="Internet Banking"/>
                        </ListItem>

                        
            </List> 

        </Box>
        </Drawer>
                
        </>
    )

    
}

export default SideDrawer;