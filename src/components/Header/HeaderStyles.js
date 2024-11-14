import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    gap: 60%;
    align-items: center;
    padding: 10px;
    font-family: var(--font-general);

    img{
        height: 10vh;
    }

    nav>ul{
        display: flex;
    }

    nav>ul>li{
        list-style: none;
        margin-left: 30px;
    }
        
    nav>ul>li>a{  
        text-decoration: none;
        font-size: 24px;
        color: var(--grey-color-1);
    }
`