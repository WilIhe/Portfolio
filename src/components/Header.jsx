import { Typography, Box, Toolbar, AppBar, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Header = () =>
{
    return(
        <AppBar sx={{backgroundColor: 'grey'}}>
          {/* Add flex property */}
          <Toolbar sx={{justifyContent: 'space-between'}}>
            <Box>
              <Typography>
                Wilfred Iheukwu
              </Typography>
            </Box>

            <IconButton>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
    );
}

export default Header;