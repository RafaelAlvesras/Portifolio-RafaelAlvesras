import Footer from "../../Components/Footer/Footer.jsx"
import { Header } from "../../Components/Header/Header.jsx"
import { projectsList } from '../../Data/ListProjects.js'
import { Link } from "react-router-dom"
import gitHubIcon from "../../assets/github-icon.png"
import { StyledProjectsPage } from "./StyledProjectsPage.js"
import Button from "../../Components/ButtonNav/ButtonNav.jsx"

export const ProjectsPage = () => {

    return (
        <>
            <Header />
            <StyledProjectsPage>
                <ul>
                    {projectsList.map((project) => (
                        <li key={project.name}>
                            <div className="divTitleCardProject" >
                                <h1 >{project.name}</h1>
                                <Link to={project.gitLink} target='_blank'>
                                    <span>Acesse o repositório</span>
                                    <img src={gitHubIcon} alt='Logotipo do Git Hub' />
                                </Link>
                            </div>
                            <div>
                            </div>
                            <Button><Link to={project.link} target='_blank'>Aplicação</Link></Button>
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            </StyledProjectsPage>
            <Footer />
        </>
    )
}