import './App.css';


var imagePath = "/Users/bradjorgensen/Code/photo_sale/src/bend.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagePath} className="App-logo" alt="logo" />
        <p>
          hello world!
        </p>
      </header>
    </div>
  );
}

export default App;
