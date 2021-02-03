import styled, { css } from 'styled-components'
import { media } from '../../../components/breakpoints'
import { colors } from '../../../components/theme'

interface IFoodName {
    active: boolean;
    correct: boolean;
}

export const FoodName = styled.p<IFoodName>`
    font-size: 10px;
    font-weight: bold;
    margin: 0 0 .5em;
    padding: 0;
    transition: all .3s ease;

    &:hover {
        color: ${colors.blue};
        cursor: pointer;
    }

    ${media.md`
        font-size: 12px;
        margin: 0 0 .5em;
    `}

    ${media.lg`
        font-size: 12px;
        margin: 0 0 .8em;
    `}

    ${media.xl`
        font-size: 14px;
        margin: 0 0 1em;
    `}

    ${props => (props.active && props.correct) && css`
        color: ${colors.green};
    `}

    ${props => (props.active && !props.correct) && css`
        color: ${colors.red};
    `}
`

export const StyledMenuCanvasContainer = styled.div`
    border-radius: 15px 0 0 15px;
    border: 2px solid ${colors.blue};
    display: grid;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
	grid-template-columns: 1fr 1fr;
    grid-template-rows: 7rem 1fr 1fr 1fr 3rem;
    overflow: hidden;
    position: relative;

    ${media.md`
        grid-template-rows: 9rem 1fr 1fr 1fr 5rem;
    `}

    ${media.lg`
        grid-template-rows: 11.5rem 1fr 1fr 1fr 6rem;
    `}

    ${media.xl`
        grid-template-rows: 14rem 1fr 1fr 1fr 7rem;
    `}
`

export const StyledPhoto = styled.div`
    background-image: url('/static/Italian_Menu.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    height: 100%;
    width: 100%;
    z-index: 0;
`

export const StyledSection1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding-left: 5rem;
    z-index: 9;

    ${media.md`
        padding-left: 6.5rem;
    `}

    ${media.lg`
        padding-left: 8rem;
    `}

    ${media.xl`
        padding-left: 10rem;
    `}
`

export const StyledSection2 = styled.div`
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    padding-left: 5rem;
    z-index: 9;

    ${media.md`
        padding-left: 6.5rem;
    `}

    ${media.lg`
        padding-left: 8rem;
    `}

    ${media.xl`
        padding-left: 10rem;
    `}
`

export const StyledSection3 = styled.div`
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    padding-left: 5rem;
    z-index: 9;

    ${media.md`
        padding-left: 6.5rem;
    `}

    ${media.lg`
        padding-left: 8rem;
    `}

    ${media.xl`
        padding-left: 10rem;
    `}
`

export const StyledSection4 = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding-left: 5rem;
    z-index: 9;

    ${media.md`
        padding-left: 6.5rem;
    `}

    ${media.lg`
        padding-left: 8rem;
    `}

    ${media.xl`
        padding-left: 10rem;
    `}
`

export const StyledSection5 = styled.div`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    padding-left: 5rem;
    z-index: 9;

    ${media.md`
        padding-left: 6.5rem;
    `}

    ${media.lg`
        padding-left: 8rem;
    `}

    ${media.xl`
        padding-left: 10rem;
    `}
`

export const StyledSection6 = styled.div`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    padding-left: 5rem;
    z-index: 9;

    ${media.md`
        padding-left: 6.5rem;
    `}

    ${media.lg`
        padding-left: 8rem;
    `}

    ${media.xl`
        padding-left: 10rem;
    `}
`
