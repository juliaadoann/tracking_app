import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel } from '@mui/material';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', userStories: '', weight: 0 });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ name: '', userStories: '', weight: 0 });
    handleCloseDialog();
  };

  const handleProjectChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box display="flex" justifyContent="center" p={2}>
        <Button variant="contained" onClick={handleOpenDialog}>Add</Button>
        {/* Implement View and Edit buttons as needed */}
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add a New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Project Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={newProject.name}
            onChange={handleProjectChange}
          />
          <TextField
            margin="dense"
            label="User Stories"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            name="userStories"
            value={newProject.userStories}
            onChange={handleProjectChange}
          />
          <TextField
            margin="dense"
            label="Weight (%)"
            type="number"
            fullWidth
            variant="standard"
            name="weight"
            value={newProject.weight}
            onChange={handleProjectChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAddProject}>Add Project</Button>
        </DialogActions>
      </Dialog>

      <Box>
        {projects.map((project, index) => (
          <Box key={index} m={2} p={2} border={1}>
            <Typography variant="h6">{project.name}</Typography>
            <Typography>User Stories:</Typography>
            {project.userStories.split('\n').map((story, idx) => (
              <FormControlLabel
                key={idx}
                control={<Checkbox />}
                label={`${story} (Weight: ${project.weight}%)`}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Dashboard;
