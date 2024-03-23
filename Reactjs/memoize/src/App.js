import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Counter2 from './TodoList';

function App() {

  const [list, setList] = useState([])
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // const food = useMemo(() => {
  //   return {
  //     name: "biryani",
  //     resturant: "indian kitchen",
  //     price: "400"
  //   }
  // }, [counter])

  const food = useMemo(() => {
    return {
      name: "sdad",
      color: "dadasd"
    }
  }, [])

  const food2 = {
    name: "sdad",
    color: "dadasd"
  }


  const counterHandler = () => {
    setCounter(counter => counter + 1)
  }


  const counterHandler2 = () => {
    setCounter2(counter2 => counter2 + 1)
  }

  const foo = useCallback(() => {
    return () => {
      console.log('dada')
    }
  }, [counter])


  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      <button onClick={counterHandler}>Update</button>



      <Counter2 counter2={counter2} food={food} foo={foo} />
      <button onClick={counterHandler2}>Add List</button>

    </div>
  );
}

export default App;
