import LogoR from "../../assets/PortIcon.png"
import Button from "../ButtonNav/ButtonNav"
import { StyledHeader } from "./StyledHeader"

function Header() {

    return (
        <>
            <StyledHeader>
                <nav>
                    <img src={LogoR} alt="customized leter R, reference to Rafael first leter name, the site owner." />
                    <div className="divButtons">
                        <Button>Sobre mim</Button>
                        <Button>Contatos</Button>
                        <Button>Projetos</Button>
                    </div>
                </nav>
            </StyledHeader>
        </>
    )
}

export default Header