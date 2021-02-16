import React from 'react'
import styled from 'styled-components'
import { media } from './components/breakpoints'
import { colors } from './components/theme'

// Components
import MenuCanvas from './components/MenuCanvas'
import Sidebar from './components/Sidebar'
import { H1 } from './components/Typography'

// Constants
import { ITALIEN_MENU, AMERICAN_MENU, INDO_CHINESE_MENU, INSTRUCTIONS } from './constants'

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

    // State
	const [ data, setData ] = React.useState(ITALIEN_MENU)
	const [ menu, setMenu ] = React.useState<string | null>('italian')
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

	// Effect
	React.useEffect(() => {
		if (menu === 'italian') {
			setData(ITALIEN_MENU)
		} else if (menu === 'american') {
			setData(AMERICAN_MENU)
		} else if (menu === 'indo-chinese') {
			setData(INDO_CHINESE_MENU)
		}

	}, [menu])

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
				<MenuCanvas menu={menu} data={data} onAnswer={onAnswer} onResetAnswer={onResetAnswer} answer={answer} />
				<Sidebar
					menu={menu} setMenu={setMenu}
					answer={answer} data={data}
					instructions={INSTRUCTIONS} onResetAnswer={onResetAnswer}
				/>
			</StyledGameContainer>
			<StyledGameContainerMobile>
				<H1>You must use a desktop to play this game.</H1>
			</StyledGameContainerMobile>
		</Wrapper>
	);
}

export default App;

const StyledGameContainerMobile = styled.div`
	align-items: center;
	background: #fff;
	border: 2px solid ${colors.blue};
	border-radius: 15px;
	display: flex;
	height: 40vh;
	justify-content: center;
	margin: 2rem auto;
	padding: 1rem;
	text-align: center;
	width: 90%;

	${media.md`
		display: none;
	`}
`

const StyledGameContainer = styled.div`
	border-radius: 15px;
	box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.4);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: none;
	grid-template-columns: 52rem 22rem;
	grid-template-rows: 38rem;
    overflow: hidden;
	position: absolute;

	${media.md`
		display: grid;
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
