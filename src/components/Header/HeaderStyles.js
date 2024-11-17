import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60%;
    padding: 10px;
    font-family: var(--font-general);
        
    nav>ul>li>a{  
        text-decoration: none;
        font-size: 24px;
        color: var(--grey-color-1);
    }

    @media (max-width: 480px){
        flex-direction: column;
        align-items: center;
    }
`

export const Nav = styled.nav`
    display: flex;

`

export const LogoImage = styled.img`
   height: 10%;
`

export const Content = styled.ul`
    display: flex;
    gap: 10%;

    @media (max-width: 480px){
        justify-content: center;
    }
`

export const Item = styled.li`
    list-style: none;
`