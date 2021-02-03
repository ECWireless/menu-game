import React from 'react'
import styled from 'styled-components'
import { media } from './components/breakpoints'

// Components
import MenuCanvas from './components/MenuCanvas'
import Sidebar from './components/Sidebar'

// // Interfaces
// import { ICanvas, ISelectedItemData } from './components/faces'

// // Constants
// import { BREAKFAST_ITEMS, LINNER_ITEMS } from './constants'

function App() {

	return (
		<Wrapper>
			<StyledGameContainer>
				<MenuCanvas />
				<Sidebar />
			</StyledGameContainer>
		</Wrapper>
	);
}

export default App;

const StyledGameContainer = styled.div`
	border-radius: 15px;
	box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.4);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: grid;
	grid-template-columns: 52rem 22rem;
	grid-template-rows: 38rem;
    overflow: hidden;
	position: absolute;

	${media.md`
		grid-template-columns: 66rem 30rem;
		grid-template-rows: 48rem;
	`}

	${media.lg`
		grid-template-columns: 82.5rem 35rem;
		grid-template-rows: 60.1rem;
	`}

	${media.xl`
		grid-template-columns: 100rem 40rem;
		grid-template-rows: 72.8rem;
	`}
`

const Wrapper = styled.div`
	background: linear-gradient(45deg, #7db1e3 12.45%, #fff 96.55%);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    z-index: 0;
`;
