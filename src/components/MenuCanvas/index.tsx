import React from 'react'
import styled from 'styled-components'

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
// import IndicatorIcon from '../IndicatorIcon'

// Data
import { MENU_ITEMS } from '../../constants/'

const MenuCanvas: React.FC<any> = () => {
    let data = MENU_ITEMS
    
    return (
        <StyledMenuCanvasContainer>
            <StyledPhoto />
            <StyledSection1>
                {data.section1.map((food, index) => {
                    return (
                        <FoodName key={index}>{food.name}</FoodName>
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
