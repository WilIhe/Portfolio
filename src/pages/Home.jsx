import { Container, CssBaseline } from "@mui/material";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import '../pages/Home.css'


const Home = () =>
{
    return (
        <Container className='area'>
            <Header />
            <SideBar />
        </Container>
    );
}

export default Home;