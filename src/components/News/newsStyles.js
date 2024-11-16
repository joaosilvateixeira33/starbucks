import styled from "styled-components";

export const NewsContainer = styled.section`  
    background-color: var(--brand-color-3);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 87.9vh;
    color: var(--grey-color-2);
`

export const NewsTextContent = styled.div`
    width: 55%;
    line-height: 100px;
`

export const Title = styled.h3`
    font-family: var(--font-title);
    font-weight: 700;
    font-size: 24px;
`

export const Subtitle = styled.h2`
    font-family: var(--font-general);
    font-weight: 400;
    font-size: 64px;
`

export const Information = styled.p`
    width: 65%;
    font-weight: 400;
    font-size: 34px;
    line-height: 36px;
`