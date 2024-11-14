const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
}
const Content = (props) => {
    console.log(props)
    return (
        <>
            <Part part={props.part1} ex={props.ex1} />
            <Part part={props.part2} ex={props.ex2} />
            <Part part={props.part3} ex={props.ex3} />
        </>
    )
}
const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    )
}
const Part = (props) => {
    console.log(props)
    return (
        <p>{props.part} {props.ex}</p>
    )
}


const App = () => {
    const course = 'Half Stack application development'

    const part1 = {
        name: 'Fundamentals of React',
        exs: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exs: 7
    }
    const part3 = {
        name: 'State of a component',
        exs: 14
    }

    return (
        <div>
            <Header course={course}/>
            <Content part1={part1.name} part2={part2.name} part3={part3.name} ex1={part1.exs} ex2={part2.exs} ex3={part3.exs}/>
            <Total ex1={part1.exs} ex2={part2.exs} ex3={part3.exs}/>
        </div>
    )
}

export default App