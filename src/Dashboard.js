import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CodeIcon from "@mui/icons-material/Code";
import AdbIcon from "@mui/icons-material/Adb";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import { pink } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';

const drawerWidth = 240;

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newProject, setNewProject] = useState({
    name: ""
  });

  // Hardcoded list of project names
  const projectNames = ["Project 1", "Project 2", "Project 3"];

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setNewProject({ name: "" });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddProject = () => {
    setProjects([...projects, newProject]);
    handleCloseDialog();
  };

  const handleProjectChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar
            style={{ justifyContent: "center" }}
          >
            {" "}
            {/* Align items horizontally center */}
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            }
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <Stack direction="row" spacing={2} sx={{ marginY: 2, marginX: 2 }}>
              <Avatar sx={{ bgcolor: pink[400] }}>J</Avatar>
              {/* Name of the account */}
              <Typography variant="h6" align="right">
                John Doe
              </Typography>
            </Stack>
            <Divider />

            {/* List of projects */}
            <List>
              {projectNames.map((text, index) => (
                <React.Fragment key={text}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <AdbIcon /> : <CodeIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
            
          </Box>

          <Box flexGrow={1} /> {/* This pushes the button to the bottom */}

            <Box pb={2} px={2}> {/* Padding at the bottom and sides */}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleOpenDialog}
              >
                Add New Project
              </Button>
            </Box>
        </Drawer>

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
              {project.userStories.split("\n").map((story, idx) => (
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
    </div>
  );
}

export default Dashboard;
