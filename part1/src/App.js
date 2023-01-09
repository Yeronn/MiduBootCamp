import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app del curso fullstaack bootcamp</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='blue' message='En un curso'/>
      <Mensaje color='yellow' message='De React'/>
      <Mensaje />
      <Description />
    </div>
  );
}

export default App;
