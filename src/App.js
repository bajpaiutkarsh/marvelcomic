import Header from "./component/header/Header";
import Characters from "./component/characters/Characters";
import Comics from "./component/comics/Comics";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./component/Store";

function App() {
  const queryClinet = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClinet}>
          <div className="body-container">
            <Header></Header>
            <Characters></Characters>
            <Comics></Comics>
          </div>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
