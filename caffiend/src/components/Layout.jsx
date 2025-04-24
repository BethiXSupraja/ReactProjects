import { useState } from "react"
import Authentication from "./Authentication"
import Modal from "./Modal"
import { useAuth } from "../Context/AuthContext"

export default function Layout(props){
    const { children } = props

    const[showModal, setShowModal] = useState(false)
    const {globalUser, logout} = useAuth()

    const header = (
        <header>
            <div>
            <h1 className="text-gradient">CAFFIEND</h1>
            <p>For Coffee Insatiates</p>
            </div>
           { globalUser? (
            <button onClick={logout}>
                <p>Logout</p>
                <i></i>
            </button>):
            (<button onClick={()=>{ 
                setShowModal(true)}}>
                <p className="fa-solid fa-mug-hot"> Sign up free</p>
                <i></i>
            </button>) }

        </header>
    )
    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by <a target="_blank" href="https://react-portfolio-suprajabethi.netlify.app/">Supraja Bethi</a> <br/>using the <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a> design library by{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/smoljames-education/">
            @smoljames</a><br />Check out the project on <a target="_blank" href="https://github.com/BethiXSupraja/ReactProjects">GitHub</a>!</p>
           
        </footer>
    )
   
    return(
        <>
        { showModal &&
        (<Modal handleCloseModal={() => {setShowModal(false)} }>
            <Authentication handleCloseModal={() => {setShowModal(false)}}/>
        </Modal>
        )}
        {header}
        <main>
            {children}
        </main>
        {footer}
        </>
    )
}