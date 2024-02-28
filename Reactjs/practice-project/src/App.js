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

export default App;
