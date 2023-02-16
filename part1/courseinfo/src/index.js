import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({nameCourse}) => <h1>{nameCourse}</h1>

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0]} {props.exercises[0]}</p>
      <p>{props.parts[1]} {props.exercises[1]}</p>
      <p>{props.parts[2]} {props.exercises[2]}</p>
    </div>
    )
}

const Total = (props) => {
  let total = props.exercises1 + props.exercises2 + props.exercises3
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header nameCourse={course}/>
      <Content parts={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
