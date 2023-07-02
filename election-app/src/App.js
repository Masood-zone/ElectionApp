import { BrowserRouter } from "react-router-dom";
import MainApp from "./pages";
import { NavBar, NavDrop, NavLink } from "./components/navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <NavBar title="Election App" href="/">
        <NavLink link="Dashboard" href="/" />

        <NavDrop title="Voter" href="/voters">
          <a className="dropdown-item" href="/voters/add">
            Apply
          </a>
          <a className="dropdown-item" href="/voters/list">
            Voters
          </a>
        </NavDrop>

        <NavDrop title="Candidate" href="/candidates">
          <a className="dropdown-item" href="/candidates/add">
            Apply
          </a>
          <a className="dropdown-item" href="/candidates/list">
            Candidates
          </a>
        </NavDrop>

        <NavDrop title="Position" href="/positions">
          <a className="dropdown-item" href="/positions/add">
            Apply
          </a>
          <a className="dropdown-item" href="/positions/list">
            Positions
          </a>
        </NavDrop>
      </NavBar>

      <BrowserRouter basename="/">
        <MainApp />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
