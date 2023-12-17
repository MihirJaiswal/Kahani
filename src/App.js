import Home from "./pages/home/Home";
import Topbar from "./components/top-bar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (
  <Router>
   <Topbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/write">
        <Write />
      </Route>
      <Route path="/setting">
        <Setting />
      </Route>
      <Route path="/post/:postId">
        <Single />
      </Route>
    </Switch>
   </Router>
  );
}

export default App;
