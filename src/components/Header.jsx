import { Typography, Box, Toolbar, AppBar, IconButton, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

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

            <Box>
              <Button sx={{color: 'white'}} component = {Link} to='/AboutPage'> About </Button>
              <Button sx={{color: 'white'}}> Projects </Button>
              <Button sx={{color: 'white'}}> Experinece </Button>
            </Box>

          </Toolbar>
        </AppBar>
    );
}

export default Header;