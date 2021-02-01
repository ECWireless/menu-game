import React from 'react'

// Components
import {
    StyledSidebar,
    StyledFeedbackContainer,
} from './components'
import { ResetPlayButton } from '../Buttons/ResetPlayButton'
import { H1, P1 } from '../Typography'
import { colors } from '../theme'

const Sidebar: React.FC<any> = () => {

    return (
        <StyledSidebar>
            <ResetPlayButton>Reset and Play Again</ResetPlayButton>
            <StyledFeedbackContainer>
                <H1 color={colors.green} bold={'true'}>Feedback</H1>
            </StyledFeedbackContainer>
            <P1>Menu message.</P1>
        </StyledSidebar>
    )
}

export default Sidebar
