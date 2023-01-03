import Nav from "./component/Nav";
import Left from "./component/Leftside";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container">
        <Left />
      </main>
    </div>
  );
}

export default App;
