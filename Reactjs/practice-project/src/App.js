import logo from './logo.svg';
import './App.css';



function App({ name }) {

  function kuchHo(name2) {
    alert(name2)
  }

  return (
    <div className="App" onClick={()=> kuchHo(name)}>
      {name || "Ponka"}
    </div>
  );
}

export default App;
