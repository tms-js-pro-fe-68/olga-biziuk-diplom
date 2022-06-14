import { useEffect, useState } from "react";
import Page from "../components/Page";
import AppBar from "../components/AppBar";
import { Box, Checkbox, Fab, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from "@mui/icons-material";
import ConfirmDialog from "../components/ConfirmDialog";

export default function HomePage() {
const [todos, setTodos] = useState([]);


useEffect(() => {
fetch('https://tms-js-pro-back-end.herokuapp.com/api/todos', {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Token ${sessionStorage.token}`
    },
})
.then((response) => response.json())
.then(setTodos);
}, []);

const handleItemClick = (id) => () => {
console.log(id)
}
const [isdDeleteConfirmDialogOpen, setIsdDeleteConfirmDialogOpen] = useState(false);

const handleDeleteConfirmOpen = id => () => setIsdDeleteConfirmDialogOpen(true);
const handleDeleteConfirmClose = () => setIsdDeleteConfirmDialogOpen(false);


return(
<Page>  
<AppBar />
<CustomHook />

<Box sx={{display: 'grid', gap: 2, gridTemplateColums: '1fr', p:2}}>
{[...todos, ...todos, ...todos, ...todos].map((todoItem) => (
    <Paper onClick={handleItemClick(todoItem.id)} sx={{p: 2}}>
    <Checkbox
        edge="start"
        checked={todoItem.done}
        tabIndex={-1}
        disableRipple
        />
    {todoItem.description}
    <Stack direction="row" spacing={2}>
            <IconButton edge="end">
                <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={handleDeleteConfirmOpen(todoItem.id)}>
                <DeleteIcon />
            </IconButton>
            </Stack>
    </Paper>
))}
</Box>

    <Fab color="primary" sx={{ position: 'fixed', bottom: 24, right: 24}}>
    <AddIcon />
    </Fab>
    <ConfirmDialog 
            title="Delete FODO item" 
            text="Are you sure?" 
            open={isdDeleteConfirmDialogOpen}
            onClose={handleDeleteConfirmClose}/>
</Page>
);
} 