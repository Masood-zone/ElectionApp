import { BrowserRouter } from "react-router-dom";
import MainApp from "./pages";
import { HeaderLarge } from "./components/header";

function App() {
  return (
    <div>
      <HeaderLarge title="Election Application" />
      <BrowserRouter basename="/">
        <MainApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
