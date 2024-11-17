import styled from "styled-components";

export const CupsContainer = styled.div`
    position: absolute;
    left: 35%;
    top: 84%;
    padding: 10px;

    @media (max-width: 480px){
        position: absolute;
        top: 110vh;
        right: 10vh;
        margin: 25px 0;
    }
`

export const CupsContent = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 480px){
        justify-content: center;
    }
`

export const CupsItems = styled.li`
    margin-left: 32px;
    list-style: none;

    &:hover { 
        transform: scale(1.1); 
        cursor: pointer;
    }

    @media (max-width: 480px){
        margin-left: 0;
    }
`   

export const CupsItemsImage = styled.img`
    @media (max-width: 480px){
        height: 12vh;
    } 
`