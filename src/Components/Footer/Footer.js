import myLogo from "../../Assets/My-new-Logo.png";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <div className="separator w-100"></div>
            <footer className="mx-auto text-muted text-center text-small MainFooter">
                <p className="mb-1 pt-3 text-light">© {year} Created with <i className="bi bi-heart-fill"></i> by</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><img className="myLogo" src={myLogo} alt="myLogo" /></li>
                    </ul>
                <p className="mb-1 text-light">All images were taken from open-sources and are used for educational purposes only.</p>
            </footer>
        </div>
    )
}
export default Footer;