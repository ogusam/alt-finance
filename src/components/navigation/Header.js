import { Link } from "react-router-dom";
//import launch_icon from '../images/launch_icon.png';
import SideDrawer from "./sideNavigation";


function Header() {

    return(
        <nav className="navbar">
        
            <Link to='/mainPage' className="left-item" style={{textDecoration: 'none'}}>Need Help?</Link>    
            {/*<Link to='/' className="navbar-brand"><img style={{width:200, height:50}}src={launch_icon} alt=""/></Link>*/}
            <Link className="logo justify-content-center"><img style={{width:200, height:50}} src="https://saf.ng/wp-content/uploads/2022/10/Sterling-Alternative-Finance-Logo.svg" alt="" /></Link>
            <div className="sidedrawer">
            <SideDrawer/><span style={{color:'red'}}>MENU</span>
            </div>
        
        </nav>
    )
}

export default Header;