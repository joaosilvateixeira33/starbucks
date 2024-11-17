import { CupsContainer, CupsContent, CupsItems, CupsItemsImage } from "./CupsListStyles"
import cupIconOrange from '../../assets/icons/cup-icon-orange.png';
import cupIconRed from '../../assets/icons/cup-icon-red.png';
import cupIconYellow from '../../assets/icons/cup-icon-yellow.png';

import cupOrange from '../../assets/orange-cup.png';
import cupRed from '../../assets/red-cup.png';
import cupYellow from '../../assets/yellow-cup.png';

import circleGreen from '../../assets/circle-green.png'
import circleRed from '../../assets/circle-red.png'
import circleYellow from '../../assets/circle-yellow.png'

const cupImages = [cupOrange, cupRed, cupYellow]; 
const circleImages = [circleGreen, circleRed, circleYellow];

// eslint-disable-next-line react/prop-types
export const CupsList = ({ onSelect }) => { 
    return ( 
        <CupsContainer> 
            <CupsContent>
                <CupsItems onClick={() => onSelect(cupImages[0], circleImages[0])}> <CupsItemsImage src={cupIconOrange} alt="cup orange ilustrate" /> </CupsItems> 
                <CupsItems onClick={() => onSelect(cupImages[1], circleImages[1])}> <CupsItemsImage src={cupIconRed} alt="cup red ilustrate" />  </CupsItems> 
                <CupsItems onClick={() => onSelect(cupImages[2], circleImages[2])}> <CupsItemsImage src={cupIconYellow} alt="cup yellow ilustrate" />  </CupsItems> 
            </CupsContent> 
        </CupsContainer> 
    ); 
};

