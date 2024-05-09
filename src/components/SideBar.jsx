import { Box, CssBaseline, IconButton, List, ListItemIcon, Typography, ListItem} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
//import { LinkedIn } from "@mui/icons-material";
import styled from '@emotion/styled';

const StyledIconButton = styled(IconButton)({
    color: 'blue',
    '&:hover': {
        color: 'white'
    },
})


const SideBar = () => 
{
    return(
    <Box sx={{ backgroundColor: 'rgb(0, 0, 26)', position: 'fixed', bottom: '0%', left: '2%', zIndex: '3'}}>
        <CssBaseline>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <StyledIconButton>
                            <GitHub />
                        </StyledIconButton> 
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StyledIconButton>
                            <LinkedIn />
                        </StyledIconButton> 
                    </ListItemIcon>
                </ListItem>
            </List>
        </CssBaseline>
    </Box>
    );
}

export default SideBar;