import {useState} from 'react'

const Title = ({text}) => <h2>{text}</h2>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const StatisticLine = ({text, value}) => <div>{text} {value}</div>

const Statistics = ({good, neutral, bad, all}) => {
    if (all > 0) {
        return (
            <div>
                <StatisticLine text={'good'} value={good}/>
                <StatisticLine text={'neutral'} value={neutral}/>
                <StatisticLine text={'bad'} value={bad}/>
                <StatisticLine text={'all'} value={all}/>
                <StatisticLine text={'average'} value={(good - bad) / all}/>
                <StatisticLine text={'positive'} value={((good / all) * 100) + ' %'}/>
            </div>
        )
    }
    return <div>No feedback given</div>
}

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + neutral + bad

    return (
        <div>
            <Title text={'give feedback'}/>
            <Button text={'good'} handleClick={() => setGood(good + 1)}/>
            <Button text={'neutral'} handleClick={() => setNeutral(neutral + 1)}/>
            <Button text={'bad'} handleClick={() => setBad(bad + 1)}/>
            <Title text={'statistics'}/>
            <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
        </div>
    )
}

export default App
