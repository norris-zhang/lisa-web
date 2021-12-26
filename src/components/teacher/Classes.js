import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listClasses } from "../../services/APIService";
import styles from './Classes.module.css'


const Classes = props => {
  const [classes, setClasses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    listClasses()
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('response status is ' + response.status)
      }
    })
    .then(json => {
      setClasses(json);
    })
    .catch(error => {
      setErrorMessage(error.message);
    });
  }, []);

  const viewClassStudents = classId => {
    navigate('/class/' + classId);
  };
  return (
    <div>
      <h1>Classes</h1>
      <Divider />
      <div className={styles['error-message']}>{errorMessage}</div>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {classes.map(clas => 
            <Fragment key={clas.id}>
            <ListItem disablePadding onClick={() => {viewClassStudents(clas.id);}}>
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