// Write your code here
import {useState} from 'react'
import {Heading} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const readLessText =
    'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'
  const [showButton, UseShowButton] = useState(false)

  const onClickButton = () => UseShowButton(prevState => !prevState)

  return (
    <div>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {showButton ? <p>{reactHooksDescription}</p> : <p>{readLessText}</p>}
      <button type="button" onClick={onClickButton}>
        {showButton ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}

export default ReadMore
