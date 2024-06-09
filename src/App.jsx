import './App.css'
import Counter from './Counter'
import Tem from './Tem'
import User from './User'
function App() {

  function handlecleck () {
    alert('click me')
  }
  const handleclick2 = () => {
     alert('on click on ')
  }

  return (
    <>
    <User></User>
    <Tem></Tem>
      <Counter></Counter>
      
      

      <h3>React core consept part 2</h3>
     
    <button onClick={handlecleck}>click me </button>

    <button onClick={handleclick2}>
      click me 2
    </button>

    </>
  )
}

export default App
