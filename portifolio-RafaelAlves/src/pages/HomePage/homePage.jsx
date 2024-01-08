import Footer from "../../Components/Footer/Footer"
import { StyledHomePage } from "./StyledHomePage"
import photo from "../../assets/PortifolioPhoto.png"
import image from "../../assets/header-bg.png"
import Button from "../../Components/ButtonNav/ButtonNav"
import { Link } from "react-router-dom"
import { Header } from "../../Components/Header/Header"

export const HomePage = () => {

    return (
        <>
            <Header />
            <StyledHomePage>
                <div className="divImage">
                    <img className="deskImg" src={photo} alt="" />
                    <img className="mobImg" src={image} alt="" />
                </div>
                <div className="divHomePageTextTitle">
                    <h1 className="homePageTitle">Explorando <span>Criatividade</span> e <span>Inovação</span></h1>
                    <div className="divHomePageText">
                        <p className="homePageText">Bem-vindo ao meu mundo, onde a paixão encontra a tecnologia. Sou Rafael, um entusiasta de design e desenvolvimento, dedicado a transformar conceitos em experiências incríveis.</p>
                        <p className="homePageText">Explore meu portfólio e descubra como minha paixão por design e desenvolvimento dá vida a projetos extraordinários</p>
                        <Link to={"/abOutMe"}><Button>Mais sobre mim</Button></Link>
                    </div>
                </div>
            </StyledHomePage>
            <Footer />
        </>
    )
}