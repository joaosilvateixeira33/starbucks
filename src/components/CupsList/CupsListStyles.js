import styled from "styled-components";

export const CupsContainer = styled.div`
    position: absolute;
    left: 35%;
    top: 84%;
    padding: 10px;
`

export const CupsContent = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const CupsItems = styled.li`
    margin-left: 32px;
    list-style: none;

    &:hover { 
        transform: scale(1.1); 
        cursor: pointer;
    }
`