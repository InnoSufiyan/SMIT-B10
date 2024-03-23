import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { createContext, useContext, useReducer, useState } from 'react';

export const MeriContext = createContext()

const initialState = {
  dataForComponent1: "Component 1 data",
  dataForComponent2: "Component 2 data",
  dataForComponent3: "Component 3 data",
  dataForComponent4: "Component 4 data",
  dataForComponent5: "Component 5 data",
  dataForComponent6: "Component 6 data",
}

const reducer = (state, action) => {
  if (action.type == 'component1') {
    return {
      ...state, dataForComponent1: action.payload
    }
  } else if (action.type == 'component2') {
    return { ...state, dataForComponent2: action.payload }
  }
  else if (action.type == 'component3') {
    return { ...state, dataForComponent3: action.payload }
  }
  else if (action.type == 'component4') {
    return { ...state, dataForComponent4: action.payload }
  }
  else if (action.type == 'component5') {
    return { ...state, dataForComponent5: action.payload }
  }
  else if (action.type == 'component6') {
    return { ...state, dataForComponent6: action.payload }
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)



  return (
    <MeriContext.Provider value={{
      state,
      dispatch
    }}>
      <div className="App">
        <Home />
        <About />
        <Contact />
      </div>
    </MeriContext.Provider>
  );
}

export default App;
