import { Box, CssBaseline, IconButton, List, ListItemIcon, Typography, ListItem} from "@mui/material";
import { GitHub } from "@mui/icons-material";

const styles = {

}

const SideBar = () => 
{
    <Box position={{position: 'fixed', bottom: '0%', left: '2%'}}>
        <CssBaseline>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <GitHub />
                    </ListItemIcon>
                </ListItem>
            </List>
        </CssBaseline>
    </Box>
}

export default SideBar;