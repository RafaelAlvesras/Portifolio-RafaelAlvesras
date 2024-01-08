import LogoR from "../../assets/PortIcon.png"
import Button from "../ButtonNav/ButtonNav"
import { StyledHeader } from "./StyledHeader"
import { Link } from "react-router-dom"

export const Header = () => {

    return (
        <>
            <StyledHeader>
                <nav>
                    <img src={LogoR} alt="customized leter R, reference to Rafael first leter name, the site owner." />
                    <div className="divButtons">
                        <Link to={"/abOutMe"}><Button>Sobre mim</Button></Link>
                        <Link to={"/prOJects"}><Button>Projetos</Button></Link>
                        <Link to={"/contActs"}><Button>Contatos</Button></Link>
                    </div>
                </nav>
            </StyledHeader>
        </>
    )
}