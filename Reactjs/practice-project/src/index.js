import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import App2 from './App2';
import About from './About';
import ComponentPractice from './ComponentPractice';
import DifferentStages from './DifferentStages/DifferentStages';
import { CustomHookLearning } from './Pages/CustomHookLearning';
import { UseReducer } from './Pages/UseReducer';
import { MemoizeLearning } from './Pages/MemoizeLearning';
import CustomHookPractice from './Components/CutomHookPracitce';
import { TodoListReducer } from './Pages/TodoListReducer';
import { HiringMineUseReducer } from './Pages/HiringMIneUseReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App2 /> */}
    {/* <About /> */}
    {/* <App name="Haroon" />
    <App name="Ehtisham" />
    <App name="Farooq" />
    <App />
    <App name="Sufiyan" />
    <App name="Saqib" age="32" />
    <App />
  <Counter /> */}
    {/* <ComponentPractice /> */}
    {/* <DifferentStages /> */}
    {/* <App /> */}
    {/* <CustomHookLearning /> */}
    {/* <UseReducer /> */}
    {/* < MemoizeLearning /> */}
    {/* <CustomHookPractice /> */}
    {/* <TodoListReducer /> */}
    <HiringMineUseReducer />
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
