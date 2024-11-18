import {useState} from 'react'

const Title = ({text}) => <h2>{text}</h2>

const Button = ({handleClick, name}) => (
    <button onClick={handleClick}>
        {name}
    </button>
)

const Stat = ({stat, nb}) => <div>{stat} {nb}</div>

const Statistics = ({good, neutral, bad, all}) => {
    if (all > 0) {
        return (
            <div>
                <Stat stat={'good'} nb={good}/>
                <Stat stat={'neutral'} nb={neutral}/>
                <Stat stat={'bad'} nb={bad}/>
                <Stat stat={'all'} nb={all}/>
                <Stat stat={'average'} nb={all > 0 ? (good - bad) / all : 0}/>
                <Stat stat={'positive'} nb={good > 0 ? ((good / all) * 100) + ' %' : '0 %'}/>
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
            <Button name={'good'} handleClick={() => setGood(good + 1)}/>
            <Button name={'neutral'} handleClick={() => setNeutral(neutral + 1)}/>
            <Button name={'bad'} handleClick={() => setBad(bad + 1)}/>
            <Title text={'statistics'}/>
            <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
        </div>
    )
}

export default App
