import {useState} from 'react'

import './index.css'

const RandomNumberGeneratorFunctional = () => {
  const [randomNumber, setRandomNumber] = useState(0)
  const handleGenerate = () => {
    const rand = Math.ceil(Math.random() * 100)
    setRandomNumber(rand)
  }

  return (
    <div className="app-container">
      <div className="random-number-generator-container">
        <h1 className="heading">Random Number</h1>
        <p className="description">
          Generate a random number in the range of 0 to 100
        </p>
        <button
          onClick={handleGenerate}
          type="button"
          className="generate-button"
        >
          Generate
        </button>
        <p className="random-number">{randomNumber}</p>
      </div>
    </div>
  )
}

export default RandomNumberGeneratorFunctional
