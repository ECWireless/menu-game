import React from 'react'
import styled from 'styled-components'
import { media } from './breakpoints'
import { colors, shadows } from './theme'

const IndicatorIcon: React.FC<any> = ({
    answered,
    correct
}) => {
    return (
        <>
        {answered && <StyledIndicatorContainer>
            {correct ? <StyledSvg viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.9375 7.25L21.75 34.4375L9.0625 21.75L0 30.8125L21.75 52.5625L58 16.3125L48.9375 7.25Z" fill="#34A548"/>
            </StyledSvg>
            : <StyledSvgWrong viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M44.5895 36.1521L30.9376 22.5002L44.5895 8.8483C44.7372 8.70065 44.8426 8.52909 44.9115 8.34627C45.0986 7.84565 44.9917 7.26205 44.5895 6.85987L38.1404 0.410806C37.7383 0.00861827 37.1533 -0.0968504 36.654 0.0887745C36.4712 0.156275 36.2997 0.26315 36.152 0.4094L22.5001 14.0613L8.84826 0.4094C8.70061 0.26315 8.52904 0.156275 8.34623 0.0887745C7.84561 -0.0982567 7.26201 0.00861827 6.85982 0.410806L0.410763 6.85987C0.00857511 7.26205 -0.0968936 7.84705 0.0887314 8.34627C0.157638 8.52909 0.263106 8.70065 0.410763 8.8483L14.0626 22.5002L0.410763 36.1521C0.264513 36.2997 0.157638 36.4713 0.0887314 36.6541C-0.0982999 37.1533 0.00857511 37.7383 0.410763 38.1405L6.85982 44.5896C7.26201 44.9917 7.84701 45.0972 8.34623 44.9116C8.52904 44.8427 8.70061 44.7372 8.84826 44.5896L22.5001 30.9377L36.152 44.5896C36.2997 44.7372 36.4712 44.8427 36.654 44.9116C37.1547 45.0986 37.7383 44.9917 38.1404 44.5896L44.5895 38.1405C44.9917 37.7383 45.0986 37.1533 44.9115 36.6541C44.8426 36.4713 44.7372 36.2997 44.5895 36.1521Z" fill="#E90505"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="45" height="45" fill="white"/>
                </clipPath>
                </defs>
            </StyledSvgWrong>}
        </StyledIndicatorContainer>}
        </>
    )
}

export default IndicatorIcon

const StyledIndicatorContainer = styled.div`
    align-items: center;
    background: ${colors.white};
    border: 2px solid ${colors.white};
    border-radius: 50%;
    box-shadow: ${shadows.button};
    display: flex;
    height: 1.2rem;
    justify-content: center;
    margin-right: 3rem;
    transition: all .3s ease;
    width: 1.2rem;
    z-index: 99;

    &:hover {
        border: 2px solid ${colors.green};
    }

    ${media.md`
        margin-right: 4rem;
        height: 1.5rem;
        width: 1.5rem;
    `}

    ${media.lg`
        height: 1.8rem;
        width: 1.8rem;
    `}

    ${media.xl`
        height: 2rem;
        width: 2rem;
    `}
`

const StyledSvg = styled.svg`
    height: 1rem;
    width: 1rem;

    ${media.md`
        height: .9rem;
        width: .9rem;
    `}

    ${media.lg`
        height: 1rem;
        width: 1rem;
    `}

    ${media.xl`
        height: 1.2rem;
        width: 1.2rem;
    `}
`

const StyledSvgWrong = styled.svg`
    height: .6rem;
    width: .6rem;

    ${media.md`
        height: .7rem;
        width: .7rem;
    `}

    ${media.lg`
        height: .8rem;
        width: .8rem;
    `}

    ${media.xl`
        height: 1rem;
        width: 1rem;
    `}
`
