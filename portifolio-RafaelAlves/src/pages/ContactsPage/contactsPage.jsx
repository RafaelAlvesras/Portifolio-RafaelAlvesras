import whatsappIcon from '../../assets/whatsapp-icon.png'
import linkedinIcon from '../../assets/linkedin-icon.png'
import gitHubIcon from '../../assets/github-icon.png'
import Button from "../../Components/ButtonNav/ButtonNav.jsx"
import { Link } from "react-router-dom"

export const ContactsPage = () => {
    return (
        <>
            <header>
                <Link to={"/abOutMe"}><Button>Sobre mim</Button></Link>
                <Link to={"/prOJects"}><Button>Projetos</Button></Link>
            </header>
            <main>
                <div>
                    <Link target='_blank' to={"https://api.whatsapp.com/send?phone=5517981335120&text=Ol%C3%A1%20Rafael%20!%0AVim%20pelo%20link%20do%20seu%20portf%C3%B3lio,%20vamos%20falar%20sobre%20(...)"}>
                        <p>Contacte-me via WhatsApp</p>
                        <img src={whatsappIcon} alt='Logotipo do Whatsapp' />
                    </Link>
                    <Link target='_blank' to={"https://www.linkedin.com/in/rafaelalvesras"}>
                        <p>Visite minha página no Linkedin</p>
                        <img src={linkedinIcon} alt='Logotipo do LinkedIn' />
                    </Link>
                    <Link target='_blank' to={"https://github.com/RafaelAlvesras"}>
                        <p>Visite meu perfil no GitHub</p>
                        <img src={gitHubIcon} alt='Logotipo do GitHub' />
                    </Link>
                </div>
            </main>
        </>
    )
}