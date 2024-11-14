import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { HeaderContainer } from './HeaderStyles';


export const Header = () =>{
    return(
        <HeaderContainer>
            <img src={logo} alt="logo starbucks" />
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/news'>Novidade</Link></li>
                    <li><Link to='/about'>Sobre</Link></li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}