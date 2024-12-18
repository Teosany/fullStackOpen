import {useState} from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Title = ({text}) => <h2>{text}</h2>

function App() {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const maxVotes = Math.max(...votes)
    const maxVotesIndex = votes.indexOf(maxVotes)
    const selectedVotes = votes[selected]

    const handleNext = () => {
        let value
        do {
            value = Math.floor(Math.random() * anecdotes.length)
        } while (value === selected)
        setSelected(value)
    }
    const handleVote = () => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)
    }

    return (
        <div>
            <Title text={'Anecdote of the day'}/>
            <p>
                {anecdotes[selected]}
            </p>
            <p>
                has {selectedVotes} votes
            </p>
            <div>
                <Button handleClick={handleVote} text={'vote'}></Button>
                <Button handleClick={handleNext} text={'next anecdote'}></Button>
            </div>
            <Title text={'Anecdote with most votes'}/>
            <p>
                {anecdotes[maxVotesIndex]}
            </p>
        </div>
    )
}

export default App
