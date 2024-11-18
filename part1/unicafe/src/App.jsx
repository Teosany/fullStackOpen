import { useState } from 'react'

const Title = ({text}) => <h2>{text}</h2>

const Button = ({handleClick, name}) => (
    <button onClick={handleClick}>
        {name}
    </button>
)

const Stat = ({stat, nb}) => <p>{stat} {nb}</p>

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Title text={'give feedback'} />
            <Button name={'good'} handleClick={() => setGood(good + 1)} />
            <Button name={'neutral'} handleClick={() => setNeutral(neutral + 1)} />
            <Button name={'bad'} handleClick={() => setBad(bad + 1)} />
            <Title text={'statistics'} />
            <Stat stat={'good'} nb={good} />
            <Stat stat={'neutral'} nb={neutral} />
            <Stat stat={'bad'} nb={bad} />
        </div>
    )
}

export default App
