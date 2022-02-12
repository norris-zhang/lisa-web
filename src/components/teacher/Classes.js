import SchoolIcon from '@mui/icons-material/School';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Fragment } from "react";
import styles from './Classes.module.css';


const Classes = props => {
  
  return (
    <div>
      <h1>Classes</h1>
      <Divider />
      <div className={styles['error-message']}>errorMessage</div>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {[].map(clas => 
            <Fragment key={clas.id}>
            <ListItem disablePadding onClick={() => {}}>
              <ListItemButton>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary={clas.name} secondary={`${clas.duration} min`} />
              </ListItemButton>
            </ListItem>
            <Divider />
            </Fragment>)}

          </List>
        </nav>
      </Box>
    </div>
  );
};

export default Classes;