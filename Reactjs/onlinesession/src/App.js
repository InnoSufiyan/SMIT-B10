
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Pages/Home';
import { JobSearch } from './Pages/JobSearch';
import { JobDetail } from './Pages/JobDetail';
import ProtectedRoutes from './Component/ProtectedRoutes';
import { createContext, useReducer } from 'react';
import { Login } from './Pages/Login';
import { JobCreatePage } from './Pages/JobCreatePage';

export const GlobalContext = createContext()

const initialState = {
  user: null
}

const reducer = (state, action) => {
  if (action.type === 'login') {
    return {
      ...state, user: true
    }
  } else if (action.type === 'logout') {
    return {
      ...state, user: null
    }
  } else {
    return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <GlobalContext.Provider value={{
      state, dispatch
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobsearch" element={<JobSearch />} />
          <Route path="/jobsearch/:id" element={<JobDetail />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/jobcreatepage" element={<JobCreatePage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>

  );
}

export default App;
