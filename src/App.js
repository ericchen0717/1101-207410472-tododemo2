import Todo from './components/Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text='apple' />
      <Todo text='google' />
      <Todo text='asus' />
    </div>
  );
}

export default App;
