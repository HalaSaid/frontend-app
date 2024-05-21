import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <body className="App-body">
      <p>
          Task for clean architecture.
        </p>
        <Registration/><br></br>
      </body>
    </div>
  );
}

export default App;
