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

const MenuCanvas: React.FC<any> = ({
    answer,
    data,
    onAnswer,
    onResetAnswer,
}) => {
    
    return (
        <StyledMenuCanvasContainer>
            <StyledPhoto />
            <StyledSection1>
                {data.section1.map((food: { name: React.ReactNode }, index: string | number | null | undefined) => {
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
                                onResetAnswer={onResetAnswer}
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
