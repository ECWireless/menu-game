import React from 'react'
import styled from 'styled-components'
import { media } from './components/breakpoints'

// Components
import MenuCanvas from './components/MenuCanvas'
import Sidebar from './components/Sidebar'

// Constants
import { MENU_ITEMS, INSTRUCTIONS } from './constants'

// Interfaces
interface ISection {
	answered: boolean;
    name: string;
    correct: boolean;
}
interface IAnswer {
	recentMessage: string;
	recentCorrect: boolean;
	displayMessage: boolean;
	section1: ISection;
	section2: ISection;
	section3: ISection;
	section4: ISection;
	section5: ISection;
	section6: ISection;
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
		recentMessage: '',
		recentCorrect: false,
		displayMessage: false,
		section1: {
			answered: false,
			name: '',
			correct: false,
		},
		section2: {
			answered: false,
			name: '',
			correct: false,
		},
		section3: {
			answered: false,
			name: '',
			correct: false,
		},
		section4: {
			answered: false,
			name: '',
			correct: false,
		},
		section5: {
			answered: false,
			name: '',
			correct: false,
		},
		section6: {
			answered: false,
			name: '',
			correct: false,
		}
    })

    // Handlers
    const onAnswer = (type: string, food: IFood) => {
		switch (type) {
			case 'section1':
				setAnswer(prev => ({
					...prev,
					section1: {
						answered: true,
						name: food.name,
						correct: food.correct,
					}
				}))
				break;
			case 'section2':
				setAnswer(prev => ({
					...prev,
					section2: {
						answered: true,
						name: food.name,
						correct: food.correct,
					}
				}))
				break;
			case 'section3':
				setAnswer(prev => ({
					...prev,
					section3: {
						answered: true,
						name: food.name,
						correct: food.correct,
					}
				}))
				break;
			case 'section4':
				setAnswer(prev => ({
					...prev,
					section4: {
						answered: true,
						name: food.name,
						correct: food.correct,
					}
				}))
				break;
			case 'section5':
				setAnswer(prev => ({
					...prev,
					section5: {
						answered: true,
						name: food.name,
						correct: food.correct,
					}
				}))
				break;
			case 'section6':
				setAnswer(prev => ({
					...prev,
					section6: {
						answered: true,
						name: food.name,
						correct: food.correct,
					}
				}))
				break;
			default:
				break;
		}

		setAnswer(prev => ({
			...prev,
			recentMessage: food.message,
			recentCorrect: food.correct,
			displayMessage: true,
		}))
	}
	
	const onResetAnswer = (section: string) => {
		switch (section) {
			case 'all':
				setAnswer(prev => ({
					...prev,
					section1: {
						answered: false,
						name: '',
						correct: false,
					},
					section2: {
						answered: false,
						name: '',
						correct: false,
					},
					section3: {
						answered: false,
						name: '',
						correct: false,
					},
					section4: {
						answered: false,
						name: '',
						correct: false,
					},
					section5: {
						answered: false,
						name: '',
						correct: false,
					},
					section6: {
						answered: false,
						name: '',
						correct: false,
					},
				}))
				break;
			case 'section1':
				setAnswer(prev => ({
					...prev,
					section1: {
						answered: false,
						name: '',
						correct: false,
					},
				}))
				break;
			case 'section2':
				setAnswer(prev => ({
					...prev,
					section2: {
						answered: false,
						name: '',
						correct: false,
					},
				}))
				break;
			case 'section3':
				setAnswer(prev => ({
					...prev,
					section3: {
						answered: false,
						name: '',
						correct: false,
					},
				}))
				break;
			case 'section4':
				setAnswer(prev => ({
					...prev,
					section4: {
						answered: false,
						name: '',
						correct: false,
					},
				}))
				break;
			case 'section5':
				setAnswer(prev => ({
					...prev,
					section5: {
						answered: false,
						name: '',
						correct: false,
					},
				}))
				break;
			case 'section6':
				setAnswer(prev => ({
					...prev,
					section6: {
						answered: false,
						name: '',
						correct: false,
					},
				}))
				break;
		
			default:
				break;
		}

		setAnswer(prev => ({
			...prev,
			recentMessage: '',
			recentCorrect: false,
			displayMessage: false,
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
