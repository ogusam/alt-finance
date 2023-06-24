import { Link } from "react-router-dom"
import slogo from '../images/slogo.png';
import './mainPage.css';
import './form.css';

function MainPage () {
    return(
        <navbar>
            <li className="nav-brand">
            <Link  style={{textDecoration:'none'}}><img src={slogo}/><span className="sterling">Sterling</span></Link>
            </li>
            <ul>
                <li className="home"><Link style={{textDecoration:'none', color:'white'}}>Home</Link></li>
                <li><Link  style={{textDecoration:'none', color:'black'}}>Knowledge base</Link></li>
                <li><Link  style={{textDecoration:'none', color:'black'}}>Submit ticket</Link></li>
                <li><Link to="/login" style={{textDecoration:'none'}}>Login</Link></li>
                <li><Link style={{textDecoration:'none'}}>SignUp</Link></li>
            </ul>

        </navbar>
    )
}
export default MainPage;