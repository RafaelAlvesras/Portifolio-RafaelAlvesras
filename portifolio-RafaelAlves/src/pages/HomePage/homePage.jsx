import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { StyledHomePage } from "./StyledHomePage"
import photo from "../../assets/PortifolioPhoto.png"
import image from "../../assets/header-bg.png"

function HomePage() {

    return (
        <>
            <Header />
            <StyledHomePage>
                <div className="divImage">
                    <img className="deskImg" src={photo} alt="" />
                    <img className="mobImg" src={image} alt="" />
                </div>
                <div>
                    <h1>Explorando Criatividade e Inovação</h1>
                    <p>Bem-vindo ao meu mundo, onde a paixão encontra a tecnologia. Sou Rafael, um entusiasta de design e desenvolvimento, dedicado a transformar conceitos em experiências incríveis.</p>
                    <p>Explore meu portfólio e descubra como minha paixão por design e desenvolvimento dá vida a projetos extraordinários</p>
                </div>
            </StyledHomePage>
            <Footer />
        </>
    )
}

export default HomePage