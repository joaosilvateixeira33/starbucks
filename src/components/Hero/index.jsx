import { useState } from 'react';
import { Button } from "../Button";
import { 
    HeroContainer, 
    Subtitle, 
    TextContent, 
    Title, 
    Strong, 
    Information,
} from "./HeroStyles";
import { CupsList } from "../CupsList/index.jsx";
import { CupComponent } from '../Cup/index.jsx';

export const HeroSection = () => {
    const [selectedCupImage, setSelectedCupImage] = useState(null);
    const [selectedCircleImage, setSelectedCircleImage] = useState(null);

    const handleSelect = (cupImage, circleImage) => {
        setSelectedCupImage(cupImage);
        setSelectedCircleImage(circleImage);
    };

    return (
        <HeroContainer>
            <TextContent>
                <Title>Mais que Café</Title>
                <Subtitle>Isso é <Strong>Starbucks</Strong></Subtitle>
                <Information>
                    A Starbucks oferece uma variedade de cafés de alta qualidade. 
                    Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso.
                    Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
                </Information>
                <Button />
            </TextContent>
            <CupComponent selectedCupImage={selectedCupImage} selectedCircleImage={selectedCircleImage} />
            <CupsList onSelect={handleSelect} />
        </HeroContainer>
    );
};
