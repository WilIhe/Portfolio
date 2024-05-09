import { Container, CssBaseline } from "@mui/material";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Landing from "../components/Landing";
import '../pages/Home.css'


const Home = () =>
{
    return (
        <Container maxWidth={false} className="area">
            <Header />
            <SideBar />
            <Landing />
        </Container>
    );
}

export default Home;