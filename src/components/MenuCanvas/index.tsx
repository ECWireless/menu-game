import React from 'react'

// Components
import {
    FoodName,
    StyledMenuCanvasContainer,
    StyledPhoto,
    StyledSection1,
    StyledSection2,
    StyledSection3,
    StyledSection4,
    StyledSection5,
    StyledSection6,
} from './components'
import { Flex } from '../Containers'
import IndicatorIcon from '../IndicatorIcon'

// Data
import { MENU_ITEMS } from '../../constants/'

// Interfaces
interface IAnswer {
    answered: boolean;
    name: string;
    correct: boolean;
    message: string;
}

interface IFood {
    name: string;
    correct: boolean;
    message: string;
}

const MenuCanvas: React.FC<any> = () => {
    let data = MENU_ITEMS

    // State
    const [ answer, setAnswer ] = React.useState<IAnswer>({
        answered: false,
        name: '',
        correct: false,
        message: ''
    })

    // Handlers
    const onAnswer = (food: IFood) => {
        setAnswer(prev => ({
            ...prev,
            answered: true,
            name: food.name,
            correct: food.correct,
            message: food.message
        }))
    }
    
    return (
        <StyledMenuCanvasContainer>
            <StyledPhoto />
            <StyledSection1>
                {data.section1.map((food, index) => {
                    return (
                        <Flex key={index} justify={'space-between'} align={'flex-start'}>
                            <FoodName
                                active={answer.name === food.name ? answer.answered : false}
                                correct={answer.name === food.name ? answer.correct : false}
                                onClick={() => onAnswer(food)}>
                                {food.name}
                            </FoodName>
                            <IndicatorIcon
                                answered={answer.name === food.name ? answer.answered : false}
                                correct={answer.name === food.name ? answer.correct : false}
                            />
                        </Flex>
                    )
                })}
            </StyledSection1>
            <StyledSection2>
                Item
            </StyledSection2>
            <StyledSection3>
                Item
            </StyledSection3>
            <StyledSection4>
                Item
            </StyledSection4>
            <StyledSection5>
                Item
            </StyledSection5>
            <StyledSection6>
                Item
            </StyledSection6>
        </StyledMenuCanvasContainer>
    )
}

export default MenuCanvas
