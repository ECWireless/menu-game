import styled, { css } from 'styled-components';
import { media } from './breakpoints';

interface ISpacer {
    size?: string;
}

const Spacer = styled.div<ISpacer>`
    min-height: 100px;
    box-sizing: border-box;

    ${props => props.size === 'sm' && css`
        min-height: 20px;

        ${media.xs`
            min-height: 25px;
        `}
    `}

    ${props => props.size === 'md' && css`
        min-height: 25px;

        ${media.xs`
            min-height: 50px;
        `}
    `}

    ${props => props.size === 'lg' && css`
        min-height: 75px;

        ${media.xs`
            min-height: 100px;
        `}
    `}
`;

export default Spacer;
