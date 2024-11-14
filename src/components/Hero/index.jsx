import { Button } from "../Button"
import { 
    HeroContainer, 
    Subtitle, 
    TextContent, 
    Title, 
    Strong, 
    Information,
    Cup,
    Circle
} from "./HeroStyles"
import cupImage from '../../assets/orange-cup.png'
import circleImage from '../../assets/circle-green.png' 


export const HeroSection = () =>{
    return(
        <HeroContainer>
            <TextContent>
                <Title>Mais que Café</Title>
                <Subtitle>Isso é <Strong>Starbucks</Strong></Subtitle>
                <Information>
                    A Starbucks oferece uma variedade de cafés de alta qualidade. 
                    Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso.
                    Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
                </Information>
                <Button/>
            </TextContent>
            <Circle src={circleImage} alt="circle" />
            <Cup src={cupImage} alt="cup-image" />
            
        </HeroContainer>
    )
}