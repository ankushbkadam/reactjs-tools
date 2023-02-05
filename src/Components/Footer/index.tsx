import { ROUTES } from "../../Constants/routeConstants";

const Footer = () => {
    return <footer className="bg-dark text-center text-white  mt-auto " >
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2023 Copyright &nbsp;
            <a className="text-white" href={ROUTES.ABOUT}>Ankush and Akshay</a>
        </div>
    </footer>
}

export default Footer;
