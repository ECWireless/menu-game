import React from 'react'

// Components
import {
    IndicatorIcon,
    StyledCongratsContainer,
    StyledSidebar,
    StyledFeedbackContainer,
} from './components'
import { SelectionButton } from '../Buttons/SelectionButton'
import { ResetPlayButton } from '../Buttons/ResetPlayButton'
import Spacer from '../Spacer'
import { H1, H2, P1 } from '../Typography'
import { colors } from '../theme'

const Sidebar: React.FC<any> = ({
    answer,
    data,
    instructions,
    menu,
    onResetAnswer,
    setMenu,
}) => {

    // State
    const [ congrats, setCongrats ] = React.useState(false)

    // Effect
    React.useEffect(() => {
        if (
            answer.section1.correct
            && answer.section2.correct
            && answer.section3.correct
            && answer.section4.correct
            && answer.section5.correct
            && answer.section6.correct
        ) {
            setCongrats(true)
        } else {
            setCongrats(false)
        }
    }, [answer])

    return (
        <StyledSidebar>
            <ResetPlayButton onClick={() => onResetAnswer('all')}>Reset and Play Again</ResetPlayButton>
            <Spacer size={'sm'} />
            <H2 bold={'true'} color={colors.black}>Pick a menu:</H2>
            <br />            
            <SelectionButton setMenu={setMenu} menu={menu} />
            {congrats && (
                <StyledCongratsContainer>
                    <P1>{data.congrats}</P1>
                </StyledCongratsContainer>
            )}
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
                        <IndicatorIcon answered={answer.displayMessage} correct={answer.recentCorrect} />
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
