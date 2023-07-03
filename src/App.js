import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
//LoginComponent
import Login from "./components/Login";
// context
import AuthContextProvider from "./context/AuthContext";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route path ="/chats" component={Chats}/>
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
