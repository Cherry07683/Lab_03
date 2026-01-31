import './App.css';
import StepCounter from './StepCounter';

function App () {
  return (
    <div className="App">
      <h1>My Counter App</h1>
      <StepCounter start={0} step={1} />
      <StepCounter start={10} step={5} />

    </div>
  );
}

export default App;