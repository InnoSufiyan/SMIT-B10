import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './Pages/Home';
import { JobSearch } from './Pages/JobSearch';
import { JobDetail } from './Pages/JobDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobsearch" element={<JobSearch />} />
        <Route path="/jobsearch/:id" element={<JobDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
