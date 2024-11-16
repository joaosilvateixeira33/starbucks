import { Button } from '../Button/index';
import starbucksOld from '../../assets/history-starbucks.png';
import { AboutContainer, AboutTextContent, Information, Subtitle, Title } from './AboutStyles';

export const AboutSection = () =>{
    return(
        <AboutContainer>
            <img src={starbucksOld} alt="starbucks old building" />
            <AboutTextContent>
                <Title>A História da</Title>
                <Subtitle>Starbucks</Subtitle>
                <Information>
                    A Starbucks nasceu em 1971, em Seattle, Washington. 
                    Três amigos – Jerry Baldwin, Zev Siegl e Gordon Bowker – 
                    apaixonados por café de qualidade, se uniram para abrir uma pequena loja no Pike Place Market. 
                    Inicialmente, eles vendiam grãos de café inteiros e equipamentos para preparo em casa, 
                    inspirados pelo amor e respeito ao café.
                </Information>
                <Button/>
            </AboutTextContent>
        </AboutContainer>
    )
}