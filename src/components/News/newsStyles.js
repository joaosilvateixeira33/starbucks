import styled from "styled-components";

export const NewsContainer = styled.section`  
    background-color: var(--brand-color-3);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--grey-color-2);

    @media (max-width: 480px){
       flex-direction: column;
    }
`

export const ImgToast = styled.img`
    @media (max-width: 480px){
        width: 100%;
    }
`

export const NewsTextContent = styled.div`
    width: 55%;
    line-height: 100px;

    @media (max-width: 480px){
        width: 91%;
    }
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

    @media (max-width: 480px){
        font-size: 45px;
    }
`

export const Information = styled.p`
    width: 65%;
    font-weight: 400;
    font-size: 34px;
    line-height: 36px;
    text-align: justify;

    @media (max-width: 480px){
        width: 100%;
    }
`