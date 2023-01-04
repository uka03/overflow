import Nav from "./component/Nav";
import Left from "./component/Leftside";
import "./App.css";
import Title from "./component/Title";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container main">
        <Left />
        <section className="content">
          <Title />
        </section>
      </main>
    </div>
  );
}

export default App;
