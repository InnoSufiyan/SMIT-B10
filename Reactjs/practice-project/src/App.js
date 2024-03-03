import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import PeopleProfile from './Pages/PeopleProfile';
import PeopleSearch from './Pages/PeopleSearch';
import { useEffect, useRef, useState } from 'react';



function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobssearch" element={<Jobs />} />
        <Route path="peoplesearch/:userId" element={<PeopleProfile />} />
        <Route path="peoplesearch" element={<PeopleSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const count = useRef(0);
//   // const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log("chala")
//     count.current = count.current + 1;
//     // setCount(count + 1)
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

export default App;
