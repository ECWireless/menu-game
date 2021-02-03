import styled, { css } from 'styled-components'
import { media } from './breakpoints'
import { colors } from './theme'

interface ITypography {
    bold?: string;
    color?: string;
}

export const H1 = styled.h1<ITypography>`
    font-size: 2.2rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;

    ${media.md`
        font-size: 2.8rem;
    `}
    
    ${props => props.bold === 'true' && css`
        font-weight: bold;
    `}

    ${props => props.color && css`
        color: ${props.color};
    `}
`

export const H2 = styled.h2<ITypography>`
    color: ${colors.black};
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;

    ${props => props.bold === 'true' && css`
        font-weight: bold;
    `}
`

export const P1 = styled.p`
    font-size: 1.4rem;
    line-height: 22px;

    ${media.md`
        font-size: 1.8rem;
    `}

    ${props => props.color && css`
        color: ${props.color};
    `}
`