import styled from "styled-components";

export const HeroContainer = styled.section`
    margin: 0 180px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const TextContent = styled.div`
    margin-top: 40px;
`

export const Title = styled.h2`
    font-family: var(--font-title);
    font-weight: 400;
    font-size: 64px;
    color: var(--brand-color-2);
`

export const Subtitle = styled.h2`
    font-family: var(--font-general);
    font-weight: 400;
    font-size: 64px;
`

export const Strong = styled.span`
    font-weight: 700;
    font-size: 90px;
    color: var(--brand-color-1);
`

export const Information = styled.p`
    font-family: var(--font-general);
    font-weight: 400;
    font-size: 24px;
    color: var(--brand-color-2);
    line-height: 36px;
    width: 65%;
`