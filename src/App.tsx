import React from 'react'
import styled from 'styled-components'
import { media } from './components/breakpoints'

// Components
import MenuCanvas from './components/MenuCanvas'
import Sidebar from './components/Sidebar'

// Constants
import { MENU_ITEMS, INSTRUCTIONS } from './constants'

// Interfaces
interface IAnswer {
    answered: boolean;
    name: string;
    correct: boolean;
    message: string;
}

interface IFood {
    name: string;
    correct: boolean;
    message: string;
}

function App() {

	let data = MENU_ITEMS

    // State
    const [ answer, setAnswer ] = React.useState<IAnswer>({
        answered: false,
        name: '',
        correct: false,
        message: ''
    })

    // Handlers
    const onAnswer = (food: IFood) => {
        setAnswer(prev => ({
            ...prev,
            answered: true,
            name: food.name,
            correct: food.correct,
            message: food.message
        }))
	}
	
	const onResetAnswer = () => {
		setAnswer(prev => ({
			...prev,
            answered: false,
			name: '',
			correct: false,
			message: ''
        }))
	}

	return (
		<Wrapper>
			<StyledGameContainer>
				<MenuCanvas data={data} onAnswer={onAnswer} onResetAnswer={onResetAnswer} answer={answer} />
				<Sidebar answer={answer} instructions={INSTRUCTIONS} onResetAnswer={onResetAnswer} />
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
