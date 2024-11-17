import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Content, HeaderContainer, Item, LogoImage, Nav } from './HeaderStyles';


export const Header = () =>{
    return(
        <HeaderContainer>
            <LogoImage src={logo} alt="logo starbucks" />
            <Nav>
                <Content>
                    <Item><Link to='/'>Home</Link></Item>
                    <Item><Link to='/news'>Novidade</Link></Item>
                    <Item><Link to='/about'>Sobre</Link></Item>
                </Content>
            </Nav>
        </HeaderContainer>
    )
}