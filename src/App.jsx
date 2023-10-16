const Hello = (props) => {

  console.log(props);
  return (
    <p>Hello, Guest!</p>
  )
}

const App = () => {
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name='Marcus' />
      <Hello name='jesus' />
    </div>

  ) 
}

export default App;