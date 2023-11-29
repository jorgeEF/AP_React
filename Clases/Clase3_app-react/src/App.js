import './App.css';
import { About } from './Components/About/About';


function App() {

  const nombre="pepe"

  const user={
    name: "pepe",
    lastname: "grillo",
    age: "32",
    img: "https://3.bp.blogspot.com/-3IPNmRI5wLg/VzNWE9GWwBI/AAAAAAAAWoI/2RdMu-hRorUo3695MYvfJZvIPHT9OUSwQCK4B/s320/302.gif",
    likesCss: false
  }

  return (
    <main>
      <h2>Hola {nombre}</h2>
      <About user={user}/>
    </main>
  );
}

export default App;
