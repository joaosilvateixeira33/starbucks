import { Button } from "../Button";
import roastImage from '../../assets/nivel-torra.png';
import { Information, NewsContainer, NewsTextContent, Subtitle, Title } from "./newsStyles";

export const NewsSection = () =>{
    return (
        <NewsContainer>
            <NewsTextContent>
                <Title>PREPARAÇÃO</Title>
                <Subtitle>Níveis de torra</Subtitle>
                <Information>
                    Qual a torra que prefere? Starbucks® 
                    Torra Clara, Torra Média ou Torra Escura? 
                    Estas sãos as torras que fazem parte dos níveis de torra Starbucks®
                </Information>
                <Button/>
            </NewsTextContent>
            <img src={roastImage} alt="Imagem torra"/>
        </NewsContainer>
    )
}