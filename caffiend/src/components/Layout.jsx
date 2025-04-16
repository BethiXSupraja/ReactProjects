
export default function Layout(props){
    const { children } = props

    const header = (
        <header>
            <div>
            <h1 className="text-gradient">CAFFIEND</h1>
            <p>For Coffe Insatiates</p>
            </div>
            <button>
                <p className="fa-solid fa-mug-hot"> Sign up free</p>
                <i></i>
            </button>

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
        {header}
        <main>
            {children}
        </main>
        {footer}
        </>
    )
}