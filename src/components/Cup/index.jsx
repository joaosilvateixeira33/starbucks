import cupImage from '../../assets/orange-cup.png';
import circleImage from '../../assets/circle-green.png' ;
import { Circle, Cup } from './CupStyles';


// eslint-disable-next-line react/prop-types
export const CupComponent = ({ selectedCupImage, selectedCircleImage }) =>{
    return(
        <div>
            <Circle src={selectedCircleImage || circleImage} alt="circle" />
            <Cup src={selectedCupImage || cupImage} alt="cup-image" />
        </div>
    )
}