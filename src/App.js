import Header from "./component/header/Header";
import Characters from "./component/characters/Characters"
import Comics from "./component/comics/Comics"
import {QueryClientProvider,QueryClient} from "react-query"
import "./App.css";

function App() {
  const queryClinet = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClinet}>
    <div className="body-container">
      <Header></Header>
      <Characters></Characters>
      <Comics></Comics>
      </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
