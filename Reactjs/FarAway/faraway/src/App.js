import logo from './logo.svg';
import './App.css';
import { Logo } from './Components/Logo/Logo';
import { Form } from './Components/Form/Form';
import { PackagingList } from './Components/PackagingList/PackagingList';
import { Stats } from './Components/Stats/Stats';
import { useState } from 'react';

function App() {

  const [itemsArr, setItemsArr] = useState(
    [
      {
        quantity: 4,
        name: "Socks",
        packed: false
      },
      {
        quantity: 2,
        name: "water bottles",
        packed: false
      },
      {
        quantity: 6,
        name: "Suits",
        packed: false
      },
      {
        quantity: 1,
        name: "Charger",
        packed: false
      },
      {
        quantity: 10,
        name: "toffee",
        packed: true
      }
    ]
  )


  return (
    <>
      <Logo />
      <Form setItemsArr={setItemsArr} item={itemsArr} />
      <PackagingList item={itemsArr} setItemsArr={setItemsArr} />
      <Stats />
    </>
  );
}

export default App;
