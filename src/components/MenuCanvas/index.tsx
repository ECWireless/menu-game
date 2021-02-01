import React from 'react'

// Components
import {
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

const MenuCanvas: React.FC<any> = () => {

    
    return (
        <StyledMenuCanvasContainer>
            <StyledPhoto />
            <StyledSection1>
                Item
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
