const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0].name} ex={props.parts[0].exs}/>
            <Part part={props.parts[1].name} ex={props.parts[1].exs}/>
            <Part part={props.parts[2].name} ex={props.parts[2].exs}/>
        </>
    )
}
const Total = (props) => {
    return (
        <p>Number of exercises {props.parts[0].exs + props.parts[1].exs + props.parts[2].exs}</p>
    )
}
const Part = (props) => {
    return (
        <p>{props.part} {props.ex}</p>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exs: 10
        },
        {
            name: 'Using props to pass data',
            exs: 7
        },
        {
            name: 'State of a component',
            exs: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App