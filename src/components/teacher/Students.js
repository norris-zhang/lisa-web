import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useParams } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import { Fragment, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { listStudents } from "../../services/APIService";

const Students = props => {
  let { classId } = useParams();
  const previousClassId = useRef(classId);
  console.log('classId = ' + classId);

  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    if (previousClassId.current !== classId) {

      listStudents(classId, json => {
        setStudentList(prev => {
          return [...prev, ...json.students];
        });
      }, error => {});

    }
  }, [classId]);

  return (
    <div>
      <h1>Students</h1>
      <Divider />
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {studentList.map(stu => 
            <Fragment key={stu.id}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary={stu.name} />
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

export default Students;