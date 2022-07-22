import logo from './logo.svg';
import styles from './App.module.css';
import Data from './Data';
import { createEffect, createSignal } from 'solid-js';

import { Routes, Route,Link } from "solid-app-router"
import Add from './Add';
function App() {
  const [first, setFirst] = createSignal("JSON");
  const [last, setLast] = createSignal("Bourne");
  
  createEffect(() => 

  setTimeout(()=>{
    setFirst("ramling")
    setLast("survase")
    console.log(`${first()} ${last()}`)
  },5000)
  );

  return (
    <div class={styles.App}>
          <nav>
      <Link href="/add">add</Link>
      <Link href="/data">Data</Link>
      <Link href="/">Home</Link>
    </nav>
          <Routes>
          {/* <Route path="/users/:id" element={<User />} data={UserData} />; */}
      <Route path="/data" element={<Data/>} />
      <Route path="/add" element={<Add/>} />

    </Routes>
      
{/*       
      <h1>ramling</h1>
      <h2>{first()}{last()}</h2> */}
      {/* <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header> */}
    </div>
  );
}

export default App;
