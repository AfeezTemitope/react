import Newsletter from "./NewsLetter";
import FollowAlong from "./FollowAlong";
import MoreFromUs from "./MoreFromUs";
import Logo from "./Avengers";
import './style/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Logo/>
            <MoreFromUs/>
            <FollowAlong/>
            <Newsletter/>
        </footer>
    )
}
export default Footer;