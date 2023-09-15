import { Main } from '../components/Home';
import { Art } from '../components/Art';
import { About } from '../components/About';
import { useState } from 'react';

function App({usr, component}) {
  const [user, setUser] = useState();
  setUser(usr);

  const output = (component === "main" ? (<Main user={user}/> ) : (component === "art" ? <Art user={user}/> : <About user={user}/>))

  return (
    <>
       {output}
    </>
  );
}

export default App;
