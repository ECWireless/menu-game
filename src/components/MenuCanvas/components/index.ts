import styled from 'styled-components'
import { colors } from '../../../components/theme'

export const StyledMenuCanvasContainer = styled.div`
    border-radius: 15px 0 0 15px;
    border: 2px solid ${colors.blue};
    display: grid;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
	grid-template-columns: 1fr 1fr;
    grid-template-rows: 11.5rem 1fr 1fr 1fr 6rem;
    overflow: hidden;
    position: relative;
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
    padding-left: 8rem;
    z-index: 9;
`

export const StyledSection2 = styled.div`
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    padding-left: 8rem;
    z-index: 9;
`

export const StyledSection3 = styled.div`
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    padding-left: 8rem;
    z-index: 9;
`

export const StyledSection4 = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding-left: 8rem;
    z-index: 9;
`

export const StyledSection5 = styled.div`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    padding-left: 8rem;
    z-index: 9;
`

export const StyledSection6 = styled.div`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    padding-left: 8rem;
    z-index: 9;
`
