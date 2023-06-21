import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action='http://localhost:3001/affirmations' method='post'>
        <input type='text'/>
        <input type='submit'/>
      </form>
    </div>
  );
}

export default App;
