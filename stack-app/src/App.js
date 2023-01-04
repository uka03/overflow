import Nav from "./component/Nav";
import Left from "./component/Leftside";
import Middle from "./component/Middle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container main">
        <Left />
        <Middle />
      </main>
    </div>
  );
}

export default App;
