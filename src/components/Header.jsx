import { Typography, Box, Toolbar, AppBar, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Header = () =>
{
    return(
        <AppBar sx={{backgroundColor: 'rgb(0, 0, 26)'}}>
          {/* Add flex property */}
          <Toolbar sx={{justifyContent: 'space-between'}}>
            <Box>
              <Typography>
                Wilfred Iheukwu
              </Typography>
            </Box>

            <IconButton sx={{color: 'white'}}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
    );
}

export default Header;