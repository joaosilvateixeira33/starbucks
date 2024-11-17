import styled from "styled-components"

const ButtonAbout = styled.button`
    margin-top: 20px;
    padding: 20px;
    border-radius: 30px;
    width: 15vw;
    border: none;
    background-color: var(--brand-color-1);
    color: var(--grey-color-2);
    font-family: var(--font-title);
    font-weight: 700;
    font-size: 20px;

    @media (max-width: 480px){
        font-size: 15px;
        width: 36vw;
    }
`

export const Button = () =>{
    return(
        <ButtonAbout>SAIBA MAIS</ButtonAbout>
    )
}