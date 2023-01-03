import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"


export const SideBar = ({drawerWidth = 240}) => {

    const { displayName } = useSelector( state => state.auth)
    const { notes } = useSelector( state => state.journal)

    return (
        <Box
            componente='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        >
            <Drawer
                variant="permanent"  // Temporary => si queremos ocultarlo o jugar con el tamaño
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}    
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {notes.length > 0 &&
                        notes.map( note => (
                            <SideBarItem key={ note.id } { ...note } />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
