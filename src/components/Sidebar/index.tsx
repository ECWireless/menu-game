import React from 'react'

// Components
import {
    StyledSidebar,
    StyledFeedbackContainer,
} from './components'
import { ResetPlayButton } from '../Buttons/ResetPlayButton'
import { H1, P1 } from '../Typography'
import { colors } from '../theme'

const Sidebar: React.FC<any> = ({
    answer,
    instructions,
    onResetAnswer
}) => {


    return (
        <StyledSidebar>
            <ResetPlayButton onClick={() => onResetAnswer('all')}>Reset and Play Again</ResetPlayButton>
            {!answer.displayMessage
            ? (
                <>
                    <StyledFeedbackContainer>
                        <H1 color={colors.black} bold={'true'}>Instructions</H1>
                    </StyledFeedbackContainer>
                    {instructions.map((instruction: string, index: number) => {
                        return (
                            <P1 key={index}>{instruction}</P1>
                        )
                    })}
                </>
            )
            :(
                <>
                    <StyledFeedbackContainer>
                        <H1 color={answer.recentCorrect ? colors.green : colors.red} bold={'true'}>Feedback</H1>
                    </StyledFeedbackContainer>
                    {answer.recentMessage.map((message: string, index: number) => {
                        return (
                            <P1 key={index}>{message}</P1>
                        )
                    })}
                </>
            )}
        </StyledSidebar>
    )
}

export default Sidebar
