import { Box, Grid, Typography, Container} from "@mui/material";
import '../components/Landing.css'

const Landing = () =>
{
    return (
        <Box className='centered-text' sx={{ flexGrow: 1}}>
            <Typography variant="h1" sx={{alignItems: 'center', textAlign: 'center', display: 'flex', color: 'white'}}>
                    Hi! I'm Wilfred
             </Typography>
        </Box>
    )
}

export default Landing;