import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

const classList = [
  {
    id: 1,
    name: '周六1.30 7岁',
    description: 'There are 6 students in this class. This class starts at 1.30 on Saturdays. It is a one-hour session, but it usually runs over 1 and a half hours.',
    dayOfWeek: 'SAT',
    duration: 90
  },
  {
    id: 2,
    name: '周六11.30 9岁',
    description: 'There are 6 students in this class. This class starts at 1.30 on Saturdays. It is a one-hour session, but it usually runs over 1 and a half hours.',
    dayOfWeek: 'SAT',
    duration: 90
  },
  {
    id: 3,
    name: '周一3.30 5岁',
    description: 'There are 6 students in this class. This class starts at 1.30 on Saturdays. It is a one-hour session, but it usually runs over 1 and a half hours.',
    dayOfWeek: 'MON',
    duration: 90
  },
  {
    id: 4,
    name: '周二3.30 7岁',
    description: 'There are 6 students in this class. This class starts at 1.30 on Saturdays. It is a one-hour session, but it usually runs over 1 and a half hours.',
    dayOfWeek: 'TUE',
    duration: 90
  }
];

const Classes = props => {
  // fetch('');
  return (
    <div>
      <h1>Classes</h1>
      <Divider />
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {classList.map(clas => <ListItem key={clas.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={clas.name} secondary={`${clas.duration} min`} />
            </ListItemButton>
          </ListItem>)}

        </List>
      </nav>
    </Box>
    </div>
  );
};

export default Classes;