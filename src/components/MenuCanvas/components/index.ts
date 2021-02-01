import styled from 'styled-components'
import { colors } from '../../../components/theme'

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

export const StyledMenuCanvasContainer = styled.div`
    border-radius: 15px 0 0 15px;
    border: 2px solid ${colors.blue};
    display: grid;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
	grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
    position: relative;
`
