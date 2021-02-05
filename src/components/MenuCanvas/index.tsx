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
    menu,
    onAnswer,
    onResetAnswer,
}) => {
    
    return (
        <StyledMenuCanvasContainer>
            <StyledPhoto menu={menu} />
            <StyledSection1>
                {data.section1.map((food: any, index: number) => {
                    return (
                        <Section
                            key={index}
                            answer={answer.section1}
                            food={food}
                            index={index}
                            onAnswer={onAnswer}
                            onResetAnswer={onResetAnswer}
                            section={'section1'}
                        />
                    )
                })}
            </StyledSection1>
            <StyledSection2>
                {data.section2.map((food: any, index: number) => {
                    return (
                        <Section
                            key={index}
                            answer={answer.section2}
                            food={food}
                            index={index}
                            onAnswer={onAnswer}
                            onResetAnswer={onResetAnswer}
                            section={'section2'}
                        />
                    )
                })}
            </StyledSection2>
            <StyledSection3>
                {data.section3.map((food: any, index: number) => {
                    return (
                        <Section
                            key={index}
                            answer={answer.section3}
                            food={food}
                            index={index}
                            onAnswer={onAnswer}
                            onResetAnswer={onResetAnswer}
                            section={'section3'}
                        />
                    )
                })}
            </StyledSection3>
            <StyledSection4>
                {data.section4.map((food: any, index: number) => {
                    return (
                        <Section
                            key={index}
                            answer={answer.section4}
                            food={food}
                            index={index}
                            onAnswer={onAnswer}
                            onResetAnswer={onResetAnswer}
                            section={'section4'}
                        />
                    )
                })}
            </StyledSection4>
            <StyledSection5>
                {data.section5.map((food: any, index: number) => {
                    return (
                        <Section
                            key={index}
                            answer={answer.section5}
                            food={food}
                            index={index}
                            onAnswer={onAnswer}
                            onResetAnswer={onResetAnswer}
                            section={'section5'}
                        />
                    )
                })}
            </StyledSection5>
            <StyledSection6>
                {data.section6.map((food: any, index: number) => {
                    return (
                        <Section
                            key={index}
                            answer={answer.section6}
                            food={food}
                            index={index}
                            onAnswer={onAnswer}
                            onResetAnswer={onResetAnswer}
                            section={'section6'}
                        />
                    )
                })}
            </StyledSection6>
        </StyledMenuCanvasContainer>
    )
}

interface ISection {
    answer: any;
    food: any;
    index: number;
    onAnswer: any;
    onResetAnswer: any;
    section: string;
}

const Section: React.FC<ISection> = ({
    answer,
    food,
    onAnswer,
    onResetAnswer,
    section,
}) => {
    return (
        <Flex justify={'space-between'} align={'flex-start'}>
            <FoodName
                active={answer.name === food.name ? answer.answered : false}
                correct={answer.name === food.name ? answer.correct : false}
                onClick={() => onAnswer(section, food)}>
                {food.name}
            </FoodName>
            <IndicatorIcon
                answered={answer.name === food.name ? answer.answered : false}
                correct={answer.name === food.name ? answer.correct : false}
                onResetAnswer={() => onResetAnswer(section)}
            />
        </Flex>
    )
}

export default MenuCanvas
