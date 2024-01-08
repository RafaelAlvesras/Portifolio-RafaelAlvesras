import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/homePage.jsx"
import { AboutMe } from "../pages/AboutMe/aboutMe.jsx"
import { ProjectsPage } from "../pages/ProjectsPage/projectsPage.jsx"
import { ContactsPage } from "../pages/ContactsPage/contactsPage.jsx"


export const RoutesMain = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/abOutMe" element={<AboutMe />} />
            <Route path="/prOJects" element={<ProjectsPage />} />
            <Route path="/contActs" element={<ContactsPage />} />
        </Routes>
    )
}