import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    :root{
        --font-general: "Poppins", sans-serif;
        --font-title: "Inter", sans-serif;
        --grey-color-1: #1E3932;
        --grey-color-2: #FFFFFF;
        --brand-color-1: #037143;
        --brand-color-2: #000000CC;
        --brand-color-3: #1E3932;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
    }

`