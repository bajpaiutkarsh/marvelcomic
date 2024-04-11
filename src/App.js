import Header from "./component/header/Header";
import Characters from "./component/characters/Characters"
import Comics from "./component/comics/Comics"
import "./App.css";

function App() {
  return (
    <>
    <div className="body-container">
      <Header></Header>
      <Characters></Characters>
      <Comics></Comics>
      </div>
    </>
  );
}

export default App;
