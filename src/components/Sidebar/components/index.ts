import styled from 'styled-components'
import { media } from '../../breakpoints'
import { colors } from '../../../components/theme'

export { IndicatorIcon } from './IndicatorIcon'

export const StyledCongratsContainer = styled.div`
    border: 2px solid ${colors.green};
    padding: 1rem;
    margin-top: 4rem;
    width: 100%;
`

export const StyledSidebar = styled.div`
    background: #FFF;
    border: 2px solid ${colors.blue};
    border-radius: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
	grid-column: 2 / 2;
    grid-row: 1 / 2;
    overflow: scroll;
    padding: 3rem;
    position: relative;

    ${media.md`
        padding: 4rem;
    `}

    ${media.lg`
        padding: 4rem 5rem;
    `}
`

export const StyledFeedbackContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    width: 100%;
`
