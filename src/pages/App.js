// import logo from './logo.svg';
import appStyles from '../styles/App.module.css';
import { Main } from '../components/Home';
import { useState } from 'react';

function App({usr}) {
  const [user, setUser] = useState(usr);

  return (
    <>
      <Main user={usr}/> 

    </>
  );
}

export default App;
